import { Collection } from 'tinacms';

import { TextBlock } from '../blocks/TextBlock';
import { BannerBlock } from '../blocks/BannerBlock';
import { ProductCarouselBlock } from '../blocks/ProductCarouselBlock';

export const pagesCollection: Collection = {
  name: "pages",
  label: "Pages",
  path: "_site/pages",
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      templates: [TextBlock, BannerBlock, ProductCarouselBlock],
    },
  ]
};
