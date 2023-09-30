/**
 * Product API
 */
import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { Contribution, Contributor, Product, ProductContribution } from '@/types';
import { getSiteConfig } from '@/lib/user-files';
import { getContributorBySlug } from '@/lib/api/contributors';

const catalogDirectory = join(process.cwd(), '_site/catalog');

export const productSlugs = function () {
  const productFilenames = fs.readdirSync(catalogDirectory);
  return productFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}();

export const products = productSlugs
  .map(getProductBySlug)
  .sort((product1, product2) => (product1.releaseDate > product2.releaseDate ? -1 : 1));

export function getProductBySlug(slug: string): Product {
  const productFilePath = `${catalogDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(productFilePath, 'utf8');
  const {data, content} = matter(fileContents);

  const contributions = _buildContributions(data.contributions);
  const authorContribution = contributions.find(contribution => contribution.role === "Author");
  const anonymousContributor: Contributor = {name: 'Anonyme', slug: 'anonyme'};

  return {
    ean: data.ean,
    title: data.title,
    slug,
    author: authorContribution?.contributor || anonymousContributor,
    contributions,
    pageCount: data.pageCount,
    originalLanguage: data.originalLanguage,
    price: data.price,
    extras: data.extras,
    reviews: data.reviews,
    releaseDate: new Date(data.releaseDate),
    coverImage: data.coverImage,
    buyLink: getSiteConfig().buyLink.replace(':ean', data.ean),
    backCoverText: content,
  };
}

function _buildContributions(contributions: ProductContribution[] | undefined): Contribution[] {
  if (!contributions) {
    return [];
  }

  return contributions.map((contribution: ProductContribution) => {
    const contributorFilePath = contribution.contributor;
    const contributorSlugMatches = contributorFilePath.match(/_site\/contributors\/(.*)\.md/);
    const contributorSlug = contributorSlugMatches ? contributorSlugMatches[1] : "";
    return {
      contributor: getContributorBySlug(contributorSlug),
      role: contribution.role,
    };
  });
}

export function getProductsForContributor(contributor: Contributor): Product[] {
  return products.filter(product => {
    const contributorsName = product.contributions?.map(contribution => {
      return contribution.contributor.name;
    });
    return contributorsName?.includes(contributor.name);
  });
}
