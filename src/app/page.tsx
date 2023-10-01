// noinspection HtmlUnknownTarget

import fs from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import matter from 'gray-matter';
import { join } from 'path';

import markdownToHtml from '@/lib/markdown-to-html';
import { Product } from "@/types";
import {getProductBySlug} from "@/lib/api/products";

async function Block({ block }: { block: BannerBlockType|TextBlockType|ProductCarouselBlockType}) {
  if (block._template === 'bannerBlock') {
    return <BannerBlock block={block} />;
  }

  if (block._template === 'textBlock') {
    return <TextBlock block={block} />;
  }

  if (block._template === 'productCarouselBlock') {
    return <ProductCarouselBlock block={block} />
  }
}

async function TextBlock({ block }: { block: TextBlockType}) {
  const htmlContent = await markdownToHtml(block.text);

  return <div className="TextBlock">
    <h1 className="TextBlock__title">{block.title}</h1>
    <div className="TextBlock__content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
  </div>
}

async function BannerBlock({ block }: { block: BannerBlockType}) {
  return <div className="BannerBlock">
    <Link href={block.link}>
      <Image
        src={block.image}
        width="1600"
        height="529"
        alt={block.altText}
        className="BannerBlock__image"
      />
    </Link>
  </div>;
}

function ProductCarouselItem({ item }: { item: ProductCarouselItemType}) {

  return <article className="ProductCarouselItem">
    <h1 className="ProductCarouselItem__title">{item.title}</h1>
    <p className="ProductCarouselItem__subtitle">
      {item.subtitle}
    </p>
    <Link href={`/fr/p/${item.product.slug}`}>
      {item.product.coverImage &&
        <Image
          src={item.product.coverImage}
          alt={`Couverture du livre ${item.product.title}`}
          width={1024}
          height={1448}
          className="ProductCarouselItem-cover"
        />
      }
    </Link>
    <h1 className="ProductCarouselItem__product-title">
      <Link href={`/fr/p/${item.product.slug}`}>{item.product.title}</Link>
    </h1>
    <p className="ProductCarouselItem__product-author">{item.product.author.name}</p>
  </article>;
}

function ProductCarouselBlock({ block }: { block: ProductCarouselBlockType }) {
  return <div className="ProductCarouselBlock">
    <div className="ProductCarouselBlock__section">
      {block.items.map(item => <ProductCarouselItem key={item.product.slug} item={item}/>)}
    </div>
  </div>;
}


export default async function HomePage () {
  const homePage = _getHomePage();

  return <div className="HomeView home-page">
    {homePage.blocks.map(block => <Block key={block.key} block={block} />)}

    <div className="newsletter">
      <iframe
        className="newsletter-iframe"
        src="https://app.mailjet.com/widget/iframe/2pqw/H8G" width="100%">
      </iframe>
    </div>
  </div>
}

type BannerBlockType = {
  key: string;
  image: string;
  altText: string;
  link: string;
  _template: 'bannerBlock';
}

type TextBlockType = {
  key: string;
  title: string;
  text: string;
  _template: 'textBlock';
}

type ProductCarouselItemType = {
  key: string;
  title: string;
  subtitle: string;
  product: Product;
}

type ProductCarouselBlockType = {
  items: ProductCarouselItemType[];
  _template: 'productCarouselBlock'
}

type HomePageType = {
  blocks: (BannerBlockType|TextBlockType)[];
}

type BlockData = {
  _template: 'textBlock'|'bannerBlock'|'productCarouselBlock';
  items: [{ product: string; }];
}

function _getHomePage(): HomePageType {
  const homeDirectory = join(process.cwd(), '_site/pages');
  const slug = 'home';
  const newsFilePath = `${homeDirectory}/${slug}.md`;
  const fileContents = fs.readFileSync(newsFilePath, 'utf8');
  const { data } = matter(fileContents);

  const blocks = data.blocks.map((block: BlockData) => {
    if (block._template === 'productCarouselBlock') {
      const items = block.items.map((item) => {
        const productFilePath = item.product;
        const productSlugMatches = productFilePath.match(/_site\/catalog\/(.*)\.md/);
        const productSlug = productSlugMatches ? productSlugMatches[1] : '';
        const product = getProductBySlug(productSlug);

        return {...item, product };
      })

      return { ...block, items };
    }

    return {
      ...block,
      key: JSON.stringify(block),
    };
  });

  return { blocks };
}
