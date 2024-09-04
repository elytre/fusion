import {Collection} from 'tinacms';
import slugify from 'slugify';

const roles = [
  {label: "Auteur·trice", value: "Author"},
  {label: "Traducteur·trice", value: "Translator"},
  {label: "Illustrateur·trice de couverture", value: "Cover artist"},
  {label: "Photographe", value: "Photographer"},
];

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
      ui: {
        itemProps: (item: Record<string, any>) => ({
          label: `${_getContributorNameFromFileName(item)} (${_getRoleLabelFromValue(item)})`
        }),
      },
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
          options: roles,
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
      ui: {
        itemProps: (item: Record<string, any>) => ({label: `${item.source} : ${item.text}`})
      },
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
      ui: {
        itemProps: (item: Record<string, any>) => ({label: `${item.title} (${item.type})`})
      },
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

function _getRoleLabelFromValue(item: Record<string, any>) {
  return roles.find((role) => role.value === item.role)?.label;
}

function _getContributorNameFromFileName(item: Record<string, any>) {
  const regex = /_site\/contributors\/(.*).md/gm;
  const matches = regex.exec(item.contributor);
  const contributorName = matches ? matches[1] : 'inconnu·e';
  return contributorName.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
