import Head from 'next/head';
import { notFound } from 'next/navigation';
import { ReactElement } from 'react';

import { getSiteConfig } from '@/lib/user-files';
import { Product as ProductType, SiteConfig } from '@/types';
import Product from '@/components/Product';
import markdownToHtml from '@/lib/markdown-to-html';

import { productSlugs, getProductBySlug } from "@/lib/api/products";

const site = getSiteConfig();

type RouteParams = {
  params: {
    slug: string;
  };
}

// noinspection JSUnusedGlobalSymbols
export async function generateStaticParams() {
  return productSlugs.map((slug) => {
    return { slug: slug };
  });
}

// noinspection JSUnusedGlobalSymbols
export async function generateMetadata({ params }: RouteParams) {
  const { slug } = params;
  if (!productSlugs.includes(slug)) {
    return {};
  }

  const product = getProductBySlug(slug);
  return {
    title: `${product.title} - Fusion`,
    alternates: {
      canonical: `https://fusionlatalante.fr/fr/p/${slug}`,
    },
  }
}

export default async function ProductPage ({ params }: RouteParams) {
  const { slug } = params;
  if (!productSlugs.includes(slug)) {
    return notFound();
  }

  const product = getProductBySlug(slug);
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
        <meta property="book:author" content={product.author.name} />
        {product.ean && <meta property="book:isbn" content={product.ean} />}
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
