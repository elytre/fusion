import { defineConfig } from "tinacms";

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
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/news/${document._sys.filename}`,
        },
      },
],
  },
});
