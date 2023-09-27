import Image from 'next/image';
import LayreImage from '../../../../../_site/images/translators/claudine-layre.jpg';
import {Metadata} from "next";
import Link from 'next/link';
import {getContributorsByRole} from "@/lib/api";
import {ContributorPreview} from "@/components/ContributorPreview";

export const metadata: Metadata = {
  title: 'Traducteurs - Fusion',
}

const translators = getContributorsByRole("Translator");

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
