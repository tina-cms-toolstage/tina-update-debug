import { AdvancedColorPicker } from '../field-components/advanced-color-picker'
import { linkFieldset } from '../partials/fieldsets/link-fieldset'

function validateColorNames(value) {
  if (
    value === 'black' ||
    value === 'current' ||
    value === 'draft' ||
    value === 'focus' ||
    value === 'gray' ||
    value === 'heading' ||
    value === 'primary' ||
    value === 'secondary' ||
    value === 'text' ||
    value === 'transparent' ||
    value === 'white'
  ) {
    return 'Folgende bezeichnungen sind nicht erlaubt: black, current, draft, focus, gray, heading, primary, secondary, text, transparent, white'
  }
}

const globalSettings = {
  name: 'globalSettings',
  label: 'Einstellungen',
  path: 'content/global-settings',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
    global: true,
    beforeSubmit: async ({ form, cms, values }) => {},
  },
  fields: [
    {
      name: 'siteInformation',
      type: 'object',
      label: 'Allgemeine Einstellungen / Informationen',
      fields: [
        {
          name: 'siteName',
          type: 'string',
          label: 'Seiten Name',
          description: 'Wird an das Ende des Seitentitels drangehängt',
          required: true,
        },
        {
          name: 'siteUrl',
          type: 'string',
          label: 'Seiten URL',
          description: 'Domain/Frontend der Seite. Wichtig: ohne "/" am Ende!',
          required: true,
        },
        {
          name: 'logo',
          type: 'image',
          label: 'Seiten Logo',
          required: true,
        },
        {
          name: 'contactData',
          type: 'object',
          label: 'Kontaktdaten',
          fields: [
            {
              name: 'street',
              type: 'string',
              label: 'Strasse',
            },
            {
              name: 'streetNo',
              type: 'string',
              label: 'Strasse Nr',
            },
            {
              name: 'postalCode',
              type: 'string',
              label: 'Postleitzahl',
            },
            {
              name: 'city',
              type: 'string',
              label: 'Ort',
            },
            {
              name: 'email',
              type: 'object',
              label: 'E-Mail',
              fields: [...linkFieldset],
            },
            {
              name: 'phone',
              type: 'object',
              label: 'Telefon',
              fields: [...linkFieldset],
            },
            {
              name: 'mobile',
              type: 'object',
              label: 'Telefon - Mobil',
              fields: [...linkFieldset],
            },
            {
              name: 'fax',
              type: 'string',
              label: 'Fax',
            },
          ],
        },
        {
          name: 'socialLinks',
          type: 'object',
          label: 'Soziale Verlinkungen',
          fields: [
            {
              name: 'iconStyle',
              type: 'string',
              label: 'Icon Style',
              component: 'select',
              options: [
                {
                  value: 'default',
                  label: 'Standard',
                },
                {
                  value: 'square',
                  label: 'Eckig',
                },
                {
                  value: 'rounded',
                  label: 'Abgerundet',
                },
                {
                  value: 'circle',
                  label: 'Kreis',
                },
              ],
            },
            {
              name: 'facebook',
              type: 'object',
              label: 'Facebook',
              fields: [...linkFieldset],
            },
            {
              name: 'x',
              type: 'object',
              label: 'X / Twitter',
              fields: [...linkFieldset],
            },
            {
              name: 'threads',
              type: 'object',
              label: 'Threads',
              fields: [...linkFieldset],
            },
            {
              name: 'instagram',
              type: 'object',
              label: 'Instagram',
              fields: [...linkFieldset],
            },
            {
              name: 'youtube',
              type: 'object',
              label: 'YouTube',
              fields: [...linkFieldset],
            },
            {
              name: 'linkedIn',
              type: 'object',
              label: 'LinkedIn',
              fields: [...linkFieldset],
            },
            {
              name: 'xing',
              type: 'object',
              label: 'Xing',
              fields: [...linkFieldset],
            },
          ],
        },
      ],
    },
    {
      name: 'SlideInMenu',
      type: 'object',
      label: 'Mobiles Menü',
      fields: [
        {
          name: 'position',
          type: 'string',
          label: 'Position',
          ui: {
            component: 'radio-group',
            variant: 'button',
            direction: 'horizontal',
          },
          options: [
            {
              value: 'left',
              label: 'Links',
            },
            {
              value: 'right',
              label: 'Rechts',
            },
          ],
        },
      ],
    },
    {
      name: 'globalSeo',
      type: 'object',
      label: 'Globales SEO',
      fields: [
        {
          name: 'metaDescription',
          type: 'string',
          label: 'Meta Beschreibung',
          ui: {
            component: 'textarea',
            validate: (value, data) => {
              const lengthOfMetaDescription = value?.length || 0
              if (lengthOfMetaDescription >= 160) {
                return 'Die Meta Beschreibung sollte weniger wie 160 Zeichen beinhalten'
              }
              if (
                lengthOfMetaDescription >= 1 &&
                lengthOfMetaDescription <= 50
              ) {
                return 'Die Meta Beschreibung sollte mehr wie 50 Zeichen beinhalten'
              }
            },
          },
        },
        {
          name: 'metaKeywords',
          type: 'object',
          label: 'Meta Keywords',
          fields: [
            {
              name: 'metaKeywordList',
              type: 'string',
              label: 'Keyword',
              description: 'Ein Keyword pro Eintrag/Zeile',
              list: true,
            },
          ],
        },
        {
          name: 'robots',
          type: 'object',
          label: 'Globale Robots konfiguration',
          fields: [
            {
              name: 'index',
              type: 'boolean',
              label: 'Index',
              description:
                'Sollen die Seiten von Suchmaschinen indiziert werden.',
            },
            {
              name: 'follow',
              type: 'boolean',
              label: 'Follow',
              description:
                'Soll die Suchmaschine den internen und externen Links folgen',
            },
            {
              name: 'imageindex',
              type: 'boolean',
              label: 'Image Index',
              description:
                'Sollen auch die Bilder der Website von Google indiziert werden',
            },
          ],
        },
      ],
    },
    {
      name: 'globalLayout',
      type: 'object',
      label: 'Layout',
      fields: [
        {
          name: 'primaryColor',
          type: 'string',
          label: 'Farbe primär',
          ui: {
            component: 'color',
          },
        },
        {
          name: 'secondaryColor',
          type: 'string',
          label: 'Farbe sekundär',
          ui: {
            component: 'color',
          },
        },
        {
          name: 'additionalColors',
          type: 'object',
          label: 'Zusätzliche Farben',
          list: true,
          max: 6,
          fields: [
            {
              name: 'colorName',
              type: 'string',
              label: 'Name',
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value)
                },
                format: (val) =>
                  val &&
                  val
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, ''),
              },
            },
            {
              name: 'colorValue',
              type: 'string',
              label: 'Farbwert',
              ui: {
                component: 'color',
              },
            },
          ],
          ui: {
            defaultItem: {
              colorName: 'farb-bezeichnung',
              colorValue: '#000000',
            },
            itemProps: (item) => {
              return {
                label: item?.colorName,
                className: 'my-1',
                style: { borderLeft: '1.5em solid ' + item?.colorValue },
              }
            },
          },
        },
        {
          name: 'headingColor',
          type: 'string',
          label: 'Farbe Überschriften',
          ui: {
            component: 'color',
          },
        },
        {
          name: 'bodyColor',
          type: 'string',
          label: 'Farbe Text',
          ui: {
            component: 'color',
          },
        },
        {
          name: 'advancedBackgrounds',
          type: 'object',
          label: 'Erweiterte Hintergundvorgaben',
          list: true,
          max: 6,
          fields: [
            {
              name: 'advancedBackgroundName',
              type: 'string',
              label: 'Name',
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value)
                },
                format: (val) =>
                  val &&
                  val
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, ''),
              },
            },
            {
              name: 'advancedBackgroundLayers',
              type: 'object',
              label: 'Hintergrundebenen',
              list: true,
              templates: [
                {
                  name: 'colorLayerTemplate',
                  label: 'Farb/Verlaufsebene',
                  fields: [
                    {
                      name: 'colorLayer',
                      type: 'string',
                      label: 'Farb/Verlaufsebene',
                      ui: {
                        component: AdvancedColorPicker,
                      },
                    },
                  ],
                  ui: {
                    itemProps: (item) => {
                      // Field values are accessed by item?.<Field name>
                      return {
                        label: item?.colorLayer,
                      }
                    },
                  },
                },
                {
                  name: 'imageLayerTemplate',
                  label: 'Bild',
                  fields: [
                    {
                      name: 'image',
                      type: 'image',
                      label: 'Bild',
                    },
                    {
                      name: 'bgPos',
                      type: 'string',
                      label: 'Hintergrund Position',
                      component: 'select',
                      options: [
                        {
                          value: 'left top',
                          label: 'links oben',
                        },
                        {
                          value: 'left center',
                          label: 'links mitte',
                        },
                        {
                          value: 'left bottom',
                          label: 'links unten',
                        },
                        {
                          value: 'right top',
                          label: 'rechts oben',
                        },
                        {
                          value: 'right center',
                          label: 'rechts mitte',
                        },
                        {
                          value: 'right bottom',
                          label: 'rechts unten',
                        },
                        {
                          value: 'center top',
                          label: 'mitte oben',
                        },
                        {
                          value: 'center center',
                          label: 'mitte',
                        },
                        {
                          value: 'center bottom',
                          label: 'mitte unten',
                        },
                      ],
                    },
                    {
                      name: 'bgPosStr',
                      type: 'string',
                      label: 'Hintergrund Position Override',
                      description:
                        'Format: "50% 50%" oder "50px 50px". Überschreibt die Auwahl des Dropdowns mit einer flexiblen Position.',
                    },
                    {
                      name: 'bgRep',
                      type: 'string',
                      label: 'Hintergrund Wiederholen',
                      component: 'select',
                      options: [
                        {
                          value: 'repeat',
                          label: 'x- & y-achse',
                        },
                        {
                          value: 'repeat-x',
                          label: 'x-achse',
                        },
                        {
                          value: 'repeat-y',
                          label: 'y-achse',
                        },
                        {
                          value: 'no-repeat',
                          label: 'nicht wiederholen',
                        },
                      ],
                    },
                  ],
                  ui: {
                    defaultItem: {
                      bgPos: 'center center',
                      bgRep: 'repeat',
                    },
                    itemProps: (item) => {
                      // Field values are accessed by item?.<Field name>
                      return {
                        label: item?.colorLayer,
                      }
                    },
                  },
                },
              ],
            },
          ],
          ui: {
            defaultItem: {
              advancedBackgroundName: 'hintergrund-bezeichnung',
            },
            itemProps: (item) => {
              return {
                label: item?.advancedBackgroundName,
                className: 'my-1',
                style: { borderLeft: '1.5em solid ' + item?.colorValue },
              }
            },
          },
        },
        {
          name: 'textStyleSets',
          type: 'object',
          label: 'Zusätzliche Schrift Farbsätze',
          list: true,
          max: 6,
          fields: [
            {
              name: 'name',
              type: 'string',
              label: 'Name',
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value)
                },
                format: (val) =>
                  val &&
                  val
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, ''),
              },
            },
            {
              name: 'headingColor',
              type: 'string',
              label: 'Farbe Überschriften',
              ui: {
                component: 'color',
              },
            },
            {
              name: 'bodyColor',
              type: 'string',
              label: 'Farbe Text',
              ui: {
                component: 'color',
              },
            },
          ],
          ui: {
            defaultItem: {
              name: 'schrift-farbsatz-name',
              headingColor: '#000000',
              bodyColor: '#000000',
            },
            itemProps: (item) => {
              return {
                label: item?.name,
                className: 'my-1',
                style: {
                  border: '1.5em solid',
                  borderImageSlice: 1,
                  borderWidth: '1.5em',
                  borderTop: 0,
                  borderBottom: 0,
                  borderRight: 0,
                  borderImageSource:
                    'linear-gradient(to bottom, ' +
                    item.headingColor +
                    ' 0%,' +
                    item.headingColor +
                    ' 50%, ' +
                    item.bodyColor +
                    ' 50%, ' +
                    item.bodyColor +
                    ' 100%)',
                },
              }
            },
          },
        },
        {
          name: 'buttonStyleSets',
          type: 'object',
          label: 'Button Stile',
          description:
            'Falls ein Stil immer vorausgewählt werden soll, muss dieser "standard" heißen',
          list: true,
          max: 6,
          fields: [
            {
              name: 'name',
              type: 'string',
              label: 'Name',
              required: true,
              ui: {
                validate: (value, data) => {
                  return validateColorNames(value)
                },
                format: (val) =>
                  val &&
                  val
                    .toLowerCase()
                    .replace(/ /g, '-')
                    .replace(/[^\w-]+/g, ''),
              },
            },
            {
              name: 'backgroundColor',
              type: 'string',
              label: 'Farbe Hintergrund',
              ui: {
                component: AdvancedColorPicker,
              },
            },
            {
              name: 'backgroundColorHover',
              type: 'string',
              label: 'Farbe Hintergrund Hover',
              ui: {
                component: AdvancedColorPicker,
              },
            },
            {
              name: 'borderColor',
              type: 'string',
              label: 'Farbe Rahmen',
              ui: {
                component: AdvancedColorPicker,
              },
            },
            {
              name: 'borderColorHover',
              type: 'string',
              label: 'Farbe Rahmen Hover',
              ui: {
                component: AdvancedColorPicker,
              },
            },
            {
              name: 'borderWidth',
              type: 'string',
              label: 'Stärke Rahmen',
              component: 'select',
              options: [
                {
                  value: '0',
                  label: 'kein Rahmen',
                },
                {
                  value: '1',
                  label: '1px',
                },
                {
                  value: '2',
                  label: '2px',
                },
                {
                  value: '3',
                  label: '3px',
                },
                {
                  value: '4',
                  label: '4px',
                },
              ],
            },
            {
              name: 'textColor',
              type: 'string',
              label: 'Farbe Text',
              ui: {
                component: 'color',
              },
            },
            {
              name: 'textColorHover',
              type: 'string',
              label: 'Farbe Text Hover',
              ui: {
                component: 'color',
              },
            },
          ],
          ui: {
            defaultItem: {
              name: 'button-farbsatz-name',
              backgroundColor: '',
              borderColor: '',
              borderWidth: '0',
              textColor: '#000000',
            },
            itemProps: (item) => {
              const topColor = item?.backgroundColor
                ? item.backgroundColor
                : item?.borderColor

              return {
                label: item?.name,
                className: 'my-1',
                style: {
                  border: '1.5em solid',
                  borderImageSlice: 1,
                  borderWidth: '1.5em',
                  borderTop: 0,
                  borderBottom: 0,
                  borderRight: 0,
                  borderImageSource:
                    'linear-gradient(to bottom, ' +
                    topColor +
                    ' 0%,' +
                    topColor +
                    ' 50%, ' +
                    item.textColor +
                    ' 50%, ' +
                    item.textColor +
                    ' 100%)',
                },
              }
            },
          },
        },
        {
          name: 'twSafeList',
          type: 'object',
          label: 'Tailwind Safelist Klassen',
          fields: [
            {
              name: 'safeListClasses',
              type: 'string',
              label: 'Utility Classes',
              description:
                'Hier können Tailwind Klassen für die Safelist eingetragen werden damit diese vom Backend aus nutzbar sind',
              list: true,
            },
          ],
        },
      ],
    },
    {
      name: 'mailConfiguration',
      type: 'object',
      label: 'Mail Konfiguration',
      fields: [
        {
          name: 'logo',
          type: 'image',
          label: 'E-Mail Logo',
          description: 'Logo der E-Mail Kopfzeile',
        },
        {
          name: 'contactRecipients',
          type: 'string',
          label: 'Empfänger Kontaktformular',
          description: 'E-Mail Adressen für den Empfang des Kontaktformulars',
          list: true,
        },
        {
          name: 'senderName',
          type: 'string',
          label: 'Absendername',
        },
        {
          name: 'senderAddress',
          type: 'string',
          label: 'Absenderadresse',
          description: 'Über diese Adresse wird das Kontaktformular versendet',
        },
        {
          name: 'replyAddress',
          type: 'string',
          label: 'Antwortadresse',
          description:
            'Betrifft z.B. die Bestätigungsmail des Kontaktformulars die der Kunde erhält. Falls er in seinem E-Mail Client auf Antworten klickt, wird diese Adresse als Empfänger gesetzt.',
        },
      ],
    },
    {
      name: 'legalTexts',
      type: 'object',
      label: 'Rechtstexte',
      fields: [
        {
          name: 'imprint',
          type: 'object',
          label: 'Impressum',
          fields: [
            {
              name: 'imprintFetch',
              type: 'boolean',
              label: 'Impressum von eRecht24 laden',
            },
            {
              name: 'imprintAdditionalText',
              type: 'rich-text',
              label: 'Impressum',
              description:
                'Falls das Impressum von eRecht24 geladen wird, so wird dieser Textbereich unetrhalb der eRecht24 Ausgabe angezeigt',
            },
          ],
        },
        {
          name: 'privacyPolicy',
          type: 'object',
          label: 'Datenschutz',
          fields: [
            {
              name: 'privacyPolicyFetch',
              type: 'boolean',
              label: 'Datenschutzerklärung von eRecht24 laden',
            },
            {
              name: 'privacyPolicyAdditionalText',
              type: 'rich-text',
              label: 'Datenschutz',
              description:
                'Falls der Datenschutztext von eRecht24 geladen wird, so wird dieser Textbereich unetrhalb der eRecht24 Ausgabe angezeigt',
            },
          ],
        },
      ],
    },
    {
      name: 'siteFooter',
      type: 'object',
      label: 'Seiten Footer',
      fields: [
        {
          name: 'logo',
          type: 'image',
          label: 'Seiten Logo',
          description:
            'Falls gesetzt, überschreibt es die Ausgabe des standard Seiten Logos',
        },
      ],
    },
  ],
}
export default globalSettings
