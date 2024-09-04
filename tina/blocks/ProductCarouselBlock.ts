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
      ui: {
        itemProps: (item: Record<string, any>) => ({
          label: `${item.subtitle} : ${_getProductTitleFromFileName(item)}`,
        }),
      },
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

function _getProductTitleFromFileName(item: Record<string, any>) {
  const regex = /_site\/catalog\/(.*)$/gm;
  const matches = regex.exec(item.product);
  return matches ? matches[1] : 'inconnu';
}
