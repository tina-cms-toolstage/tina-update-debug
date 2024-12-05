import { TextColorShemePicker } from '../../field-components/text-color-sheme-picker'
import {
  advBlockOptionsRendering,
  advBlockOptionsRenderingDefaults,
} from '../../partials/fieldsets/options-adv-block-rendering'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../partials/fieldsets/options-publishing'
import button from '../elements/button'

const textBlockSchema = {
  name: 'textBlock',
  label: 'Text Block',
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
      name: 'text',
      type: 'rich-text',
      label: 'Text',
      isBody: true,
      templates: [button],
    },
    {
      name: 'advancedBlockOptions',
      type: 'object',
      label: 'Block Einstellungen',
      fields: [...advBlockOptionsRendering],
    },
  ],
  ui: {
    previewSrc: '/blocks/rich-text.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.draft ? '* ' + item?.title : item?.title,
      }
    },
    defaultItem: () => {
      return {
        title: 'Text Block',
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
        ...blockOptionsPublishingDefaults,
        textColorSheme: 'default',
        advancedBlockOptions: {
          ...advBlockOptionsRenderingDefaults,
        },
      }
    },
  },
}

export default textBlockSchema
