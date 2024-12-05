import { twSizingScale } from './tailwind-sizing-scale'

const advPageSectionOptions = [
  {
    name: 'sizing',
    type: 'string',
    label: 'Sektion Ausgabe',
    options: [
      {
        value: 'container',
        label: 'Im Container',
      },
      {
        value: 'full',
        label: 'Volle Breite',
      },
    ],
  },
  {
    name: 'wrapperTag',
    type: 'string',
    label: 'Wrapper Tag',
    component: 'select',
    options: [
      {
        value: 'article',
        label: 'article',
      },
      {
        value: 'aside',
        label: 'aside',
      },
      {
        value: 'div',
        label: 'div',
      },
      {
        value: 'section',
        label: 'section',
      },
    ],
  },
  {
    name: 'paddings',
    type: 'object',
    label: 'Abstände',
    fields: [
      {
        name: 'paddingTop',
        type: 'string',
        label: 'Außenabstand Oben',
        options: [...twSizingScale],
      },
      {
        name: 'paddingTopMobile',
        type: 'string',
        label: 'Außenabstand Oben Mobil',
        options: [...twSizingScale],
      },
      {
        name: 'paddingBottom',
        type: 'string',
        label: 'Außenabstand Unten',
        options: [...twSizingScale],
      },
      {
        name: 'paddingBottomMobile',
        type: 'string',
        label: 'Außenabstand Unten Mobil',
        options: [...twSizingScale],
      },
      {
        name: 'paddingBlocks',
        type: 'string',
        label: 'Abstand zwischen Blöcken',
        options: [...twSizingScale],
      },
      {
        name: 'paddingBlocksMobile',
        type: 'string',
        label: 'Abstand zwischen Blöcken Mobil',
        options: [...twSizingScale],
      },
    ],
  },
  {
    name: 'cssClass',
    type: 'string',
    label: 'CSS Klasse',
    ui: {
      format: (val) => (val ? val.toLowerCase() : ''),
    },
  },
  {
    name: 'cssId',
    type: 'string',
    label: 'CSS ID',
    ui: {
      format: (val) => (val ? val.toLowerCase().replace(/ /g, '-') : ''),
    },
  },
]

const advPageSectionOptionsDefaults = {
  sizing: 'container',
  wrapperTag: 'section',
  paddings: {
    paddingTop: '20',
    paddingTopMobile: '5',
    paddingBottom: '20',
    paddingBottomMobile: '5',
    paddingBlocks: '20',
    paddingBlocksMobile: '10',
  },
}

export { advPageSectionOptions, advPageSectionOptionsDefaults }
