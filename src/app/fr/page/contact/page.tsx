import {Metadata} from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact - Fusion',
}

export default function Page() {
  return <div className="contact-page">

    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Contact</span>
    </nav>

    <div className="contact-page-block">
      <h2>Éditions L&apos;Atalante | Collection FUSION</h2>
      <p> 15, rue des Vieilles-Douves<br /> BP 83<br /> 44 000 Nantes Cedex </p>
      <p> <a href="tel:+33240205623">02.40.20.56.23</a> </p>
      <p> <a href="mailto:bonjour@l-atalante.fr">bonjour@l-atalante.fr</a> </p>

      <h2>Contact presse</h2>
      <p> Olivia Castillon </p>
      <p> <a href="mailto:olivia.castillon@wanadoo.fr">olivia.castillon@wanadoo.fr</a> </p>
      <p> <a href="tel:+33676233037">06.76.23.30.37</a> </p>


      <h2>Contact relations libraires</h2>
      <p> Christophe Grossi </p>
      <p> <a href="mailto:christophe@agence-relief.com">christophe@agence-relief.com</a> </p>
      <p> <a href="tel:+33619709029">06.19.70.90.29</a> </p>

      <h2>Foreign Rights</h2>
      <p>Denis Detraz</p>
      <p> <a href="mailto:denis.detraz@l-atalante.fr"> denis.detraz@l-atalante.fr </a> </p>
    </div>

  </div>

}
