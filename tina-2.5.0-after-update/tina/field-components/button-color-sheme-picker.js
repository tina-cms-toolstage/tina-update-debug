import * as React from 'react'
import { wrapFieldsWithMeta } from 'tinacms'

import globalSettings from '../../content/global-settings/global-settings.json'

export const colorOptions = []
export const inputStyles = {}

globalSettings.globalLayout?.buttonStyleSets &&
  globalSettings.globalLayout.buttonStyleSets.forEach(
    ({ name, backgroundColor, borderColor, textColor }) => {
      colorOptions.push(name)
      inputStyles[name] = {
        borderColor: borderColor ? borderColor : '#fff',
        backgroundColor: backgroundColor ? backgroundColor : 'transparent',
        color: textColor,
      }
    },
  )

export const ButtonColorShemePicker = wrapFieldsWithMeta(({ input }) => {
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
              key={'btn_color_scheme_picker' - i}
              style={{ ...inputStyles[color] }}
              className={`size-9 rounded-full border-2 text-2xl shadow-md ${
                input.value === color ? 'ring ring-blue-400 ring-offset-2' : ''
              }`}
              onClick={() => {
                input.onChange(color)
              }}>
              {'ッ'}
            </button>
          )
        })}
      </div>
    </>
  )
})
