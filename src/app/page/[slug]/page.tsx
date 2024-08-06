import Link from 'next/link';
import { notFound } from 'next/navigation';

import { RouteParams } from "@/types";
import { getCustomPageBySlug, pageSlugs } from "@/lib/api/pages";
import { CustomPage } from "@/components/CustomPage";

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  return pageSlugs.map((slug) => {
    return { slug };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug } = params;
  if (!pageSlugs.includes(slug)) {
    return {};
  }

  const page = getCustomPageBySlug(slug);
  return {
    title: `${page.title} - Fusion`,
    description: '',
    alternates: {
      canonical: `https://fusionlatalante.fr/page/${slug}`,
    },
  }
}

export default function CustomPagePage({ params }: RouteParams) {
  const { slug } = params;
  if (!pageSlugs.includes(slug)) {
    return notFound();
  }

  const page = getCustomPageBySlug(slug);

  // noinspection HtmlUnknownTarget
  return <div className="news-post-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">{page.title}</span>
    </nav>

    <CustomPage page={page} />
  </div>;
}
