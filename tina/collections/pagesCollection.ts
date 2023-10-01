import { Collection } from 'tinacms';

import { TextBlock } from '../blocks/TextBlock';
import { BannerBlock } from '../blocks/BannerBlock';
import { ProductCarouselBlock } from '../blocks/ProductCarouselBlock';
import slugify from "slugify";

export const pagesCollection: Collection = {
  name: 'pages',
  label: 'Pages',
  path: '_site/pages',
  ui: {
    filename: {
      slugify: (values) => {
        return values.title ? slugify(values.title, {lower: true}) : "";
      },
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Titre',
      isTitle: true,
      required: true,
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      templates: [TextBlock, BannerBlock, ProductCarouselBlock],
    },
  ]
};
