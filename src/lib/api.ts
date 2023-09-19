import {NewsPost as NewsPostType} from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import {join} from "path";

const newsDirectory = join(process.cwd(), '_site/news');

export function getAllNewsPostSlugs() {
  const newsDirectory = join(process.cwd(), '_site/news');
  const newsPostsFilenames = fs.readdirSync(newsDirectory);
  return newsPostsFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}

export function getNewsPostBySlug(slug: string): NewsPostType {
  const newsFilePath = `${newsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(newsFilePath, 'utf8');
  const {data, content} = matter(fileContents);
  return {
    title: data.title,
    date: data.date,
    image: data.image,
    html: Boolean(data.html),
    content,
  };
}
