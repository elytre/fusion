import { Template } from 'tinacms';

export const TextBlock: Template = {
  name: 'textBlock',
  label: 'Bloc de texte',
  fields: [
    {
      type: 'string',
      label: 'Titre',
      name: 'title',
    },
    {
      type: 'rich-text',
      label: 'Texte',
      name: 'text',
    },
  ],
}
