import Link from 'next/link';
import { Metadata } from 'next/types';

import { ContributorPreview } from "@/components/ContributorPreview";
import { getContributorsForRole } from '@/lib/api/contributors';

export const metadata: Metadata = {
  title: 'Auteurs - Fusion',
  alternates: {
    canonical: 'https://fusionlatalante.fr/fr/page/auteurs',
  },
}

const authors = getContributorsForRole("Author")
  .sort((author1, author2) => (author1.name > author2.name ? 1 : -1));

export default function Page() {
  return <div className="contributors-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Auteurs</span>
    </nav>

    <div className="contributors">
      {authors.map(author => <ContributorPreview key={author.slug} contributor={author} />)}
    </div>
  </div>;
}
