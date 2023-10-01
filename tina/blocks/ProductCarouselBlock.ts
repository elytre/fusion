import { Template } from "tinacms";

export const ProductCarouselBlock: Template = {
  name: 'productCarouselBlock',
  label: 'Carousel de livres',
  fields: [
    {
      type: 'object',
      label: 'Éléments du carousel',
      name: 'items',
      list: true,
      fields: [
        {
          type: 'string',
          label: 'Titre',
          name: 'title',
        },
        {
          type: 'string',
          label: 'Sous-titre',
          name: 'subtitle',
        },
        {
          type: 'reference',
          label: 'Livre',
          name: 'product',
          collections: ['products'],
          required: true,
        }
      ]
    }
  ]
}
