import * as React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

import globalSettings from '../../content/global-settings/global-settings.json'

export const colorOptions = ['default']

export const inputStyles = {
  default: {
    background:
      'linear-gradient(to bottom, ' +
      globalSettings.globalLayout.headingColor +
      ' 0%,' +
      globalSettings.globalLayout.headingColor +
      ' 50%, ' +
      globalSettings.globalLayout.bodyColor +
      ' 50%, ' +
      globalSettings.globalLayout.bodyColor +
      ' 100%)',
  },
}
globalSettings.globalLayout?.textStyleSets &&
  globalSettings.globalLayout.textStyleSets.forEach(
    ({ name, headingColor, bodyColor }) => {
      colorOptions.push(name)
      inputStyles[name] = {
        background:
          'linear-gradient(to bottom, ' +
          headingColor +
          ' 0%,' +
          headingColor +
          ' 50%, ' +
          bodyColor +
          ' 50%, ' +
          bodyColor +
          ' 100%)',
      }
    },
  )

export const TextColorShemePicker = wrapFieldsWithMeta(({ input }) => {
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
              key={'txt_color_sheme_picker' - i}
              style={{ ...inputStyles[color] }}
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
