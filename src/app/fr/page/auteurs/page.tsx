import Link from 'next/link';
import { Metadata } from 'next/types';

import { getContributorsByRole } from "@/lib/api";
import { ContributorPreview } from "@/components/ContributorPreview";

export const metadata: Metadata = {
  title: 'Auteurs - Fusion',
}

const authors = getContributorsByRole("Author");

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
