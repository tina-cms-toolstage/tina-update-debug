import iconTextCardSchema from './cards/icon-text-card'
import imageTextCardSchema from './cards/image-text-card'
import stepTextCardSchema from './cards/step-text-card'
import {
  advRowRenderingOptions,
  advRowRenderingOptionsDefaults,
} from '../../partials/fieldsets/options-adv-row-rendering'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../partials/fieldsets/options-publishing'

const cardListBlockSchema = {
  name: 'cardListBlock',
  label: 'Card Liste',
  fields: [
    ...blockOptionsPublishing,
    {
      name: 'name',
      type: 'string',
      label: 'Titel',
      isTitle: true,
      required: true,
    },
    {
      name: 'cards',
      type: 'object',
      label: 'Cards',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [imageTextCardSchema, iconTextCardSchema, stepTextCardSchema],
    },
    {
      name: 'advancedBlockOptions',
      type: 'object',
      label: 'Block Einstellungen',
      fields: [...advRowRenderingOptions],
    },
  ],
  ui: {
    previewSrc: '/blocks/card-list.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.name,
      }
    },
    defaultItem: (item) => {
      return {
        name: 'Card Liste',
        ...blockOptionsPublishingDefaults,
        advancedBlockOptions: { ...advRowRenderingOptionsDefaults },
      }
    },
  },
}

export default cardListBlockSchema
