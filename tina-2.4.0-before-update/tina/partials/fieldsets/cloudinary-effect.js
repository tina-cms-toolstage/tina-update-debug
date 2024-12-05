import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

const cloudinaryEffectOptions = [
  {
    name: 'effects',
    type: 'object',
    label: 'Korrekturen und Effekte',
    fields: [
      {
        name: 'autoColor',
        type: 'number',
        label: 'Auto Farbkorrektur',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='autoColor'
                  id='autoColor'
                  type='range'
                  min='0'
                  max='100'
                  step='25'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Angewandte Korrekur: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
      {
        name: 'autoContrast',
        type: 'number',
        label: 'Auto Kontrast',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='autoContrast'
                  id='autoContrast'
                  type='range'
                  min='0'
                  max='100'
                  step='25'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Angewandte Korrekur: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
      {
        name: 'autoBrightness',
        type: 'number',
        label: 'Auto Helligkeit',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='autoBrightness'
                  id='autoBrightness'
                  type='range'
                  min='0'
                  max='100'
                  step='25'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Angewandte Korrekur: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
      {
        name: 'improve',
        type: 'number',
        label: 'Auto Bildverbesserung',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='improve'
                  id='improve'
                  type='range'
                  min='0'
                  max='100'
                  step='25'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Angewandte Korrekur: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
      {
        name: 'sharpen',
        type: 'number',
        label: 'Schärfen',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='sharpen'
                  id='sharpen'
                  type='range'
                  min='0'
                  max='150'
                  step='25'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Angewandte Korrekur: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
      {
        name: 'gamma',
        type: 'number',
        label: 'Relative Helligkeit (Gamma)',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='gamma'
                  id='gamma'
                  type='range'
                  min='-50'
                  max='150'
                  step='25'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Angewandte Korrekur: {input.value ? input.value : '0'}%
              </div>
            )
          }),
        },
      },
      {
        name: 'redeye',
        type: 'boolean',
        label: 'Entferne Rote Augen',
      },
      {
        name: 'grayscale',
        type: 'boolean',
        label: 'Graustufen',
      },
      {
        name: 'sepia',
        type: 'boolean',
        label: 'Sepia',
      },
      {
        name: 'art',
        type: 'string',
        label: 'Kunstfilter',
        component: 'select',
        options: [
          {
            value: 'no_art',
            label: 'Kein Filter',
          },
          {
            value: 'al_dente',
            label: 'al_dente',
          },
          {
            value: 'athena',
            label: 'athena',
          },
          {
            value: 'audrey',
            label: 'audrey',
          },
          {
            value: 'aurora',
            label: 'aurora',
          },
          {
            value: 'daguerre',
            label: 'daguerre',
          },
          {
            value: 'eucalyptus',
            label: 'eucalyptus',
          },
          {
            value: 'fes',
            label: 'fes',
          },
          {
            value: 'frost',
            label: 'frost',
          },
          {
            value: 'hairspray',
            label: 'hairspray',
          },
          {
            value: 'hokusai',
            label: 'hokusai',
          },
          {
            value: 'incognito',
            label: 'incognito',
          },
          {
            value: 'linen',
            label: 'linen',
          },
          {
            value: 'peacock',
            label: 'peacock',
          },
          {
            value: 'peacock',
            label: 'peacock',
          },
          {
            value: 'primavera',
            label: 'primavera',
          },
          {
            value: 'quartz',
            label: 'quartz',
          },
          {
            value: 'red_rock',
            label: 'red_rock',
          },
          {
            value: 'refresh',
            label: 'refresh',
          },
          {
            value: 'sizzle',
            label: 'sizzle',
          },
          {
            value: 'sonnet',
            label: 'sonnet',
          },
          {
            value: 'ukulele',
            label: 'ukulele',
          },
          {
            value: 'zorro',
            label: 'zorro',
          },
        ],
      },
    ],
  },
]

const cloudinaryEffectOptionsDefaults = {
  effects: {
    autoColor: 0,
    autoContrast: 0,
    autoBrightness: 0,
    sharpen: 0,
    gamma: 0,
    redeye: false,
    grayscale: false,
    sepia: false,
    art: 'no_art',
    improve: 0,
  },
}

export { cloudinaryEffectOptions, cloudinaryEffectOptionsDefaults }
