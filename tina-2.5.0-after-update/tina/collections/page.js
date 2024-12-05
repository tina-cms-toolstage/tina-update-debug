import slugify from '@sindresorhus/slugify'
import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

import seoOptions from '../partials/objects/seo-options'
import socialSharingOptions from '../partials/objects/social-sharing-options'
import fullWidthSectionSchema from '../templates/site-sections/full-width-section'

const pageContent = {
  name: 'page',
  label: 'Seiten',
  path: 'content/pages',
  format: 'mdx',
  fields: [
    {
      name: 'draft',
      type: 'boolean',
      label: 'Entwurf',
      required: true,
      description: 'Wenn aktiviert wird die Seite nicht veröffentlicht',
    },
    {
      name: 'title',
      type: 'string',
      label: 'Titel',
      isTitle: true,
      required: true,
    },
    {
      name: 'main',
      type: 'object',
      label: 'Sektionen',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [fullWidthSectionSchema],
    },
    seoOptions,
    socialSharingOptions,
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
    },
    filename: {
      showFirst: true,
      description: 'Dateiname sowie SEO Slug der Seite',
      // if disabled, the editor can not edit the filename
      readonly: false,
      // Example of using a custom slugify function
      slugify: (values) => {
        // Values is an object containing all the values of the form. In this case it is {title?: string}
        const slug = values?.title ? slugify(values.title) : ''
        return `${slug}`
      },
    },
    router: ({ document }) => {
      if (document._sys.filename === 'home-page') {
        return `/`
      } else {
        return `/${document._sys.breadcrumbs.join('/')}`
      }
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

export default pageContent
