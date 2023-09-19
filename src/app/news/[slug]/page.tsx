import {NewsPost} from "@/components/NewsPost";
import {getAllNewsPostSlugs, getNewsPostBySlug} from "@/lib/api";

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
    <NewsPost post={newsPost} />
  </div>;
}

