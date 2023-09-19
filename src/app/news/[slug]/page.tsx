import {NewsPost} from "@/components/NewsPost";
import {getAllNewsPostSlugs, getNewsPostBySlug} from "@/lib/api";
import Link from "next/link";
import {notFound} from "next/navigation";

type RouteParams = {
  params: {
    slug: string;
  };
}

const newsPostSlugs = getAllNewsPostSlugs();

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
  }
}

export default function NewsPostPage({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  if (!newsPostSlugs.includes(requestSlug)) {
    return notFound();
  }

  const newsPost = getNewsPostBySlug(requestSlug);
  return <div className="news-post-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <Link href="/fr/page/actualites">Actualités</Link>
    </nav>

    <NewsPost post={newsPost} />
  </div>;
}

