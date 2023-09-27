import Image from 'next/image';
import Link from 'next/link';

import { Contributor as ContributorType } from "@/types";

type ContributorProps = {
  contributor: ContributorType;
}

export function ContributorPreview({ contributor }: ContributorProps) {
  return <article className="ContributorPreview">
    {contributor.photo &&
      <div className="ContributorPreview-portrait">
        <Link href={`/c/${contributor.slug}`}>
          <Image
            src={contributor.photo}
            alt={`Portrait de ${contributor.name}`}
            width="356"
            height="356"
            className="ContributorPreview-portrait-image"
          />
        </Link>
      </div>
    }
    <h1 className="ContributorPreview-name">
      <Link href={`/c/${contributor.slug}`}>{contributor.name}</Link>
    </h1>
  </article>;
}
