import Link from 'next/link';
import Image from 'next/image';

import { BannerBlockType } from '@/types';

export async function BannerBlock({block}: { block: BannerBlockType }) {
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
