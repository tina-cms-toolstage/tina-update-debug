const advImageFormat = [
  {
    name: 'priority',
    type: 'boolean',
    label: 'Bild mit Priorität',
    description:
      'Schaltet das lazy-loading für Bilder die im oberen Seitenbereich direkt angezeigt werden aus.',
  },
  {
    name: 'format',
    type: 'object',
    label: 'Format Einstellungen',
    fields: [
      {
        name: 'fill',
        type: 'boolean',
        label: 'Bild einpassen',
        description: 'Passt das Bild in das gewählte Bildverhältnis ein',
      },
      {
        name: 'aspectRatio',
        type: 'string',
        label: 'Bildverhältnis',
        component: 'select',
        options: [
          {
            value: '1',
            label: '1/1',
          },
          {
            value: '3:2',
            label: '3/2',
          },
          {
            value: '2:3',
            label: '2/3',
          },
          {
            value: '4:3',
            label: '4/3',
          },
          {
            value: '4:5',
            label: '4/5',
          },
          {
            value: '5:4',
            label: '5/4',
          },
          {
            value: '16:9',
            label: '16/9',
          },
          {
            value: '21:9',
            label: '21/9',
          },
          {
            value: '3:1',
            label: '3/1',
          },
        ],
      },
      {
        name: 'gravity',
        type: 'string',
        label: 'Beschnittfokus',
        component: 'select',
        options: [
          {
            value: 'auto',
            label: 'Automatische Motiverkennung',
          },
          {
            value: 'face:center',
            label: 'Größtes Gesicht',
          },
          {
            value: 'faces',
            label: 'Alle Gesichter',
          },
          {
            value: 'center',
            label: 'Mitte',
          },
          {
            value: 'north_east',
            label: 'Nord-Ost',
          },
          {
            value: 'north',
            label: 'Nord',
          },
          {
            value: 'north_west',
            label: 'Nord-West',
          },
          {
            value: 'west',
            label: 'West',
          },
          {
            value: 'south_west',
            label: 'Süd-West',
          },
          {
            value: 'south',
            label: 'Süden',
          },
          {
            value: 'south_east',
            label: 'Süd-Ost',
          },
          {
            value: 'east',
            label: 'Ost',
          },
        ],
      },
    ],
  },
]

const advImageFormatDefaults = {
  priority: false,
  format: {
    fill: true,
    aspectRatio: '3:2',
    gravity: 'auto',
  },
}

export { advImageFormat, advImageFormatDefaults }
