import { Catalog, Product, SiteConfig } from '@/types';

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import catalog from '../catalog.json';

// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import site from '../../_site/site.json';
// import searchIndex from '../search-index.json';

/**
 * This imports the user's JSON config files (converted from YAML)
 * These files are added at build and thus not present in the source code
 */
export function getSiteConfig(): SiteConfig {
  return site;
}

export function getCatalog(): Catalog {
  const catalog = { products: [] };
  return {
    ...catalog,
    // @ts-ignore
    products: catalog.products.map((product: Product) => ({
      ...product,
      // Convert release date string as a Date object
      releaseDate: product.releaseDate
        ? new Date(product.releaseDate)
        : undefined,
    }))
  };
}

export function getSearchIndex(): null {
  return null;
}
