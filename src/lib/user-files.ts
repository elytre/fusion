import {SearchIndex, SiteConfig} from '@/types';
import searchIndex from '../../_site/search-index.json';
import site from '../../_site/site.json';

/**
 * This imports the user's JSON config files (converted from YAML)
 * These files are added at build and thus not present in the source code
 */
export function getSiteConfig(): SiteConfig {
  return site;
}

export function getSearchIndex(): SearchIndex {
  return searchIndex.map(entry => ({
    ...entry,
    releaseDate: new Date(entry.releaseDate),
  }));
}
