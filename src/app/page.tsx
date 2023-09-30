import Image from 'next/image';
import Link from 'next/link';

export default function Home () {
  return <div className="HomeView home-page">

    <div className="headline">
      <Link href="/fr/p/un-conte-parisien-violent">
        <Image
          src="/news/bandeau-Conte-Parisien-facebook.jpg"
          width="1600"
          height="529"
          alt="Un conte parisien violent"
          className="headline-image"
        />
      </Link>
    </div>

    <div className="home-products">
      <div className="home-products-section">
        <article className="home-product">
          <h1 className="home-products-section-title">À paraître</h1>
          <time className="home-product-publication-date" dateTime="2023-10-05">
            5 octobre 2023
          </time>
          <Link href="/fr/p/la-recolte-des-enfants">
            <Image
              src="/covers/la-recolte-des-enfants.jpg"
              alt="Couverture du livre La Récolte des enfants"
              width={1024}
              height={1448}
              className="home-product-cover"
            />
          </Link>
          <h1 className="home-product-title">
            <Link href="/fr/p/la-recolte-des-enfants">La Récolte des enfants</Link>
          </h1>
          <p className="home-product-author">Nicolas Verdan</p>
        </article>
        <article className="home-product">
          <h1 className="home-products-section-title">Nouveautés</h1>
          <time className="home-product-publication-date" dateTime="2023-02-23">
            6 avril 2023
          </time>
          <Link href="/fr/p/un-conte-parisien-violent">
            <Image
              src="/covers/un-conte-parisien-violent.jpg"
              alt="Couverture du livre Un conte parisien violent"
              width={1024}
              height={1448}
              className="home-product-cover"
            />
          </Link>
          <h1 className="home-product-title">
            <Link href="/fr/p/un-conte-parisien-violent">Un conte parisien violent</Link>
          </h1>
          <p className="home-product-author">Clément Milian</p>
        </article>
        <article className="home-product">
          <time className="home-product-publication-date" dateTime="2023-02-23">
            23 février 2023
          </time>
          <Link href="/fr/p/rue-mexico">
            <Image
              src="/covers/rue-mexico.jpg"
              alt="Couverture du livre Rue Mexico"
              width={1024}
              height={1448}
              className="home-product-cover"
            />
          </Link>
          <h1 className="home-product-title">
            <Link href="/fr/p/rue-mexico">Rue Mexico</Link>
          </h1>
          <p className="home-product-author">Simone Buchholz</p>
        </article>
        <article className="home-product">
          <time className="home-product-publication-date" dateTime="2022-10-06">
            06 octobre 2022
          </time>
          <Link href="/fr/p/le-mur-grec">
            <Image
              src="/covers/le-mur-grec.jpg"
              alt="Couverture du livre Le Mur grec"
              width={1024}
              height={1448}
              className="home-product-cover"
            />
          </Link>
          <h1 className="home-product-title">
            <Link href="/fr/p/le-mur-grec">Le Mur grec</Link>
          </h1>
          <p className="home-product-author">Nicolas Verdan</p>
        </article>
      </div>
    </div>

    <div className="manifest">
      <h1 className="manifest-title">Une nouvelle collection</h1>

      <p> L’acte de naissance du roman policier revient à Edgar Allan Poe, poète et écrivain de littérature fantastique. Dans son sillage, des auteurs de référence comme Conan Doyle, Agatha Christie, Jim Thompson, Fred Vargas et tant d’autres, se nourrissent d’influences diverses. Ils et elles ont créé un va-et-vient chaque jour plus riche entre les genres. </p>
      <p> Les nouvelles générations débordent le cadre fixé par les codes. Les éléments du polar se retrouvent dans la science-fiction, le fantastique imprègne le noir, et la littérature dite « blanche » s’empare de ces références populaires. Les imaginaires fusionnent. </p>
      <p>
        <Link href="/fr/page/a-propos" className="manifest-link">{'>'} Lire la suite</Link>
      </p>
    </div>

    <div className="newsletter">
      <iframe
        className="newsletter-iframe"
        src="https://app.mailjet.com/widget/iframe/2pqw/H8G" width="100%">
      </iframe>
    </div>
  </div>
}
