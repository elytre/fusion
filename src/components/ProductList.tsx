import React from 'react';

import { Product as ProductType } from '@/types';
import ProductPreview from "@/components/ProductPreview";

type ProductListProps = {
  readonly products: ProductType[];
};

export default function ProductList({
  products,
}: ProductListProps): React.ReactElement {
  return (
    <div className="ProductList">
      {products.map((product) => (
        <ProductPreview key={product.slug} product={product} />
      ))}
    </div>
  );
}
