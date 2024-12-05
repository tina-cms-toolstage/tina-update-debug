import { linkFieldset } from '../partials/fieldsets/link-fieldset'

const Navigation = {
  name: 'navigation',
  label: 'Navigation',
  path: 'content/navigation',
  format: 'json',
  ui: {
    global: true,
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.title,
      }
    },
    defaultItem: (item) => {
      return {
        title: 'Menü',
      }
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: false,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string}
        return `${values?.title?.toLowerCase().replace(/ /g, '-')}`
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      label: 'Menü Titel',
      isTitle: true,
      required: true,
    },
    {
      name: 'menu',
      type: 'object',
      label: 'Menüpunkte',
      list: true,
      ui: {
        description: 'Links oder Sprungmarken',
        itemProps: (item) => {
          return { label: item?.linkText }
        },
        defaultItem: {
          linkHref: '/',
          linkText: 'Neuer Menüpunkt',
          linkType: 'standard',
          linkTarget: '_self',
        },
      },
      fields: [
        ...linkFieldset,
        {
          name: 'submenu',
          type: 'object',
          label: 'Sub Menüpunkte',
          list: true,
          ui: {
            description: 'Links oder Sprungmarken',
            itemProps: (item) => {
              return { label: item?.linkText }
            },
            defaultItem: {
              linkHref: '/',
              linkText: 'Neuer Menüpunkt',
              linkType: 'standard',
              linkTarget: '_self',
            },
          },
          fields: [...linkFieldset],
        },
      ],
    },
  ],
}
export default Navigation
