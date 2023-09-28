'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { getSearchIndex } from '@/lib/user-files';
import ProductList from "@/components/ProductList";
import { Product } from "@/types";

const searchIndex = getSearchIndex();

export default function SearchResultsView(): React.ReactElement {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get('q') ?? '';
  const products = _getProductsMatchingQuery(searchQuery);

  if (products.length === 0) {
    return <div>Aucun résultat pour &laquo; {searchQuery} &raquo;</div>
  }

  const productsSortedByMostRecent = products
    .sort((product1, product2) => (product1.releaseDate > product2.releaseDate ? -1 : 1))

  return (
    <div className="SearchResultsView">
      <ProductList products={productsSortedByMostRecent} />
    </div>
  );
}

function _getProductsMatchingQuery(searchQuery: string|null): Product[] {
  if (searchQuery === null) {
    return searchIndex;
  }

  return searchIndex.filter((product) => {
    const query = searchQuery.toLowerCase();
    return product.title.toLowerCase().includes(query) || product.author.name.toLowerCase().includes(query);
  });
}
