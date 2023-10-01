import { Collection } from 'tinacms';
import slugify from 'slugify';

export const productsCollection: Collection = {
  name: "products",
  label: "Livres",
  path: "_site/catalog",
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
      name: "ean",
      label: "ISBN",
    },
    {
      type: "string",
      name: "title",
      label: "Titre",
      isTitle: true,
      required: true,
    },
    {
      type: "datetime",
      name: "releaseDate",
      label: "Date de publication",
      required: true,
    },
    {
      type: "number",
      name: "price",
      label: "Prix",
    },
    {
      type: "number",
      name: "pageCount",
      label: "Nombre de pages",
    },
    {
      type: "string",
      name: "originalLanguage",
      label: "Langue d'origine",
      options: [
        {label: "Allemand", value: "de"},
        {label: "Anglais", value: "en"},
        {label: "Français", value: "fr"},
      ]
    },
    {
      label: "Contributions",
      name: "contributions",
      type: "object",
      list: true,
      fields: [
        {
          label: "Contributeur·trice",
          name: "contributor",
          type: "reference",
          collections: ["contributors"],
        },
        {
          label: "Role",
          name: "role",
          type: "string",
          options: [
            {label: "Auteur·trice", value: "Author"},
            {label: "Traducteur·trice", value: "Translator"},
            {label: "Illustrateur·trice de couverture", value: "Cover artist"},
            {label: "Photographe", value: "Photographer"},
          ]
        },
      ]
    },
    {
      type: 'image',
      label: 'Image de couverture',
      description: 'Dimensions: 1024px * 1448px',
      name: 'coverImage',
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Quatrième de couverture",
      isBody: true,
    },
    {
      label: "Avis",
      name: "reviews",
      type: "object",
      list: true,
      fields: [
        {
          label: "Citation",
          name: "text",
          type: "string"
        },
        {
          label: "Auteur·trice",
          name: "author",
          type: "string"
        },
        {
          label: "Source",
          name: "source",
          type: "string",
        },
      ]
    },
    {
      label: "Extras",
      name: "extras",
      type: "object",
      list: true,
      fields: [
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [{label: "Youtube", value: "youtube"}],
        },
        {
          label: "Titre",
          name: "title",
          type: "string"
        },
        {
          label: "Lien",
          name: "href",
          type: "string",
        },
      ]
    },
  ],
};
