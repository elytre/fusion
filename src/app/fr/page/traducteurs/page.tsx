import Image from 'next/image';
import LayreImage from '../../../../../_site/images/translators/claudine-layre.jpg';
import {Metadata} from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Traducteurs - Fusion',
}

export default function TranslatorsPage() {
  return <div className="contributors-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Traducteurs</span>
    </nav>

    <div className="contributors">
      <article className="contributor">
        <div className="contributor-portrait">
          <Image
            src={LayreImage}
            alt="Claudine Layre"
            className="contributor-portrait-image"
          />
        </div>
        <h1 className="contributor-name">Claudine Layre</h1>
        <p className="contributor-bio">
          Claudine Layre est née en 1959. Tombée dans les livres dès son enfance
          et passionnée d&apos;histoire. Agrégée d&apos;allemand, elle a enseigné en France
          et en Allemagne. Elle traduit des romans, des essais, des articles.
        </p>
        <h2 className="contributor-books-title">Livres</h2>
        <div className="contributor-books-products">
          <article className="contributor-books-product">
            <Link href="/fr/p/nuit-bleue">
              <Image
                src={require('../../../../../_site/images/covers/nuit-bleue.jpg')}
                alt="Nuit bleue"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/nuit-bleue">Nuit bleue</Link>
            </h1>
            <p className="contributor-books-product-author">Simone Buchholz</p>
          </article>
          <article className="contributor-books-product">
            <Link href="/fr/p/beton-rouge">
              <Image
                src={require('../../../../../_site/images/covers/beton-rouge.jpg')}
                alt="Béton rouge"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/beton-rouge">Béton rouge</Link>
            </h1>
            <p className="contributor-books-product-author">Simone Buchholz</p>
          </article>
          <article className="contributor-books-product">
            <Link href="/fr/p/rue-mexico">
              <Image
                src={require('../../../../../_site/images/covers/rue-mexico.jpg')}
                alt="Rue Mexico"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/beton-rouge">Rue Mexico</Link>
            </h1>
            <p className="contributor-books-product-author">Simone Buchholz</p>
          </article>
        </div>
      </article>

    </div>
  </div>;
}
