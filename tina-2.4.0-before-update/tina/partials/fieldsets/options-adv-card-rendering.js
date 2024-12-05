const advCardOptionsRendering = [
  {
    name: 'headerTag',
    type: 'string',
    label: 'Header Tag',
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
    name: 'cssClass',
    type: 'string',
    label: 'CSS Klasse',
    ui: {
      format: (val) => (val ? val.toLowerCase() : ''),
    },
  },
]

const advCardOptionsRenderingDefaults = {
  headerTag: 'h3',
  wrapperTag: 'div',
}

export { advCardOptionsRendering, advCardOptionsRenderingDefaults }
