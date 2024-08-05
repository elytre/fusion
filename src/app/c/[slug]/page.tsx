// noinspection HtmlUnknownTarget

import {notFound} from "next/navigation";
import Link from "next/link";

import markdownToHtml from "@/lib/markdown-to-html";
import {Contributor} from "@/components/Contributor";
import { getProductsForContributor } from "@/lib/api/products";
import { contributorSlugs, getContributorBySlug } from "@/lib/api/contributors";

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  return contributorSlugs.map((slug) => {
    return { slug };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug } = params;
  if (!contributorSlugs.includes(slug)) {
    return {};
  }

  const contributor = getContributorBySlug(slug);
  return {
    title: `${contributor.name} - Fusion`,
    alternates: {
    canonical: `https://fusionlatalante.fr/fr/${slug}`,
  },
  }
}

type RouteParams = {
  params: {
    slug: string;
  };
}

export default async function ContributorPage({ params }: RouteParams) {
  const { slug } = params;
  if (!contributorSlugs.includes(slug)) {
    return notFound();
  }

  const contributor = getContributorBySlug(slug);
  const biography = await markdownToHtml(contributor.biography || '');
  const products = getProductsForContributor(contributor);

  return <>
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <Link href="/fr/page/auteurs">Auteurs</Link>
    </nav>

    <div className="contributor-page">
      <Contributor contributor={contributor} biography={biography} products={products} />
    </div>
  </>;
}
