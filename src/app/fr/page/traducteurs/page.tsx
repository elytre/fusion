import {Metadata} from "next";
import Link from 'next/link';
import {ContributorPreview} from "@/components/ContributorPreview";

import { getContributorsForRole } from '@/lib/api/contributors';

export const metadata: Metadata = {
  title: 'Traducteurs - Fusion',
  description: 'Découvrez les traducteurs et traductrices de la collection Fusion, par les éditions L\'Atalante',
  alternates: {
    canonical: 'https://fusionlatalante.fr/fr/page/traducteurs',
  },
}

const translators = getContributorsForRole("Translator");

export default function Page() {
  return <div className="contributors-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Traducteurs</span>
    </nav>

    <div className="contributors">
      {translators.map(translator => <ContributorPreview key={translator.slug} contributor={translator} />)}
    </div>
  </div>;
}
