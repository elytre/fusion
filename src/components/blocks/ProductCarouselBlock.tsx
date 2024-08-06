import { ProductCarouselBlockType } from '@/types';
import { ProductCarouselItem } from '@/components/blocks/ProductCarouselItem';

export function ProductCarouselBlock({block}: { block: ProductCarouselBlockType }) {
  return <div className="ProductCarouselBlock">
    <div className="ProductCarouselBlock__section">
      {block.items.map(item => <ProductCarouselItem key={item.product.slug} item={item}/>)}
    </div>
  </div>;
}
