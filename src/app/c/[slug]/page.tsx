// noinspection HtmlUnknownTarget

import {notFound} from "next/navigation";

import {contributorSlugs, getContributorBySlug, getProductsForContributor} from "@/lib/api";
import markdownToHtml from "@/lib/markdown-to-html";
import {Contributor} from "@/components/Contributor";

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
  const biography = await markdownToHtml(contributor.biography);
  const products = getProductsForContributor(contributor);

  return <div className="contributor-page">
    <Contributor contributor={contributor} biography={biography} products={products} />
  </div>;
}
