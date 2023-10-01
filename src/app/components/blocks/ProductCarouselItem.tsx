import Link from 'next/link';
import Image from 'next/image';

import { ProductCarouselItemType } from '@/types';

export function ProductCarouselItem({item}: { item: ProductCarouselItemType }) {

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
