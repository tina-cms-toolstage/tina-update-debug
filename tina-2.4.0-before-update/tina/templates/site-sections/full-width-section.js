import { BgColorPicker } from '../../field-components/bg-color-picker'
import {
  advPageSectionOptions,
  advPageSectionOptionsDefaults,
} from '../../partials/fieldsets/options-adv-page-section'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../partials/fieldsets/options-publishing'
import cardListBlockSchema from '../content-blocks/card-list-block'
import HeroTextImageBlockSchema from '../content-blocks/hero-text-image-block'
import imageBlockSchema from '../content-blocks/image-block'
import introTextBlockSchema from '../content-blocks/intro-text-block'
import sbsImageTextBlockSchema from '../content-blocks/sbs-image-text-block'
import testimonialCarouselBlockSchema from '../content-blocks/testimonial-carousel-block'
import textBlockSchema from '../content-blocks/text-block'

const fullWidthSectionSchema = {
  name: 'section',
  label: 'Seitenabschnitt',
  fields: [
    ...blockOptionsPublishing,
    {
      name: 'name',
      type: 'string',
      label: 'Bezeichnung des Seitenabschnitts',
      isTitle: true,
      required: true,
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
      name: 'blocks',
      type: 'object',
      label: 'Inhalts Blöcke',
      description: 'Allgemeines, Hero, Slider etc...',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        HeroTextImageBlockSchema,
        introTextBlockSchema,
        sbsImageTextBlockSchema,
        cardListBlockSchema,
        textBlockSchema,
        imageBlockSchema,
        testimonialCarouselBlockSchema,
      ],
    },
    {
      name: 'advancedSectionOptions',
      type: 'object',
      label: 'Sektions Einstellungen',
      fields: [...advPageSectionOptions],
    },
  ],
  ui: {
    previewSrc: '/blocks/full-width-section.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.draft ? '* ' + item?.name : item?.name,
      }
    },
    defaultItem: {
      ...blockOptionsPublishingDefaults,
      name: 'Seitenabschnitt',
      advancedSectionOptions: { ...advPageSectionOptionsDefaults },
    },
  },
}

export default fullWidthSectionSchema
