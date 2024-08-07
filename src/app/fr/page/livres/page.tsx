import { Metadata } from 'next';
import Link from 'next/link';

import ProductList from '@/components/ProductList';

import {products} from "@/lib/api/products";

export const metadata: Metadata = {
  title: 'Livres - Fusion',
  description: 'Tous les livres de la collection Fusion, par les éditions L\'Atalante',
  alternates: {
    canonical: 'https://fusionlatalante.fr/fr/page/livres',
  },
}

export default function Page() {
  return <div className="books">
    <nav className="breadcrumbs">
      <Link href="/">Accueil</Link> {'>'} <span className="current">Livres</span>
    </nav>

    <ProductList products={products} />
  </div>;
}
