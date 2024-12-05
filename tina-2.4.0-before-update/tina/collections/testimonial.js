import slugify from '@sindresorhus/slugify'
import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

const testimonial = {
  name: 'testimonial',
  label: 'Testimonials',
  path: 'content/testimonials',
  format: 'mdx',
  fields: [
    {
      name: 'draft',
      type: 'boolean',
      label: 'Entwurf',
      required: true,
      description: 'Wenn aktiviert wird das Testimonial nicht veröffentlicht',
    },
    {
      name: 'name',
      type: 'string',
      label: 'Name / Quelle',
      isTitle: true,
      required: true,
    },
    {
      name: 'company',
      type: 'string',
      label: 'Unternehmen',
    },
    {
      name: 'text',
      type: 'string',
      label: 'Text',
      isBody: true,
      ui: {
        component: 'textarea',
      },
    },
    {
      name: 'avatar',
      type: 'image',
      label: 'Bild / Avatar',
    },
    {
      name: 'logo',
      type: 'image',
      label: 'Logo',
    },
    {
      name: 'createdAt',
      type: 'string',
      label: 'Erstellt',
      ui: {
        component: wrapFieldsWithMeta(({ field, input, meta }) => {
          const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }
          const date = new Date(input.value)
          return (
            <div>
              <span>
                {date.toLocaleDateString('de-DE', options)}
                {' - '}
                {date.toLocaleTimeString('de-DE')}
              </span>
            </div>
          )
        }),
      },
    },
    {
      name: 'lastModified',
      type: 'string',
      label: 'Zuletzt Bearbeitet',
      ui: {
        component: wrapFieldsWithMeta(({ field, input, meta }) => {
          const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }
          const date = new Date(input.value)
          return (
            <div>
              <span>
                {date.toLocaleDateString('de-DE', options)}
                {' - '}
                {date.toLocaleTimeString('de-DE')}
              </span>
            </div>
          )
        }),
      },
    },
  ],
  ui: {
    defaultItem: {
      draft: false,
      name: 'Max Mustermann',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    },
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: false,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string}
        const slug = values?.name ? slugify(values.name) : ''
        return `${slug}`
      },
    },
    beforeSubmit: async ({ form, cms, values }) => {
      if (form.crudType === 'create') {
        return {
          ...values,
          createdAt: new Date().toISOString(),
          lastModified: new Date().toISOString(),
        }
      } else {
        return {
          ...values,
          lastModified: new Date().toISOString(),
        }
      }
    },
  },
}

export default testimonial
