import Image from 'next/image';
import {Metadata} from "next";
import Link from 'next/link';

import BordacarreImage from '../../../../../_site/images/authors/olivier-bordacarre.jpg';
import BuchholzImage from '../../../../../_site/images/authors/simone-buchholz.jpg';
import LanganeyImage from '../../../../../_site/images/authors/anouk-langaney.jpg';
import MilianImage from '../../../../../_site/images/authors/clement-milian.jpg';
import VerdanImage from '../../../../../_site/images/authors/nicolas-verdan.jpg';

export const metadata: Metadata = {
  title: 'Auteurs - Fusion',
}

export default function Page() {
  return <div className="contributors-page">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Auteurs</span>
    </nav>

    <div className="contributors">
      <article className="contributor">
        <div className="contributor-portrait">
          <Image
            src={BordacarreImage}
            alt="Portrait de Olivier Bordaçarre"
            className="contributor-portrait-image"
          />
        </div>
        <h1 className="contributor-name">Olivier Bordaçarre</h1>
        <p className="contributor-bio">
          Olivier Bordaçarre est comédien et scénariste. Son premier roman a paru en 2006 chez Fayard. Il est connu des
          lecteurs pour <em>La France tranquille</em> et <em>Dernier désir</em> (Prix de la ville de Mauves-sur-Loire en
          2015).
        </p>
        <h2 className="contributor-books-title">Livres</h2>
        <div className="contributor-books-products">
          <article className="contributor-books-product">
            <Link href="/fr/p/appartement-816">
              <Image
                src={require('../../../../../_site/images/covers/appartement-816.jpg')}
                alt="Appartement 816"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/appartement-816">Appartement 816</Link>
            </h1>
            <p className="contributor-books-product-author">Olivier Bordaçarre</p>
          </article>
        </div>
      </article>
      <article className="contributor">
        <div className="contributor-portrait">
          <Image
            src={BuchholzImage}
            alt="Portrait de Simone Buchholz"
            className="contributor-portrait-image"
          />
        </div>
        <h1 className="contributor-name">Simone Buchholz</h1>
        <p className="contributor-bio">
          Simone Buchholz est née en 1972 en Allemagne, dans la région de
          Francfort, et elle vit à Hambourg. Elle a été journaliste avant de
          choisir la fiction criminelle. Ses romans sont traduits en anglais et
          en italien et ont remporté de nombreux prix.
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
              <Link href="/fr/p/rue-mexico">Rue Mexico</Link>
            </h1>
            <p className="contributor-books-product-author">Simone Buchholz</p>
          </article>
        </div>
      </article>
      <article className="contributor">
        <div className="contributor-portrait">
          <Image
            src={LanganeyImage}
            alt="Portrait de Anouk Langaney"
            className="contributor-portrait-image"
          />
        </div>
        <h1 className="contributor-name">Anouk Langaney</h1>
        <p className="contributor-bio">
          Anouk Langaney est une autrice française, elle vit et enseigne en Corse.<br />
          Clark est son troisième roman. Elle a publié Même pas morte (2013,
          Albiana), Cannibal Tour (2014, Albiana) et le roman jeunesse Le Temps
          des hordes (2020, Albiana).<br />
          Anouk Langaney se caractérise par une écriture qui oscille entre
          l’humour et une forme d’ironie piquante.<br />
        </p>
        <h2 className="contributor-books-title">Livres</h2>
        <div className="contributor-books-products">
          <article className="contributor-books-product">
            <Link href="/fr/p/clark">
              <Image
                src={require('../../../../../_site/images/covers/clark.jpg')}
                alt="Clark"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/clark">Clark</Link>
            </h1>
            <p className="contributor-books-product-author">Anouk Langaney</p>
          </article>
        </div>
      </article>
      <article className="contributor">
        <div className="contributor-portrait">
          <Image
            src={MilianImage}
            alt="Portrait de Clément Milian"
            className="contributor-portrait-image"
          />
        </div>
        <h1 className="contributor-name">Clément Milian</h1>
        <p className="contributor-bio">
          Clément Milian est né à Nantes en 1981.<br />
          Il est l’auteur de <em>Planète Vide</em>, <em>Le Triomphant</em> et de quelques nouvelles.<br />
          Il a vécu plusieurs années dans le quartier de Stalingrad, où se situe son troisième roman.<br />
        </p>
        <h2 className="contributor-books-title">Livres</h2>
        <div className="contributor-books-products">
          <article className="contributor-books-product">
            <Link href="/fr/p/un-conte-parisien-violent">
              <Image
                src={require('../../../../../_site/images/covers/un-conte-parisien-violent.jpg')}
                alt="Un conte parisien violent"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/un-conte-parisien-violent">Un conte parisien violent</Link>
            </h1>
            <p className="contributor-books-product-author">Clément Milian</p>
          </article>
        </div>
      </article>
      <article className="contributor">
        <div className="contributor-portrait">
          <Image
            src={VerdanImage}
            alt="Portrait de Nicolas Verdan"
            className="contributor-portrait-image"
          />
        </div>
        <h1 className="contributor-name">Nicolas Verdan</h1>
        <p className="contributor-bio">
          Né en 1971 à Vevey en Suisse, Nicolas Verdan est un ancien journaliste, passionné
          de politique internationale, et auteur.<br />
          Il travaille pendant douze ans pour le quotidien 24 heures, ce qui l’emmènera en
          reportage au Proche-Orient et dans les Balkans. D’un père suisse et d’une mère grecque,
          il vit une partie de l’année à Athènes pour mieux comprendre son autre pays. Il enquête
          pour rendre compte de la réalité grecque, entre libéralisme et corruption. Ainsi naît
          le personnage d’Agent Evangelos, policier, ancien militaire sous la dictature des colonels,
          et ancien du Renseignement.<br />
          En 2006, Nicolas Verdan obtient pour son premier roman le prix Bibliomedia, le prix Schiller
          (prix suisse de littérature) en 2012 et le prix du polar romand en 2018. Nicolas Verdan est
          publié pour la première fois en France.<br /><br />
          Photo © Yves Leresche.
        </p>
        <h2 className="contributor-books-title">Livres</h2>
        <div className="contributor-books-products">
          <article className="contributor-books-product">
            <Link href="/fr/p/le-mur-grec">
              <Image
                src={require('../../../../../_site/images/covers/le-mur-grec.jpg')}
                alt="Le Mur grec"
                className="contributor-books-product-cover"
              />
            </Link>
            <h1 className="contributor-books-product-title">
              <Link href="/fr/p/le-mur-grec">Le Mur grec</Link>
            </h1>
            <p className="contributor-books-product-author">Nicolas Verdan</p>
          </article>
        </div>
      </article>

    </div>
  </div>;
}
