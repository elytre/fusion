import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';
import { isUserAuthorized } from '@tinacms/auth';
import {getContributorBySlug} from "@/lib/api/contributors";

class APIError
{
  message: string;
  status: number;

  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const token = searchParams.get('token');

  if (!slug) {
    return new Response('Missing slug parameter', { status: 400 });
  }
  const contributor = getContributorBySlug(slug);

  if (!contributor) {
    return new Response('Invalid slug', { status: 401 });
  }

  try {
    const tinaClientId = process.env.TINA_CLIENT_ID ?? null;
    await _ensureUserIsAuthorized(token, tinaClientId);
  } catch (error) {
    if (error instanceof APIError) {
      return new Response(error.message, { status: error.status });
    }
  }

  draftMode().enable();
  redirect(`/c/${contributor.slug}`);
}

async function _ensureUserIsAuthorized(token: string|null, tinaClientId: string|null) {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (!token) {
    throw new APIError('Missing token parameter', 401);
  }

  if (!tinaClientId) {
    throw new APIError('Missing TINA_CLIENT_ID env var', 500);
  }

  const isAuthorizedRes = await isUserAuthorized({
    token: `Bearer ${token}`,
    clientID: tinaClientId,
  })

  if (!isAuthorizedRes) {
    throw new APIError('Invalid token', 401);
  }
}
