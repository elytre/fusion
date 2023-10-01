import { Collection } from 'tinacms';
import slugify from 'slugify';

export const newsCollection: Collection = {
  name: "news",
  label: "Actualités",
  path: "_site/news",
  ui: {
    filename: {
      slugify: (values) => {
        return values.title ? slugify(values.title, {lower: true}) : "";
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titre",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: 'image',
      label: 'Image',
      description: 'Dimensions: 524px * 258px',
      name: 'image',
      required: true,
    },
    {
      type: 'string',
      label: 'Texte alternatif',
      description: 'Affiché aux utilisateurs malvoyants à la place de l\'image',
      name: 'imageAlt',
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Corps",
      isBody: true,
    },
  ],
};
