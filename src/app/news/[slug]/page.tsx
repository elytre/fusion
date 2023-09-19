import {NewsPost} from "@/components/NewsPost";
import {getAllNewsPostSlugs, getNewsPostBySlug} from "@/lib/api";
import Link from "next/link";

type RouteParams = {
  params: {
    slug: string;
  };
}

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  return getAllNewsPostSlugs().map((slug) => {
    return { slug };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  const newsPost = getNewsPostBySlug(requestSlug);

  if (!newsPost) {
    return {};
  }

  return {
    title: `${newsPost.title} - Fusion`,
  }
}

export default function NewsPostPage({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  const newsPost = getNewsPostBySlug(requestSlug);
  return <div className="news-post-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <Link href="/fr/page/actualites">Actualités</Link>
    </nav>

    <NewsPost post={newsPost} />
  </div>;
}

