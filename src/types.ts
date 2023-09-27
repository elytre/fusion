/* Site config */

type MenuEntry = {
  label: string;
  href: string;
};

export type SiteConfig = {
  title: string;
  baseUrl: string;
  buyLink: string;
  menus?: {
    header?: MenuEntry[];
    nav?: MenuEntry[];
    footer?: MenuEntry[];
  };
};

/* Catalog */

export type Review = {
  text: string;
  author?: string;
  source?: string;
  sourceUrl?: string;
}

export type Contributor = {
  name: string;
  biography: string;
};

export type Contribution = {
  contributor: Contributor;
  role: 'Author' | 'Translator' | 'Cover artist' | 'Photographer';
};

export type Extra = {
  type: 'youtube',
  title: string;
  href: string;
}

export type Product = {
  title: string;
  slug: string;
  author: string;
  releaseDate: Date;
  ean?: string;
  contributions?: Contribution[];
  coverImage?: string;
  pageCount?: number;
  originalLanguage?: 'en' | 'fr' | 'de';
  backCoverText?: string;
  price?: number;
  buyLink?: string;
  extras?: Extra[];
  reviews?: Review[];
};

export type Catalog = {
  global?: {
    buyLink?: string;
  };
  products: Product[];
};

export type SearchIndex = Product[];

export type NewsPost = {
  slug: string;
  title: string;
  date: Date;
  image: string;
  content: string;
  html: boolean;
}

