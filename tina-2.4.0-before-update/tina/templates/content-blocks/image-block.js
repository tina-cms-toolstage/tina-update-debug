import {
  imageFieldsetExtendedGen,
  imageFieldsetExtendedGenDefaults,
} from '../../partials/fieldsets/image-fieldset-extended'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../partials/fieldsets/options-publishing'

const imageBlockSchema = {
  name: 'imageBlock',
  label: 'Bild',
  fields: [...blockOptionsPublishing, ...imageFieldsetExtendedGen],
  ui: {
    previewSrc: '/blocks/image.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.alt,
      }
    },
    defaultItem: (item) => {
      return {
        ...blockOptionsPublishingDefaults,
        ...imageFieldsetExtendedGenDefaults,
      }
    },
  },
}

export default imageBlockSchema
