import { TextColorShemePicker } from '../../field-components/text-color-sheme-picker'
import {
  imageFieldsetExtended,
  imageFieldsetExtendedDefaults,
} from '../../partials/fieldsets/image-fieldset-extended'
import {
  advBlockOptionsRendering,
  advBlockOptionsRenderingDefaults,
} from '../../partials/fieldsets/options-adv-block-rendering'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../partials/fieldsets/options-publishing'
import button from '../elements/button'

const heroTextImageBlockSchema = {
  name: 'heroTextImageBlock',
  label: 'Hero',
  fields: [
    ...blockOptionsPublishing,
    {
      name: 'textColorSheme',
      type: 'string',
      label: 'Text Farbe',
      ui: {
        component: TextColorShemePicker,
      },
    },
    {
      name: 'title',
      type: 'string',
      label: 'Titel',
      isTitle: true,
      required: true,
    },
    {
      name: 'subtitle',
      type: 'string',
      label: 'Untertitel',
    },
    {
      name: 'introtext',
      type: 'string',
      label: 'Text',
      ui: {
        component: 'textarea',
      },
    },
    {
      name: 'cta',
      type: 'object',
      label: 'Buttons / CTA',
      list: true,
      templates: [button],
    },
    ...imageFieldsetExtended,
    {
      name: 'advancedBlockOptions',
      type: 'object',
      label: 'Block Einstellungen',
      fields: [
        {
          name: 'ordering',
          type: 'string',
          label: 'Reihenfolge',
          component: 'select',
          options: [
            {
              value: 'text-image',
              label: 'Text - Bild',
            },
            {
              value: 'image-text',
              label: 'Bild - Text',
            },
          ],
        },
        {
          name: 'textAlign',
          type: 'string',
          label: 'Text Ausrichtung',
          component: 'select',
          options: [
            {
              value: 'self-start',
              label: 'Oben',
            },
            {
              value: 'self-center',
              label: 'Mitte',
            },
            {
              value: 'self-end',
              label: 'Unten',
            },
          ],
        },
        {
          name: 'imageAlign',
          type: 'string',
          label: 'Bild Ausrichtung',
          component: 'select',
          options: [
            {
              value: 'self-start',
              label: 'Oben',
            },
            {
              value: 'self-center',
              label: 'Mitte',
            },
            {
              value: 'self-end',
              label: 'Unten',
            },
          ],
        },
        ...advBlockOptionsRendering,
        {
          name: 'subtitleTag',
          type: 'string',
          label: 'Untertitel Tag',
          component: 'select',
          options: [
            {
              value: 'h2',
              label: 'h2',
            },
            {
              value: 'h3',
              label: 'h3',
            },
            {
              value: 'h4',
              label: 'h4',
            },
            {
              value: 'h5',
              label: 'h5',
            },
            {
              value: 'h6',
              label: 'h6',
            },
            {
              value: 'span',
              label: 'span',
            },
          ],
        },
        {
          name: 'overrideSubTitleStyle',
          type: 'string',
          label: 'Header / Titel Stil überschreiben',
          component: 'select',
          options: [
            {
              value: 'false',
              label: 'Nein',
            },
            {
              value: 'h1',
              label: 'Mit h1 Stil',
            },
            {
              value: 'h2',
              label: 'Mit h2 Stil',
            },
            {
              value: 'h3',
              label: 'Mit h3 Stil',
            },
            {
              value: 'display',
              label: 'Display',
            },
          ],
        },
      ],
    },
  ],
  ui: {
    previewSrc: '/blocks/hero-text-image-block.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.draft ? '* ' + item?.title : item?.title,
      }
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textColorSheme: 'default',
        title: 'Hero Block',
        introtext:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        ...imageFieldsetExtendedDefaults,
        advancedBlockOptions: {
          ordering: 'text-image',
          textAlign: 'self-center',
          imageAlign: 'self-center',
          wrapperTag: 'div',
          headerTag: 'span',
          overrideTitleStyle: 'h2',
          subtitleTag: 'span',
          overrideSubTitleStyle: 'h3',
        },
      }
    },
  },
}

export default heroTextImageBlockSchema
