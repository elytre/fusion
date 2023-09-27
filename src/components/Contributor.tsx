import Image from "next/image";
import ProductPreview from "@/components/ProductPreview";
import {Contributor as ContributorType, Product} from "@/types";

type ContributorProps = {
  contributor: ContributorType;
  biography: string;
  products: Product[],
}

export function Contributor({contributor, biography, products}: ContributorProps) {
  return <article className="Contributor">
    {contributor.photo &&
      <div className="contributor-portrait">
        <Image
          src={contributor.photo}
          alt={`Portrait de ${contributor.name}`}
          width="356"
          height="356"
          className="contributor-portrait-image"
        />
      </div>
    }
    <h1 className="contributor-name">{contributor.name}</h1>
    {biography && <div className="contributor-bio" dangerouslySetInnerHTML={{__html: biography}}/>}
    <h2 className="contributor-books-title">Livres</h2>
    <div className="contributor-books-products">
      {products.map(product => <ProductPreview key={product.slug} product={product}/>)}
    </div>
  </article>;
}
