// noinspection HtmlUnknownTarget

'use client';

// noinspection HtmlUnknownTarget

import {notFound} from "next/navigation";
import Link from "next/link";

import markdownToHtml from "@/lib/markdown-to-html";
import { Contributor } from "@/components/Contributor";
import { Contributor as ContributorType, RouteParams } from '@/types';
import client from "../../../../../tina/__generated__/client";

// noinspection JSUnusedGlobalSymbols
// export async function generateStaticParams() {
//   return contributorSlugs.map((slug) => {
//     return { slug };
//   });
// }

export default async function ContributorPage({ params }: RouteParams) {
  const { slug } = params;

  // const contributor = getContributorBySlug(slug);

  const { data } = await client.queries.contributors({ relativePath: `${slug}.md` });
  const contributor: ContributorType = {
    name: data.contributors.name,
    slug: slug,
  }

  const biography = await markdownToHtml(contributor.biography || '');

  return <>
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <Link href="/fr/page/auteurs">Auteurs</Link>
    </nav>

    <div className="contributor-page">
      <Contributor contributor={contributor} biography={''} products={[]} />
    </div>
  </>;
}
