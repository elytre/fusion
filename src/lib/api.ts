import fs from 'fs';
import matter from 'gray-matter';
import { join } from "path";

import { getSiteConfig } from "@/lib/user-files";
import {Contribution, Contributor, NewsPost as NewsPostType, Product} from '@/types';

const contributorsDirectory = join(process.cwd(), '_site/contributors');

/**
 * News API
 */

const newsDirectory = join(process.cwd(), '_site/news');

export function getAllNewsPostSlugs() {
  const newsPostsFilenames = fs.readdirSync(newsDirectory);
  return newsPostsFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}

export function getNewsPostBySlug(slug: string): NewsPostType {
  const newsFilePath = `${newsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(newsFilePath, 'utf8');
  const {data, content} = matter(fileContents);
  return {
    slug,
    title: data.title,
    date: data.date,
    image: data.image,
    html: Boolean(data.html),
    content,
  };
}

/**
 * Product API
 */

const catalogDirectory = join(process.cwd(), '_site/catalog');
const productFilenames = fs.readdirSync(catalogDirectory);

export function getAllProductSlugs() {
  return productFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}

function _getAllProducts() {
  return getAllProductSlugs().map(getProductBySlug)
    .sort((product1, product2) => (product1.releaseDate > product2.releaseDate ? -1 : 1));
}
export const products = _getAllProducts();

type ProductContribution = {
  contributor: string;
  role: Contribution['role'];
}

export function getProductBySlug(slug: string): Product {
  const productFilePath = `${catalogDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(productFilePath, 'utf8');
  const { data, content } = matter(fileContents);

  const contributions = _buildContributions(data.contributions);
  const author = contributions.find(contribution => contribution.role === "Author");

  return {
    ean: data.ean,
    title: data.title,
    slug,
    author: author?.contributor.name || "Anonyme",
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

function _buildContributions(contributions: ProductContribution[]|undefined): Contribution[] {
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

/**
 * Contributor API
 */

export const contributorSlugs = function () {
  const contributorFilenames = fs.readdirSync(contributorsDirectory);
  return contributorFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}();

export function getContributorBySlug(slug: string): Contributor {
  const contributorFilePath = `${contributorsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(contributorFilePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    name: data.name,
    photo: data.photo,
    biography: content
  };
}
