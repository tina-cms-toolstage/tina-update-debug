const advBlockOptionsRendering = [
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
    name: 'headerTag',
    type: 'string',
    label: 'Header / Titel Tag',
    component: 'select',
    options: [
      {
        value: 'h1',
        label: 'h1',
      },
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
      {
        value: 'span',
        label: 'span',
      },
    ],
  },
  {
    name: 'overrideTitleStyle',
    type: 'string',
    label: 'Header / Titel Stil überschreiben',
    component: 'select',
    options: [
      {
        value: 'false',
        label: 'Nein',
      },
      {
        value: 'h1',
        label: 'Mit h1 Stil',
      },
      {
        value: 'h2',
        label: 'Mit h2 Stil',
      },
      {
        value: 'h3',
        label: 'Mit h3 Stil',
      },
      {
        value: 'display',
        label: 'Display',
      },
    ],
  },
]

const advBlockOptionsRenderingDefaults = {
  wrapperTag: 'div',
  headerTag: 'h2',
  overrideTitleStyle: 'false',
}

export { advBlockOptionsRendering, advBlockOptionsRenderingDefaults }
