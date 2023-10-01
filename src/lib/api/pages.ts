import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import { BlockData, CustomPage } from '@/types';
import { getProductBySlug } from '@/lib/api/products';

export function getHomePage(): HomePageType {
  const homeDirectory = join(process.cwd(), '_site/pages');
  const slug = 'home';
  const newsFilePath = `${homeDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(newsFilePath, 'utf8');
  const {data} = matter(fileContents);

  const blocks = data.blocks.map((block: BlockData) => {
    if (block._template === 'productCarouselBlock') {
      const items = _buildCarouselItems(block)

      return {...block, items};
    }

    return {
      ...block,
      key: JSON.stringify(block),
    };
  });

  return {blocks};
}

function _buildCarouselItems(block: BlockData) {
  return block.items.map((item) => {
    const productFilePath = item.product;
    const productSlugMatches = productFilePath.match(/_site\/catalog\/(.*)\.md/);
    const productSlug = productSlugMatches ? productSlugMatches[1] : '';
    const product = getProductBySlug(productSlug);

    return {...item, product};
  });
}
