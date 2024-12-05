import { BgColorPicker } from '../../../field-components/bg-color-picker'
import { FaTinaStandardSubsetIconPicker } from '../../../field-components/fa-tina-standard-subset-icon-picker'
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

const iconTextCardSchema = {
  name: 'iconTextCard',
  label: 'Icon / Text Card',
  fields: [
    ...blockOptionsPublishing,
    {
      name: 'faIcon',
      type: 'string',
      label: 'Icon',
      ui: {
        component: FaTinaStandardSubsetIconPicker,
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
    previewSrc: '/blocks/cards/icon-text-card.png',
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
        faIcon: 'fas-rocket-launch',
        title: 'Icon / Text Card',
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

export default iconTextCardSchema
