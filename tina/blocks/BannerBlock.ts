import { Template } from 'tinacms';

export const BannerBlock: Template = {
  name: 'bannerBlock',
  label: 'Bannière',
  fields: [
    {
      type: 'image',
      label: 'Image',
      name: 'image',
    },
    {
      type: 'string',
      label: 'Lien',
      name: 'link',
    },
    {
      type: 'string',
      label: 'Texte alternatif',
      name: 'altText',
    }
  ]
}
