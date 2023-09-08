import Image from 'next/image';
import {Metadata} from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Livres - Fusion',
}

export default function Page() {
  return <div className="books">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Livres</span>
    </nav>

    <div className="ProductList">
      <article className="Product">
        <Link href="/fr/p/la-recolte-des-enfants">
          <Image
            src={require('../../../../../_site/images/covers/la-recolte-des-enfants.jpg')}
            alt="La Récolte des enfants"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/la-recolte-de-enfants">La Récolte des enfants</Link>
        </h1>
        <p className="Product-author">Nicolas Verdan</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/un-conte-parisien-violent">
          <Image
            src={require('../../../../../_site/images/covers/un-conte-parisien-violent.jpg')}
            alt="Rue Mexico"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/un-conte-parisien-violent">Un conte parisien violent</Link>
        </h1>
        <p className="Product-author">Clément Milian</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/rue-mexico">
          <Image
            src={require('../../../../../_site/images/covers/rue-mexico.jpg')}
            alt="Rue Mexico"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/rue-mexico">Rue Mexico</Link>
        </h1>
        <p className="Product-author">Simone Buchholz</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/le-mur-grec">
          <Image
            src={require('../../../../../_site/images/covers/le-mur-grec.jpg')}
            alt="Le Mur grec"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/le-mur-grec">Le Mur grec</Link>
        </h1>
        <p className="Product-author">Nicolas Verdan</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/beton-rouge">
          <Image
            src={require('../../../../../_site/images/covers/beton-rouge.jpg')}
            alt="Béton rouge"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/beton-rouge">Béton rouge</Link>
        </h1>
        <p className="Product-author">Simone Buchholz</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/appartement-816">
          <Image
            src={require('../../../../../_site/images/covers/appartement-816.jpg')}
            alt="Appartement 816"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/appartement-816">Appartement 816</Link>
        </h1>
        <p className="Product-author">Olivier Bordaçarre</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/clark">
          <Image
            src={require('../../../../../_site/images/covers/clark.jpg')}
            alt="Clark"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/clark">Clark</Link>
        </h1>
        <p className="Product-author">Anouk Langaney</p>
      </article>
      <article className="Product">
        <Link href="/fr/p/nuit-bleue">
          <Image
            src={require('../../../../../_site/images/covers/nuit-bleue.jpg')}
            alt="Nuit bleue"
            className="Product-cover-image"
          />
        </Link>
        <h1 className="Product-title">
          <Link href="/fr/p/nuit-bleue">Nuit bleue</Link>
        </h1>
        <p className="Product-author">Simone Buchholz</p>
      </article>
    </div>
  </div>;
}
