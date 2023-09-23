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

        {product.buyLink && _buildBuyLink(product.buyLink)}
      </div>

      <div className="ProductPreview-details">
        {product.contributors
          ? product.contributors.map((contributor) => {
            const roleSlug = contributor.role.toLowerCase();
            return (
              <p
                className={`ProductPreview-detail detail-contributor role-${roleSlug}`}
                key={contributor.name}
              >
                  <span className="detail-label">
                    <Trans>{contributor.role}</Trans>
                  </span>{' '}
                <span className="detail-value">{contributor.name}</span>
              </p>
            );
          })
          : null}

        {product.releaseDate ? (
          <p className="ProductPreview-detail detail-page-count">
            <span className="detail-label">
              <Trans>Release date</Trans>
            </span>{' '}
            <span className="detail-value">
              {product.releaseDate.toLocaleDateString()}
            </span>
          </p>
        ) : null}

        {product.pageCount ? (
          <p className="ProductPreview-detail detail-page-count">
            <span className="detail-label">
              <Trans>Page count</Trans>
            </span>{' '}
            <span className="detail-value">{product.pageCount}</span>
          </p>
        ) : null}

        {product.price ? (
          <p className="ProductPreview-detail detail-price">
            <span className="detail-label">
              <Trans>Price</Trans>
            </span>{' '}
            <span className="detail-value">
              <Price>{product.price}</Price>
            </span>
          </p>
        ) : null}

        {product.originalLanguage ? (
          <p className="ProductPreview-detail detail-original-language">
            <span className="detail-label">
              <Trans>Original language</Trans>
            </span>{' '}
            <span className="detail-value">
              <Trans>{product.originalLanguage}</Trans>
            </span>
          </p>
        ) : null}

        <p className="ProductPreview-detail detail-isbn">
          <span className="detail-label">ISBN</span>{' '}
          <span className="detail-value">{product.ean}</span>
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
