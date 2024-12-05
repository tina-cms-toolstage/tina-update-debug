import { TextColorShemePicker } from '../../field-components/text-color-sheme-picker'
import { advRowRenderingOptions } from '../../partials/fieldsets/options-adv-row-rendering'
import {
  emblaOptions,
  emblaOptionsDefaults,
} from '../../partials/fieldsets/options-embla-slider'
import {
  blockOptionsPublishing,
  blockOptionsPublishingDefaults,
} from '../../partials/fieldsets/options-publishing'

const testimonialCarouselBlockSchema = {
  name: 'testimonialCarouselBlock',
  label: 'Testimonial Carousel',
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
      name: 'textColorSheme',
      type: 'string',
      label: 'Text Farbe',
      ui: {
        component: TextColorShemePicker,
      },
    },
    {
      name: 'testimonials',
      type: 'object',
      label: 'Testimonials',
      list: true,
      fields: [
        {
          name: 'title',
          type: 'string',
          label: 'Titel',
          required: true,
        },
        {
          name: 'testimonial',
          label: 'Terstimonial',
          type: 'reference',
          collections: ['testimonial'],
        },
      ],
      ui: {
        defaultItem: {
          title: 'Testimonial',
        },
      },
      itemProps: (item) => {
        // Field values are accessed by item?.<Field name>
        return {
          label: item?.title,
        }
      },
    },
    {
      name: 'advancedBlockOptions',
      type: 'object',
      label: 'Block Einstellungen',
      fields: [...advRowRenderingOptions, ...emblaOptions],
    },
  ],
  ui: {
    previewSrc: '/blocks/testimonial-carousel.jpg',
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.name,
      }
    },
    defaultItem: (item) => {
      return {
        ...blockOptionsPublishingDefaults,
        name: 'Testimonial Carousel',
        textColorSheme: 'default',
        advancedBlockOptions: {
          cardAlign: 'start',
          gap: '40',
          columnsMobile: '1',
          columnsTablet: '2',
          columnsDesktop: '2',
          ...emblaOptionsDefaults,
        },
      }
    },
  },
}

export default testimonialCarouselBlockSchema
