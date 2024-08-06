import {Metadata} from 'next';
import Link from 'next/link';

import { NewsPost } from "@/components/NewsPost";
import { newsPostSlugs, getNewsPostBySlug} from "@/lib/api/news";

export const metadata: Metadata = {
  title: 'Actualités - Fusion',
  description: 'Les dernières actualités de la collection Fusion, par les éditions L\'Atalante',
  alternates: {
    canonical: 'https://fusionlatalante.fr/fr/page/actualites',
  },
}

const newsPosts = newsPostSlugs
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
