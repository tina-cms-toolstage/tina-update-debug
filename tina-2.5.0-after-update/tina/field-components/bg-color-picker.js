import * as React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

import globalSettings from '../../content/global-settings/global-settings.json'
import { getUniqueListBy } from '../../lib/helpers/array'

export const colorOptions = ['transparent', 'white', 'primary', 'secondary']

const inputClasses = {
  transparent: {
    backgroundColor: 'transparent',
    background:
      'linear-gradient(to right bottom, rgba(255,255,255,1) 47%, rgba(255,0,0,1) 50%, rgba(255,255,255,1) 53%)',
  },
  white: {
    backgroundColor: '#ffffff',
  },
  primary: {
    backgroundColor: globalSettings.globalLayout.primaryColor,
  },
  secondary: {
    backgroundColor: globalSettings.globalLayout.secondaryColor,
  },
}

//get additional dynamic colors from tina config
let additional = {}
globalSettings.globalLayout?.additionalColors &&
  getUniqueListBy(
    globalSettings.globalLayout.additionalColors,
    'colorName',
  ).forEach(({ colorName, colorValue }, i) => {
    colorOptions.push(colorName)
    inputClasses[colorName] = { backgroundColor: colorValue }
  })

globalSettings.globalLayout?.advancedBackgrounds &&
  getUniqueListBy(
    globalSettings.globalLayout.advancedBackgrounds,
    'advancedBackgroundName',
  ).forEach(({ advancedBackgroundName, advancedBackgroundLayers }, i) => {
    let cssBg = ''
    let ruleIndex = 0
    advancedBackgroundLayers &&
      advancedBackgroundLayers.forEach((layer, index) => {
        if (layer._template === 'imageLayerTemplate') return
        const seperator = ruleIndex > 0 ? ', ' : ''
        layer?.colorLayer && (cssBg += seperator + layer.colorLayer)
        ruleIndex++
      })
    colorOptions.push(advancedBackgroundName)
    inputClasses[advancedBackgroundName] = { background: cssBg }
  })

export const BgColorPicker = wrapFieldsWithMeta(({ input }) => {
  return (
    <>
      <input
        type='text'
        id={input.name}
        className='hidden'
        {...input}
      />
      <div className='flex flex-wrap gap-2'>
        {colorOptions.map((color, i) => {
          return (
            <button
              key={'bg-color-picker' - i}
              style={{ ...inputClasses[color] }}
              className={`size-9 rounded-full border-2 border-white shadow-md ${
                input.value === color ? 'ring ring-blue-400 ring-offset-2' : ''
              }`}
              onClick={() => {
                input.onChange(color)
              }}></button>
          )
        })}
      </div>
    </>
  )
})
