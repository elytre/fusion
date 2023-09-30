import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import { NewsPost as NewsPostType } from "@/types";

const newsDirectory = join(process.cwd(), '_site/news');

export const newsPostSlugs = function () {
  const newsPostsFilenames = fs.readdirSync(newsDirectory);
  return newsPostsFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}();

export function getNewsPostBySlug(slug: string): NewsPostType {
  const newsFilePath = `${newsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(newsFilePath, 'utf8');
  const {data, content} = matter(fileContents);
  return {
    slug,
    title: data.title,
    date: data.date,
    image: data.image,
    html: Boolean(data.html),
    content,
  };
}
