import { Collection } from 'tinacms';
import slugify from 'slugify';

export const contributorsCollection: Collection = {
  name: "contributors",
  label: "Contributeur·trice·s",
  path: "_site/contributors",
  ui: {
    filename: {
      slugify: (values) => {
        return values.name ? slugify(values.name, {lower: true}) : "";
      },
    },
  },
  fields: [
    {
      type: "string",
      name: "name",
      label: "Nom complet",
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      label: 'Photo',
      description: 'Dimensions: 356px * 356px',
      name: 'photo',
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Notice biographique",
      isBody: true,
    },
  ]
};
