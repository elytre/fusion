import {Metadata} from 'next';
import Link from 'next/link';
import * as fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { NewsPost } from "@/components/NewsPost";
import { NewsPost as NewsPostType } from '@/types';

export const metadata: Metadata = {
  title: 'Actualités - Fusion',
}

const newsDirectory = join(process.cwd(), '_site/news');
const newsPostsSlugs = fs.readdirSync(newsDirectory);
const newsPosts = newsPostsSlugs
  .map(_loadNewsPost)
  .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

export default function NewsPage() {
  return <div className="news-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Actualités</span>
    </nav>

    <div className="news-list">
      {newsPosts.map(post => <NewsPost key={post.title} post={post} />)}
    </div>
  </div>;
}

function _loadNewsPost(slug: string): NewsPostType {
  const newsFilePath = `${newsDirectory}/${slug}`;
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
