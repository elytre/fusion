// noinspection HtmlUnknownTarget

import Image from "next/image";
import { notFound } from "next/navigation";

import { contributorSlugs, getContributorBySlug, getProductsForContributor } from "@/lib/api";
import markdownToHtml from "@/lib/markdown-to-html";
import { Contributor as ContributorType, Product } from "@/types";
import ProductPreview from "@/components/ProductPreview";

export async function generateStaticParams() {
  return contributorSlugs.map((slug) => {
    return { slug };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug } = params;
  if (!contributorSlugs.includes(slug)) {
    return {};
  }

  const contributor = getContributorBySlug(slug);
  return {
    title: `${contributor.name} - Fusion`,
  }
}

type RouteParams = {
  params: {
    slug: string;
  };
}

type ContributorProps = {
  contributor: ContributorType;
  biography: string;
  products: Product[],
}

function Contributor({ contributor, biography, products }: ContributorProps) {
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
    {biography && <div className="contributor-bio" dangerouslySetInnerHTML={{__html: biography}} />}
    <h2 className="contributor-books-title">Livres</h2>
    <div className="contributor-books-products">
      {products.map(product => <ProductPreview key={product.slug} product={product} />)}
    </div>
  </article>;
}

export default async function ContributorPage({ params }: RouteParams) {
  const { slug } = params;
  if (!contributorSlugs.includes(slug)) {
    return notFound();
  }

  const contributor = getContributorBySlug(slug);
  const biography = await markdownToHtml(contributor.biography);
  const products = getProductsForContributor(contributor);

  return <div className="contributor-page">
    <Contributor contributor={contributor} biography={biography} products={products} />
  </div>;
}
