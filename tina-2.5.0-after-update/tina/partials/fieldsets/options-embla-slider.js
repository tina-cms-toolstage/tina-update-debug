import React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

import { ButtonColorShemePicker } from '../../field-components/button-color-sheme-picker'

// Configuration Option of Embla Carousel
const emblaOptions = [
  {
    name: 'emblaOptions',
    type: 'object',
    label: 'Slider Einstellungen',
    fields: [
      {
        name: 'loop',
        type: 'boolean',
        label: 'Loop',
        description: 'Sollen die Items endlos wiederholen?',
      },
      {
        name: 'slidesToScroll',
        type: 'string',
        label: 'Anzahl weitergeschalteter Slides',
        description:
          'Wieviele Slides sollen auf eimnal weitergeschaltet werden.',
        component: 'select',
        options: [
          {
            value: '1',
            label: 'Ein Slide',
          },
          {
            value: 'auto',
            label: 'Anzahl angezeigter Slides',
          },
        ],
      },
      {
        name: 'duration',
        type: 'number',
        label: 'Animationsdauer',
        description: 'Slide Dauer bei Interaktionen (nicht Autoplay)',
        ui: {
          parse: (val) => Number(val),
          component: wrapFieldsWithMeta(({ field, input, meta }) => {
            return (
              <div>
                <input
                  name='duration'
                  id='duration'
                  type='range'
                  min='20'
                  max='60'
                  step='5'
                  // This will pass along props.input.onChange to set our form values as this input changes.
                  {...input}
                />
                <br />
                Ausgewählte Dauer: {input.value ? input.value : '0'}
              </div>
            )
          }),
        },
      },
      {
        name: 'containScroll',
        type: 'string',
        label: 'containScroll',
        component: 'select',
        options: [
          {
            value: 'false',
            label: 'false',
          },
          {
            value: 'trimSnaps',
            label: 'trimSnaps',
          },
          {
            value: 'keepSnaps',
            label: 'keepSnaps',
          },
        ],
      },
      {
        name: 'dragFree',
        type: 'boolean',
        label: 'Freies Scrollen',
      },
      {
        name: 'controls',
        type: 'object',
        label: 'Navigation',
        fields: [
          {
            name: 'ctrlColorScheme',
            type: 'string',
            label: 'Navigation Farbsatz',
            required: true,
            ui: {
              component: ButtonColorShemePicker,
            },
          },
          {
            name: 'ctrlPrevNext',
            type: 'boolean',
            label: 'Vor/Zurück Buttons',
          },
          {
            name: 'ctrlDotNav',
            type: 'boolean',
            label: 'Indikator Buttons',
          },
          {
            name: 'ctrlStartStop',
            type: 'boolean',
            label: 'Start/Stop Buttons',
          },
          {
            name: 'ctrlSizing',
            type: 'string',
            label: 'Button Größen',
            component: 'select',
            options: [
              {
                value: 'small',
                label: 'Klein',
              },
              {
                value: 'medium',
                label: 'Medium',
              },
              {
                value: 'large',
                label: 'Groß',
              },
            ],
          },
        ],
      },
      {
        name: 'automation',
        type: 'string',
        label: 'Automation',
        component: 'select',
        options: [
          {
            value: 'false',
            label: 'Keine Automatisierung',
          },
          {
            value: 'autoplay',
            label: 'Auto Play',
          },
          {
            value: 'autoscroll',
            label: 'Auto Scroll',
          },
        ],
      },
      {
        name: 'autoplay',
        type: 'object',
        label: 'Auto Play Optionen',
        description: 'Automatische Weiterschaltung',
        fields: [
          {
            name: 'playOnInit',
            type: 'boolean',
            label: 'Bei Seiteninitialisierung starten',
          },
          {
            name: 'delay',
            type: 'number',
            label: 'Geschwindigkeit',
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta(({ field, input, meta }) => {
                return (
                  <div>
                    <input
                      name='delay'
                      id='delay'
                      type='range'
                      min='1000'
                      max='10000'
                      step='500'
                      // This will pass along props.input.onChange to set our form values as this input changes.
                      {...input}
                    />
                    <br />
                    Geschwindigkeit: {input.value ? input.value : '0'} ms
                  </div>
                )
              }),
            },
          },
          {
            name: 'stopOnInteraction',
            type: 'boolean',
            label: 'Bei Interaktion stoppen',
          },
          {
            name: 'stopOnMouseEnter',
            type: 'boolean',
            label: 'Bei Mauseintritt stoppen',
          },
          {
            name: 'stopOnFocusIn',
            type: 'boolean',
            label: 'Bei Focus stoppen',
          },
          {
            name: 'stopOnLastSnap',
            type: 'boolean',
            label: 'Bei letztem Slide stoppen',
          },
        ],
      },
      {
        name: 'autoscroll',
        type: 'object',
        label: 'Auto Scroll Optionen',
        description: 'Automatisches Scrollen',
        fields: [
          {
            name: 'playOnInit',
            type: 'boolean',
            label: 'Bei Seiteninitialisierung starten',
          },
          {
            name: 'speed',
            type: 'number',
            label: 'Scroll Geschwindigkeit',
            description: 'Scroll Geschwindigkeit in Pixeln pro Frame',
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta(({ field, input, meta }) => {
                return (
                  <div>
                    <input
                      name='speed'
                      id='speed'
                      type='range'
                      min='1'
                      max='10'
                      step='1'
                      // This will pass along props.input.onChange to set our form values as this input changes.
                      {...input}
                    />
                    <br />
                    Geschwindigkeit: {input.value ? input.value : '0'} Px pro
                    Frame
                  </div>
                )
              }),
            },
          },
          {
            name: 'startDelay',
            type: 'number',
            label: 'Start Verzögerung',
            ui: {
              parse: (val) => Number(val),
              component: wrapFieldsWithMeta(({ field, input, meta }) => {
                return (
                  <div>
                    <input
                      name='startDelay'
                      id='startDelay'
                      type='range'
                      min='100'
                      max='10000'
                      step='100'
                      // This will pass along props.input.onChange to set our form values as this input changes.
                      {...input}
                    />
                    <br />
                    Start Verzögerung: {input.value ? input.value : '0'} ms
                  </div>
                )
              }),
            },
          },
          {
            name: 'stopOnInteraction',
            type: 'boolean',
            label: 'Bei Interaktion stoppen',
          },
          {
            name: 'stopOnMouseEnter',
            type: 'boolean',
            label: 'Bei Mauseintritt stoppen',
          },
          {
            name: 'stopOnFocusIn',
            type: 'boolean',
            label: 'Bei Focus stoppen',
          },
        ],
      },
    ],
  },
]

const emblaOptionsDefaults = {
  emblaOptions: {
    loop: true,
    slidesToScroll: '1',
    duration: 25,
    containScroll: 'trimSnaps',
    dragFree: false,
    controls: {
      ctrlColorScheme: 'standard',
      ctrlPrevNext: true,
      ctrlDotNav: true,
      ctrlStartStop: true,
      ctrlSizing: 'medium',
    },
    automation: 'autoplay',
    autoplay: {
      playOnInit: true,
      delay: 4000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: true,
      stopOnLastSnap: false,
    },
    autoscroll: {
      playOnInit: true,
      speed: 2,
      startDelay: 1000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
      stopOnFocusIn: true,
    },
  },
}

export { emblaOptions, emblaOptionsDefaults }
