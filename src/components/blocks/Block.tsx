import { BannerBlockType, ProductCarouselBlockType, TextBlockType } from '@/types';
import { BannerBlock } from '@/components/blocks/BannerBlock';
import { TextBlock } from '@/components/blocks/TextBlock';
import { ProductCarouselBlock } from '@/components/blocks/ProductCarouselBlock';

export async function Block({block}: { block: BannerBlockType | TextBlockType | ProductCarouselBlockType }) {
  if (block._template === 'bannerBlock') {
    return <BannerBlock block={block}/>;
  }

  if (block._template === 'textBlock') {
    return <TextBlock block={block}/>;
  }

  if (block._template === 'productCarouselBlock') {
    return <ProductCarouselBlock block={block}/>
  }
}
