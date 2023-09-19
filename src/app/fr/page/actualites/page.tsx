import {Metadata} from 'next';
import Link from 'next/link';
import * as fs from 'fs';
import { join } from 'path';

import { NewsPost } from "@/components/NewsPost";
import {getAllNewsPostSlugs, getNewsPostBySlug} from "@/lib/api";

export const metadata: Metadata = {
  title: 'Actualités - Fusion',
}

const newsPosts = getAllNewsPostSlugs()
  .map(getNewsPostBySlug)
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
