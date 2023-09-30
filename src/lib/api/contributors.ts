import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

import { Contribution, Contributor } from '@/types';
import { products } from '@/lib/api/products';


export const contributorSlugs = function () {
  const contributorsDirectory = join(process.cwd(), '_site/contributors');
  const contributorFilenames = fs.readdirSync(contributorsDirectory);
  return contributorFilenames.map((filename: string) => {
    return filename.replace('.md', '');
  });
}();

export function getContributorBySlug(slug: string): Contributor {
  const contributorsDirectory = join(process.cwd(), '_site/contributors');
  const contributorFilePath = `${contributorsDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(contributorFilePath, 'utf8');
  const {data, content} = matter(fileContents);
  return {
    name: data.name,
    slug,
    photo: data.photo,
    biography: content
  };
}

export function getContributorsForRole(targetRole: Contribution['role']): Contributor[] {
  const uniqueSlugs: string[] = [];
  const contributionsWithRole = products.reduce((accumulator: Contribution[], product) => {
    const productContributionsWithRole = product.contributions?.filter(contribution => {
      return contribution.role === targetRole;
    }) || [];
    return [...accumulator, ...productContributionsWithRole];
  }, []);

  return contributionsWithRole
    .map(({contributor}) => contributor)
    .filter(contributor => {
      const isDuplicate = uniqueSlugs.includes(contributor.slug);
      uniqueSlugs.push(contributor.slug);
      return !isDuplicate;
    });
}
