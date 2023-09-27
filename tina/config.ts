import { defineConfig } from "tinacms";
import slugify from "slugify";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_CONTENT_READONLY_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "news",
        label: "Actualités",
        path: "_site/news",
        ui: {
          filename: {
            slugify: (values) => {
              return values.title ? slugify(values.title, { lower: true }) : "";
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
      },
      {
        name: "products",
        label: "Livres",
        path: "_site/catalog",
        ui: {
          filename: {
            slugify: (values) => {
              return values.title ? slugify(values.title, { lower: true }) : "";
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
                options: [{ label: "Youtube", value: "youtube" }],
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
      },
      {
        name: "contributors",
        label: "Contributeur·trice·s",
        path: "_site/contributors",
        ui: {
          filename: {
            slugify: (values) => {
              return values.name ? slugify(values.name, { lower: true }) : "";
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
            type: "rich-text",
            name: "body",
            label: "Notice biographique",
            isBody: true,
          },
        ]
      }
    ],
  },
});
