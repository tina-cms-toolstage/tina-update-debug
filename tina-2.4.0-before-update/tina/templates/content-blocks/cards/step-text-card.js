import { BgColorPicker } from '../../../field-components/bg-color-picker'
import { TextColorShemePicker } from '../../../field-components/text-color-sheme-picker'
import {
  advCardOptionsRendering,
  advCardOptionsRenderingDefaults,
} from '../../../partials/fieldsets/options-adv-card-rendering'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../../partials/fieldsets/options-publishing'
import button from '../../elements/button'

const stepTextCardSchema = {
  name: 'stepTextCard',
  label: 'Schritt / Text Card',
  fields: [
    ...blockOptionsPublishing,
    {
      name: 'stepNo',
      type: 'string',
      label: 'Nummer',
    },
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
    {
      name: 'advancedCardOptions',
      type: 'object',
      label: 'Card Einstellungen',
      fields: [
        ...advCardOptionsRendering,
        {
          name: 'iconPosition',
          type: 'string',
          label: 'Icon Position',
          component: 'select',
          options: [
            {
              value: 'left',
              label: 'Links',
            },
            {
              value: 'top',
              label: 'oben',
            },
          ],
        },
      ],
    },
  ],
  ui: {
    previewSrc: '/blocks/cards/step-text-card.png',
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
        title: 'Schritt / Text Card',
        stepNo: '1.',
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
        advancedCardOptions: {
          ...advCardOptionsRenderingDefaults,
          iconPosition: 'left',
          roundEdges: 'tl-br',
        },
      }
    },
  },
}

export default stepTextCardSchema
