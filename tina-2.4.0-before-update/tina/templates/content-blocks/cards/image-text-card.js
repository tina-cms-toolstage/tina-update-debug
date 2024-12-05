import { BgColorPicker } from '../../../field-components/bg-color-picker'
import { TextColorShemePicker } from '../../../field-components/text-color-sheme-picker'
import {
  imageFieldsetExtended,
  imageFieldsetExtendedDefaults,
} from '../../../partials/fieldsets/image-fieldset-extended'
import {
  advCardOptionsRendering,
  advCardOptionsRenderingDefaults,
} from '../../../partials/fieldsets/options-adv-card-rendering'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../../partials/fieldsets/options-publishing'
import button from '../../elements/button'

const imageTextCardSchema = {
  name: 'imageTextCard',
  label: 'Bild / Text Card',
  fields: [
    ...blockOptionsPublishing,
    {
      name: 'title',
      type: 'string',
      label: 'Titel',
      isTitle: true,
      required: true,
    },
    {
      name: 'introtext',
      type: 'rich-text',
      label: 'Text',
    },
    {
      name: 'textCenter',
      type: 'boolean',
      label: 'Text zentriert',
    },
    {
      name: 'cta',
      type: 'object',
      label: 'Buttons / CTA',
      list: true,
      templates: [button],
    },
    {
      name: 'backgroundColor',
      type: 'string',
      label: 'Hintergrundfarbe',
      ui: {
        component: BgColorPicker,
      },
    },
    {
      name: 'textColorSheme',
      type: 'string',
      label: 'Text Farbe',
      ui: {
        component: TextColorShemePicker,
      },
    },
    ...imageFieldsetExtended,
    {
      name: 'advancedCardOptions',
      type: 'object',
      label: 'Card Einstellungen',
      fields: [...advCardOptionsRendering],
    },
  ],
  ui: {
    previewSrc: '/blocks/cards/image-text-card.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.draft ? '* ' + item?.title : item?.title,
      }
    },
    defaultItem: () => {
      return {
        ...blockOptionsPublishingDefaults,
        textCenter: true,
        textColorSheme: 'default',
        title: 'Bild / Text Card',
        introtext: {
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
        ...imageFieldsetExtendedDefaults,
        advancedCardOptions: {
          ...advCardOptionsRenderingDefaults,
        },
      }
    },
  },
}

export default imageTextCardSchema
