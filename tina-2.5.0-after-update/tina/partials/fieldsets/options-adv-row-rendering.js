// For Flexbox Grid Layouts

const advRowRenderingOptions = [
  {
    name: 'cardAlign',
    type: 'string',
    label: 'Item Anordnung',
    component: 'select',
    options: [
      {
        value: 'start',
        label: 'Links nach Rechts',
      },
      {
        value: 'center',
        label: 'Mittig',
      },
      {
        value: 'end',
        label: 'Rechts nach Links',
      },
    ],
  },
  {
    name: 'columnsMobile',
    type: 'string',
    label: 'Spalten Mobil',
    component: 'select',
    options: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
    ],
  },
  {
    name: 'columnsTablet',
    type: 'string',
    label: 'Spalten Tablet',
    component: 'select',
    options: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
    ],
  },
  {
    name: 'columnsDesktop',
    type: 'string',
    label: 'Spalten Desktop',
    component: 'select',
    options: [
      {
        value: '1',
        label: '1',
      },
      {
        value: '2',
        label: '2',
      },
      {
        value: '3',
        label: '3',
      },
      {
        value: '4',
        label: '4',
      },
      {
        value: '6',
        label: '6',
      },
    ],
  },
  {
    name: 'gap',
    type: 'string',
    label: 'Abstand',
    component: 'select',
    options: [
      {
        value: '10',
        label: '10px',
      },
      {
        value: '20',
        label: '20px',
      },
      {
        value: '30',
        label: '30px',
      },
      {
        value: '40',
        label: '40px',
      },
      {
        value: '60',
        label: '60px',
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

const advRowRenderingOptionsDefaults = {
  cardAlign: 'center',
  gap: '40',
  columnsMobile: '1',
  columnsTablet: '2',
  columnsDesktop: '3',
}

export { advRowRenderingOptions, advRowRenderingOptionsDefaults }
