import {NewsPost as NewsPostType, Product} from '@/types';
import fs from 'fs';
import matter from 'gray-matter';
import {join} from "path";
import catalog from "../../_site/catalog.json";

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

export function getProductBySlug(slug: string): Product {
  const productFilePath = `${catalogDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(productFilePath, 'utf8');
  const { data } = matter(fileContents);
  return {
    ean: data.ean,
    title: data.title,
    slug: data.slug,
    author: data.author,
    contributors: data.contributors,
    pageCount: data.pageCount,
    originalLanguage: data.originalLanguage,
    price: data.price,
    extras: data.extras,
    reviews: data.reviews,
    releaseDate: new Date(data.releaseDate),
    coverImage: `/covers/${data.slug}.jpg`,
    backCoverText: data.backCoverText,
    buyLink: catalog.global.buyLink.replace(':ean', data.ean)
  };
}
