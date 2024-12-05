const cloudinaryGenerativeOptions = [
  {
    name: 'generative',
    type: 'object',
    label: 'Generative AI Funktionen',
    description:
      'Es darf immer nur eine Generative funktion pro Bild aktiviert werden! Generative Funktionen kosten wesentlich mehr Credits und sollten mit bedacht verwendet werden.',
    fields: [
      {
        name: 'genRemove',
        type: 'object',
        label: 'Generatives Entfernen',
        fields: [
          {
            name: 'items',
            type: 'string',
            label: 'Objekte',
            description: 'Welche Objekte sollen entfernt werden',
            list: true,
          },
          {
            name: 'multiple',
            type: 'boolean',
            label: 'Multiple Vorkommen',
            description:
              'Wenn mehrere Objekte definiert wurden ist diese Option automatisch aktiviert',
          },
          {
            name: 'shadow',
            type: 'boolean',
            label: 'Entferne Schatten',
            description:
              'Soll auch der Schattenwurf der Objekte entfernt werden',
          },
          {
            name: 'execute',
            type: 'boolean',
            label: 'Ausführen',
            description:
              'Während der Eingaben sollte die Ausführung ausgeschaltet werden. Kosten: 50 Credits pro Ausführung',
          },
        ],
      },
      {
        name: 'genRecolor',
        type: 'object',
        label: 'Generatives Umfärben',
        fields: [
          {
            name: 'items',
            type: 'string',
            label: 'Objekte',
            description: 'Welche Objekte sollen umgefärbt werden?',
            list: true,
          },
          {
            name: 'to',
            type: 'string',
            label: 'Zu Farbe',
            description: 'Zu welcher Farbe soll umgefärbt werden',
            list: false,
          },
          {
            name: 'multiple',
            type: 'boolean',
            label: 'Multiple Vorkommen',
            description:
              'Wenn mehrere Objekte definiert wurden ist diese Option automatisch aktiviert',
          },
          {
            name: 'execute',
            type: 'boolean',
            label: 'Ausführen',
            description:
              'Während der Eingaben sollte die Ausführung ausgeschaltet werden. Kosten: 50 Credits pro Ausführung',
          },
        ],
      },
      {
        name: 'genReplace',
        type: 'object',
        label: 'Generatives Ersetzen',
        fields: [
          {
            name: 'from',
            type: 'string',
            label: 'Objekt',
            description: 'Welches Objekt soll ersetzt werden?',
          },
          {
            name: 'to',
            type: 'string',
            label: 'Ersatz',
            description: 'Was soll statt dessen eingesetzt werden?',
            list: false,
          },
          {
            name: 'preserveGeometry',
            type: 'boolean',
            label: 'Geometrie erhalten',
            description:
              'Das neue Objekt wird exakt in die Geometrie des zu Ersetzenden Objektes eingefügt',
          },
          {
            name: 'execute',
            type: 'boolean',
            label: 'Ausführen',
            description:
              'Während der Eingaben sollte die Ausführung ausgeschaltet werden. Kosten: 120 Credits pro Ausführung',
          },
        ],
      },
      {
        name: 'genFill',
        type: 'boolean',
        label: 'Generative Bilderweiterung',
        description:
          'Füllt generativ Bilder in ein anderes Format auf. Kosten: 50 Credits pro Derivat!',
      },
      {
        name: 'genRestore',
        type: 'boolean',
        label: 'Generative Bildverbesserung',
        description:
          'Verbessert Details in qualitativ minderwertigen Bildern. Kosten: 100 Credits',
      },
    ],
  },
]

const cloudinaryGenerativeOptionsDefaults = {
  generative: {
    genRemove: {
      multiple: false,
      shadow: false,
      execute: false,
    },
    genRecolor: {
      multiple: false,
      execute: false,
    },
    genReplace: {
      preserveGeometry: false,
      execute: false,
    },
    genFill: false,
    genRestore: false,
  },
}

export { cloudinaryGenerativeOptions, cloudinaryGenerativeOptionsDefaults }
