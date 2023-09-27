// noinspection HtmlUnknownTarget

import Link from "next/link";
import Image from "next/image";

import BordacarreImage from "../../../../_site/images/authors/olivier-bordacarre.jpg";
import {getContributorBySlug, getProductBySlug} from "@/lib/api";

type RouteParams = {
  params: {
    slug: string;
  };
}

export default function ContributorPage({ params }: RouteParams) {
  const { slug } = params;
  const contributor = getContributorBySlug(slug);

  return <div className="contributor-page">
    <article className="contributor">
      <div className="contributor-portrait">
        <Image
          src={BordacarreImage}
          alt="Portrait de Olivier Bordaçarre"
          className="contributor-portrait-image"
        />
      </div>
      <h1 className="contributor-name">{contributor.name}</h1>
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
              src=""
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
  </div>;
}
