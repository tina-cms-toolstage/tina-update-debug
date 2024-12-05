import {
  cloudinaryEffectOptions,
  cloudinaryEffectOptionsDefaults,
} from './cloudinary-effect'
import {
  cloudinaryGenerativeOptions,
  cloudinaryGenerativeOptionsDefaults,
} from './cloudinary-generative'
import {
  advImageFormat,
  advImageFormatDefaults,
} from './options-adv-image-format'

export const imageFieldsetExtended = [
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
    fields: [...advImageFormat, ...cloudinaryEffectOptions],
  },
]

export const imageFieldsetExtendedDefaults = {
  src: '/uploads/ts_tina_standard_image_16_9.jpg',
  alt: 'Alt Text Bild',
  advancedImageOptions: {
    ...advImageFormatDefaults,
    ...cloudinaryEffectOptionsDefaults,
  },
}

export const imageFieldsetExtendedGen = [
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
    fields: [
      ...advImageFormat,
      ...cloudinaryEffectOptions,
      ...cloudinaryGenerativeOptions,
    ],
  },
]

export const imageFieldsetExtendedGenDefaults = {
  src: '/uploads/ts_tina_standard_image_16_9.jpg',
  alt: 'Alt Text Bild',
  advancedImageOptions: {
    ...advImageFormatDefaults,
    ...cloudinaryEffectOptionsDefaults,
    ...cloudinaryGenerativeOptionsDefaults,
  },
}
