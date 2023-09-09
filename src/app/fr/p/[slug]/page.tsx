import { getCatalog, getSiteConfig } from '@/lib/user-files';
import {Product as ProductType, SiteConfig} from "@/types";
import Head from "next/head";
import Product from "@/components/Product";
import {notFound} from "next/navigation";
import {ReactElement} from "react";
import markdownToHtml from "@/lib/markdown-to-html";

const site = getSiteConfig();
const catalog = getCatalog();

type RouteParams = {
  params: {
    slug: string;
  };
}

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  const slugs = catalog.products.map((product) => {
    return {slug: product.slug};
  });
  return slugs;
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  const product = catalog.products.find(
    ({ slug }: ProductType) => slug === requestSlug,
  );

  if (!product) {
    return {};
  }

  return {
    title: `${product.title} - Fusion`,
  }
}

export default async function ProductPage ({ params }: RouteParams) {
  const { slug: requestSlug } = params;
  const product = catalog.products.find(
    ({ slug }: ProductType) => slug === requestSlug,
  );

  if (!product) {
    return notFound();
  }

  const backCoverText = await _getBackCoverText(product);

  return (
    <div className="ProductView">
      <Head>
        <title>
          {product.title} - {site.title}
        </title>
        <meta property="og:title" content={product.title} />
        <meta name="twitter:title" content={product.title} />
        <meta property="og:type" content="book" />
        <meta name="twitter:card" content="summary" />
        {_getImageMetaTag(site.baseUrl, product.coverImage)}
        <meta property="book:author" content={product.author} />
        <meta property="book:isbn" content={product.ean.toString()} />
        {product.releaseDate && (
          <meta
            property="book:release_date"
            content={product.releaseDate.toISOString().slice(0, 10)}
          />
        )}
      </Head>
      <Product product={product} backCoverText={backCoverText} />
    </div>
  );
}

async function _getBackCoverText(product: ProductType) {
  if (product.backCoverText) {
    return await markdownToHtml(product.backCoverText);
  }

  return '';
}

function _getImageMetaTag(
  baseUrl: SiteConfig['baseUrl'],
  coverImage?: ProductType['coverImage'],
): ReactElement[] | null {
  if (typeof coverImage === 'undefined') {
    return null;
  }

  return [
    <meta property="og:image" content={`${baseUrl}/${coverImage}`} key={1} />,
    <meta name="twitter:image" content={`${baseUrl}/${coverImage}`} key={2} />,
  ];
}
