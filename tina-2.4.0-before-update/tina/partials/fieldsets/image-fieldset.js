import {
  advImageFormat,
  advImageFormatDefaults,
} from './options-adv-image-format'

const imageFieldset = [
  {
    name: 'src',
    type: 'image',
    label: 'Bild Quelle',
    required: true,
  },
  {
    name: 'alt',
    type: 'string',
    label: 'Bild Alt Text',
    required: true,
    description:
      'Kurze Beschreibung was auf dem Bild zu sehen ist. Unterstützt die Barrierefreiheit und SEO.',
  },
  {
    name: 'advancedImageOptions',
    type: 'object',
    label: 'Bild Einstellungen',
    fields: [...advImageFormat],
  },
]

const imageFieldsetDefaults = {
  src: '/uploads/ts_tina_standard_image_16_9.jpg',
  alt: 'Alt Text Bild',
  advancedImageOptions: { ...advImageFormatDefaults },
}

export { imageFieldset, imageFieldsetDefaults }
