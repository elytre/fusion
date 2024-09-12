import React from 'react';
import Trans from './Trans';
import Image from "./Image";
import Link from 'next/link';

import {
  Product as ProductType,
} from '@/types';

export type ProductProps = {
  readonly product: ProductType;
};

export default function ProductPreview({
                                  product,
                                }: ProductProps): React.ReactElement {
  return (
    <div className="ProductPreview">
      {product.coverImage ? (
        <div className="ProductPreview-cover">
          <Link href={`/fr/p/${product.slug}`}>
            <Image
              src={product.coverImage}
              alt={product.title}
              width={400}
              height={566}
              className="ProductPreview-cover-image"
            />
          </Link>
        </div>
      ) : null}

      <div className="ProductPreview-infos">
        <h1 className="ProductPreview-title">
          <Link href={`/fr/p/${product.slug}`}>{product.title}</Link>
        </h1>

        <p className="ProductPreview-author">
          <span className="ProductPreview-author-by">
            <Trans>by</Trans>
          </span>{' '}
          <span className="ProductPreview-author-name">{product.author.name}</span>
        </p>
      </div>
    </div>
  );
}
