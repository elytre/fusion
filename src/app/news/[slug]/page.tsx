import {join} from "path";
import fs from "fs";
import {NewsPost as NewsPostType} from "@/types";
import matter from "gray-matter";
import {NewsPost} from "@/components/NewsPost";

type RouteParams = {
  params: {
    slug: string;
  };
}

const newsDirectory = join(process.cwd(), '_site/news');
const newsPostsFilenames = fs.readdirSync(newsDirectory);

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  return newsPostsFilenames.map((filename: string) => {
    return { slug: filename.replace('.md', '') };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  const newsPost = _loadNewsPost(requestSlug);

  if (!newsPost) {
    return {};
  }

  return {
    title: `${newsPost.title} - Fusion`,
  }
}

export default function NewsPostPage({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  const newsPost = _loadNewsPost(requestSlug);
  return <div className="news-post-page">
    <NewsPost post={newsPost} />
  </div>;
}

function _loadNewsPost(slug: string): NewsPostType {
  const newsFilePath = `${newsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(newsFilePath, 'utf8');
  const { data, content} = matter(fileContents);
  return {
    title: data.title,
    date: data.date,
    image: data.image,
    html: Boolean(data.html),
    content,
  };
}
