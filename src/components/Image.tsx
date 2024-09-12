import React from "react";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  role?: string;
  className?: string;
};

export default function ElytreImage({src, alt, width, height, role, className}: ImageProps): React.ReactElement {

  const baseUrl = process.env.DEPLOY_URL ?? "https://fusionlatalante.fr";
  const fullImageUrl = `${baseUrl}${src}`;
  const weServImageUrl = `https://images.weserv.nl?url=${fullImageUrl}&w=${width}&h=${height}&output=webp`;

  return (
    <Image
      src={weServImageUrl}
      alt={alt}
      width={width}
      height={height}
      role={role}
      className={className}
    />
  );
}
