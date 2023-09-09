import { Catalog, Product, SiteConfig } from '@/types';
import catalog from '../../_site/catalog.json';
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
  return {
    ...catalog,
    // @ts-ignore
    products: catalog.products.map((product: Product) => ({
      ...product,
      // Convert release date string as a Date object
      releaseDate: product.releaseDate
        ? new Date(product.releaseDate)
        : undefined,
      coverImage: `/covers/${product.slug}.jpg`,
      buyLink: catalog.global.buyLink.replace(':ean', product.ean)
    }))
  };
}

export function getSearchIndex(): null {
  return null;
}
