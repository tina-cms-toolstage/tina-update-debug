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

const introTextBlockSchema = {
  name: 'introTextBlock',
  label: 'Intro Text',
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
      name: 'subtitle',
      type: 'string',
      label: 'Untertitel',
    },
    {
      name: 'introtext',
      type: 'string',
      label: 'Text',
      ui: {
        component: 'textarea',
      },
    },
    {
      name: 'cta',
      type: 'object',
      label: 'Buttons / CTA',
      list: true,
      templates: [button],
    },
    {
      name: 'advancedBlockOptions',
      type: 'object',
      label: 'Block Einstellungen',
      fields: [
        ...advBlockOptionsRendering,
        {
          name: 'subtitleTag',
          type: 'string',
          label: 'Untertitel Tag',
          component: 'select',
          options: [
            {
              value: 'h2',
              label: 'h2',
            },
            {
              value: 'h3',
              label: 'h3',
            },
            {
              value: 'h4',
              label: 'h4',
            },
            {
              value: 'h5',
              label: 'h5',
            },
            {
              value: 'h6',
              label: 'h6',
            },
          ],
        },
        {
          name: 'maxWidth',
          type: 'string',
          label: 'Introtext max. Breite',
          component: 'select',
          options: [
            {
              value: 'prose',
              label: '65 Zeichenbreiten',
            },
            {
              value: '3xl',
              label: '768px',
            },
            {
              value: '4xl',
              label: '896px',
            },
            {
              value: '5xl',
              label: '1024px',
            },
            {
              value: '6xl',
              label: '1152px',
            },
            {
              value: '7xl',
              label: '1280px',
            },
            {
              value: 'max',
              label: 'Maximale Breite',
            },
          ],
        },
      ],
    },
  ],
  ui: {
    previewSrc: '/blocks/intro-text-block.jpg',
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
        title: 'Intro Text',
        introtext:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        advancedBlockOptions: {
          wrapperTag: 'div',
          headerTag: 'h2',
          overrideTitleStyle: 'h1',
          subtitleTag: 'h3',
          maxWidth: 'prose',
        },
      }
    },
  },
}

export default introTextBlockSchema
