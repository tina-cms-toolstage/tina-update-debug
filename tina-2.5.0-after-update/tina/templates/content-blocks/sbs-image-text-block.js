import { TextColorShemePicker } from '../../field-components/text-color-sheme-picker'
import {
  imageFieldsetExtendedGen,
  imageFieldsetExtendedGenDefaults,
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

const sbsImageTextBlockSchema = {
  name: 'sbsImageTextBlock',
  label: 'Side by Side - Bild / Text',
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
      name: 'text',
      type: 'rich-text',
      label: 'Text',
      isBody: true,
      templates: [button],
    },
    {
      name: 'cta',
      type: 'object',
      label: 'Buttons / CTA',
      list: true,
      templates: [button],
    },
    ...imageFieldsetExtendedGen,
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
              value: 'image-text',
              label: 'Bild - Text',
            },
            {
              value: 'text-image',
              label: 'Text - Bild',
            },
          ],
        },
        {
          name: 'centerTextMobile',
          type: 'boolean',
          label: 'Text Mobil zentrieren',
        },
        {
          name: 'textAlign',
          type: 'string',
          label: 'Text Ausrichtung',
          description: 'Ausrichtung des Textbereichs im Blockrahmen',
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
          description: 'Ausrichtung des Bildes im Blockrahmen',
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
          ],
        },
      ],
    },
  ],
  ui: {
    previewSrc: '/blocks/sbs-image-text-block.jpg',
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
        title: 'Side by Side - Bild / Text',
        text: {
          type: 'root',
          children: [
            {
              type: 'p',
              children: [
                {
                  type: 'text',
                  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                },
              ],
            },
          ],
        },
        ...imageFieldsetExtendedGenDefaults,
        advancedBlockOptions: {
          ordering: 'image-text',
          centerTextMobile: true,
          textAlign: 'self-center',
          imageAlign: 'self-center',
          ...advBlockOptionsRenderingDefaults,
          subtitleTag: 'h3',
        },
      }
    },
  },
}

export default sbsImageTextBlockSchema
