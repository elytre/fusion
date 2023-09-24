import React from 'react';
import Trans from './Trans';
import Image from "next/image";
import Link from 'next/link';

import Price from "@/components/Price";

import {
  Product as ProductType,
} from '@/types';

export type ProductProps = {
  readonly product: ProductType;
};

export default function ProductPreview({
                                  product,
                                }: ProductProps): React.ReactElement {
  const locale = "fr";

  return (
    <div className="ProductPreview">
      {product.coverImage ? (
        <div className="ProductPreview-cover">
          <Image
            src={product.coverImage}
            alt={product.title}
            width={1024}
            height={1448}
            className="ProductPreview-cover-image"
          />
        </div>
      ) : null}

      <div className="ProductPreview-infos">
        <h1 className="ProductPreview-title">
          <Link href={`/${locale}/p/${product.slug}`}>{product.title}</Link>
        </h1>

        <p className="ProductPreview-author">
          <span className="ProductPreview-author-by">
            <Trans>by</Trans>
          </span>{' '}
          <span className="ProductPreview-author-name">{product.author}</span>
        </p>
      </div>
    </div>
  );
}

function _buildBuyLink(buyLink: string) {
  return <a
    className='ProductPreview-buy-link-button'
    href={buyLink}
    target='_blank'
    rel='noopener noreferrer'
  >
    <Trans>Buy</Trans>
  </a>;
}
