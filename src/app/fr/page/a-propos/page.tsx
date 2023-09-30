import Image from 'next/image';
import {Metadata} from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A propos - Fusion',
}

export default function APropos () {
  return <div className="about-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">À propos</span>
    </nav>

    <div className="page-block">
      <h1>À propos</h1>
      <p> L’acte de naissance du roman policier revient à Edgar Allan Poe, poète et écrivain de littérature fantastique. Dans son sillage, des auteurs de référence comme Conan Doyle, Agatha Christie, Jim Thompson, Fred Vargas et tant d’autres, se nourrissent d’influences diverses. Ils et elles ont créé un va-et-vient chaque jour plus riche entre les genres. </p>
      <p> La collection FUSION entend défendre cette diversité. Son prisme est celui que les Anglo-Saxons appellent crime novel, les Allemands kriminalroman, et que nous nommons en France « littératures policières », « polar » ou «.roman noir ». Il porte une vision tragique, un regard sur le réel. Il agit comme un champ d’étude de la société et de l’être humain, influençant toutes les narrations, à une époque où tant de questions se posent de façon accrue. FUSION souhaite offrir des livres qui accompagnent et nourrissent nos regards, sans jamais oublier de divertir. </p>
      <p> Chez FUSION, le crime est notre affaire. </p>
    </div>

    <div className="page-block page-block--black directors-block">
      <h1>Direction de collection</h1>

      <Image
        src="/site/direction-de-collection.jpg"
        width="1048"
        height="699"
        alt="Photo de Caroline de Benedetti et Emeric Cloche"
        className="about-page-photo"
      />

      <p>Caroline de Benedetti et Emeric Cloche ont créé l’association Fondu Au Noir en 2007. Leur but ? Défendre le polar, mieux faire connaître la diversité de ce genre littéraire. Ils éditent le magazine L’Indic, ils sont formateurs, médiateurs, créateurs d’expositions et de rencontres entre le public et les auteurs.<br />
        Aujourd’hui, ils entreprennent d’ouvrir la porte à des textes, des auteurs et des autrices dont ils ont croisé le chemin, et auxquels ils croient.<br />
        Leur rapprochement avec L’Atalante est la suite logique de ce mélange d’univers, doublé de l’envie commune de développer une littérature curieuse et ouverte, qui abat les frontières.</p>
    </div>
  </div>;
}
