import { defineConfig } from 'tinacms';

import { productsCollection } from './collections/productsCollection';
import { contributorsCollection } from './collections/contributorsCollection';
import { newsCollection } from './collections/newsCollection';
import { pagesCollection } from './collections/pagesCollection';

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
      productsCollection,
      contributorsCollection,
      newsCollection,
      pagesCollection,
    ],
  },
});
