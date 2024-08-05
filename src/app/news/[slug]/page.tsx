import Link from 'next/link';
import { notFound } from 'next/navigation';

import { NewsPost } from '@/components/NewsPost';
import { newsPostSlugs, getNewsPostBySlug } from '@/lib/api/news';

type RouteParams = {
  params: {
    slug: string;
  };
}

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  return newsPostSlugs.map((slug) => {
    return { slug };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  if (!newsPostSlugs.includes(requestSlug)) {
    return {};
  }

  const newsPost = getNewsPostBySlug(requestSlug);
  return {
    title: `${newsPost.title} - Fusion`,
    alternates: {
    canonical: `https://fusionlatalante.fr/news/${requestSlug}`,
  },
  }
}

export default function NewsPostPage({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  if (!newsPostSlugs.includes(requestSlug)) {
    return notFound();
  }

  const newsPost = getNewsPostBySlug(requestSlug);
  // noinspection HtmlUnknownTarget
  return <div className="news-post-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <Link href="/fr/page/actualites">Actualités</Link>
    </nav>

    <NewsPost post={newsPost} />
  </div>;
}

