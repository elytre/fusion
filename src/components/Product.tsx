import React from 'react';
import Trans from './Trans';
import Image from "./Image";
import Link from 'next/link';

import Price from "@/components/Price";
import ProductReview from "@/components/ProductReview";
import ProductExtra from "@/components/ProductExtra";

import {
  Contribution,
  Extra as ExtraType,
  Product as ProductType,
  Review as ReviewType,
} from '@/types';

export type ProductProps = {
  readonly product: ProductType;
  readonly backCoverText: string;
  readonly withLink?: boolean;
};

export default function Product({
                                  product,
                                  backCoverText,
                                  withLink = false,
                                }: ProductProps): React.ReactElement {
  const locale = "fr";

  return (
    <div className="Product">
      {product.coverImage ? (
        <div className="Product-cover">
          <Image
            src={product.coverImage}
            alt={product.title}
            width={300}
            height={424}
            className="Product-cover-image"
          />
        </div>
      ) : null}

      <div className="Product-infos">
        <h1 className="Product-title">
          {withLink ? (
            <Link href={`/${locale}/p/${product.slug}`}>{product.title}</Link>
          ) : (
            product.title
          )}
        </h1>

        <p className="Product-author">
          <span className="Product-author-by">
            <Trans>by</Trans>
          </span>{' '}
          <Link href={`/c/${product.author.slug}`} className="Product-author-name">
            {product.author.name}
          </Link>
        </p>

        {product.buyLink && _buildBuyLink(product.buyLink)}
      </div>

      {backCoverText ? _buildBackCoverText(backCoverText) : null}
      {product.extras ? _buildExtras(product.extras) : null}
      {product.reviews ? _buildReviews(product.reviews) : null}

      <div className="Product-details">
        {product.contributions ? _buildContributions(product.contributions) : null}

        {product.releaseDate ? (
          <p className="Product-detail detail-page-count">
            <span className="detail-label">
              <Trans>Release date</Trans>
            </span>{' '}
            <span className="detail-value">
              {product.releaseDate.toLocaleDateString('fr-FR')}
            </span>
          </p>
        ) : null}

        {product.pageCount ? (
          <p className="Product-detail detail-page-count">
            <span className="detail-label">
              <Trans>Page count</Trans>
            </span>{' '}
            <span className="detail-value">{product.pageCount}</span>
          </p>
        ) : null}

        {product.price ? (
          <p className="Product-detail detail-price">
            <span className="detail-label">
              <Trans>Price</Trans>
            </span>{' '}
            <span className="detail-value">
              <Price>{product.price}</Price>
            </span>
          </p>
        ) : null}

        {product.originalLanguage ? (
          <p className="Product-detail detail-original-language">
            <span className="detail-label">
              <Trans>Original language</Trans>
            </span>{' '}
            <span className="detail-value">
              <Trans>{product.originalLanguage}</Trans>
            </span>
          </p>
        ) : null}

        <p className="Product-detail detail-isbn">
          <span className="detail-label">ISBN</span>{' '}
          <span className="detail-value">{product.ean}</span>
        </p>
      </div>
    </div>
  );
}

function _buildBuyLink(buyLink: string) {
  return <a
    className='Product-buy-link-button'
    href={buyLink}
    target='_blank'
    rel='noopener noreferrer'
  >
    <Trans>Buy</Trans>
  </a>;
}

function _buildBackCoverText(backCoverText: string) {
  return <div className='Product-back-cover-text' dangerouslySetInnerHTML={{ __html: backCoverText }} />;
}

function _buildReviews(reviews: ReviewType[]) {
  if (reviews.length === 0) {
    return null;
  }

  return <div className='Product-reviews'>
    <h1 className="Product-reviews-title">
      <Trans>Reviews</Trans>
    </h1>
    {reviews.map(({ text, author, source, sourceUrl }) => (
      <ProductReview
        key={text}
        text={text}
        author={author}
        source={source}
        sourceUrl={sourceUrl}
      />
    ))}
  </div>;
}

function _buildExtras(extras: ExtraType[]) {
  if (extras.length === 0) {
    return null;
  }

  return <div className='Product-extras'>
    {extras.map(({ type, title, href }) => (
      <ProductExtra
        key={href}
        type={type}
        title={title}
        href={href}
      />
    ))}
  </div>;
}

function _buildContributions(contributions: Contribution[]) {
  return contributions.map(({ contributor, role }) => {
    if (role === "Author") {
      return null;
    }

    return (
      <p
        className={`Product-detail detail-contributor`}
        key={contributor.name}
      >
                  <span className="detail-label">
                    <Trans>{role}</Trans>
                  </span>{' '}
        <Link href={`/c/${contributor.slug}`} className="detail-value">{contributor.name}</Link>
      </p>
    );
  });
}
