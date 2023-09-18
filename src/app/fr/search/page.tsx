'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { getCatalog } from '@/lib/user-files';
import ProductList from "@/components/ProductList";

const catalog = getCatalog();

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

function _getProductsMatchingQuery(searchQuery: string|null) {
  if (searchQuery === null) {
    return catalog.products;
  }

  return catalog.products.filter((product) => {
    const query = searchQuery.toLowerCase();
    return product.title.toLowerCase().includes(query) || product.author.toLowerCase().includes(query);
  });
}
