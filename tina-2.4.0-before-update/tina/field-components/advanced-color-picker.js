import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import * as React from 'react'
import { useEffect, useState } from 'react'
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker'
import { Button, wrapFieldsWithMeta } from 'tinacms'

import globalSettings from '../../content/global-settings/global-settings.json'

export const colorPresets = [
  globalSettings.globalLayout.primaryColor,
  globalSettings.globalLayout.secondaryColor,
]

globalSettings.globalLayout?.additionalColors &&
  globalSettings.globalLayout.additionalColors.forEach(({ colorValue }) => {
    colorPresets.push(colorValue)
  })

export const AdvancedColorPicker = wrapFieldsWithMeta(({ field, input }) => {
  const [color, setColor] = useState(input?.value ? input.value : '#ffffff')
  const { isGradient, valueToHex, rgbaArr } = useColorPicker(color, setColor)
  const [textColor, setTextColor] = useState(getContrastColor())

  function getContrastColor() {
    const brightness = Math.round(
      (parseInt(rgbaArr[0]) * 299 +
        parseInt(rgbaArr[1]) * 587 +
        parseInt(rgbaArr[2]) * 114) /
        1000,
    )
    return brightness > 125 || input.value === 'transparent'
      ? 'text-black'
      : 'text-white'
  }

  //handle value change
  const handleChange = (val) => {
    if (!val) return

    setColor(val)
    setTextColor(getContrastColor())
  }

  //set input value
  useEffect(() => {
    if (isGradient) {
      input.onChange(color)
    } else {
      if (rgbaArr[3] === 0) {
        input.onChange('transparent')
      } else {
        const val = rgbaArr[3] === 1 ? valueToHex() : color
        input.onChange(val)
      }
    }
  }, [color, input, valueToHex, isGradient, rgbaArr])

  // convert rgb to hex
  const rgbToHex = (r, g, b) => {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
  }

  return (
    <div className='relative z-[1000]'>
      <Popover>
        {({ open }) => (
          <>
            <PopoverButton as={'div'}>
              <div
                className={`flex min-h-11 w-full max-w-full cursor-pointer items-center justify-center rounded-3xl px-4 py-3 text-sm shadow-[0_2px_3px_rgba(0,0,0,0.12)]`}
                size='custom'
                style={{ background: color }}>
                <span
                  className={`inline-flex items-center justify-center font-bold ${textColor}`}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='mr-2 size-4'
                    fill='currentColor'
                    viewBox='0 0 512 512'>
                    <path d='M377 279l1-1L482.2 173.8c19.1-19.1 29.8-45 29.8-72C512 45.6 466.4 0 410.2 0c-27 0-52.9 10.7-72 29.8L233.9 134.1l-1 1-8-8-17-17L174.1 144l17 17L351 321l17 17L401.9 304l-17-17-8-8zm-94.5 18.6L148.1 432 80 432l0-68.1L214.3 229.5l-33.9-33.9L32 344l0 88L0 472l40 40 40-32 88 0L316.4 331.6l-33.9-33.9zM448.2 139.9L344 244.1 267.9 168 372.1 63.8C382.2 53.7 395.9 48 410.2 48c29.7 0 53.8 24.1 53.8 53.8c0 14.3-5.7 28-15.8 38.1z' />
                  </svg>
                  Farbwähler
                </span>
              </div>
            </PopoverButton>
            <PopoverPanel
              transition
              //anchor='bottom center'
              className='z-[9999] mt-4 flex origin-top gap-2 rounded-lg bg-[#202020] p-2 shadow-lg transition duration-200 ease-out [--anchor-gap:12px] data-[closed]:scale-95 data-[closed]:opacity-0'>
              {({ close }) => (
                <>
                  <div className='flex'>
                    <ColorPicker
                      value={color}
                      width={290}
                      height={200}
                      disbaleDarkMode={true}
                      hideEyeDrop
                      hideAdvancedSliders
                      hideColorGuide
                      hideInputType
                      hideOpacity={field?.hideOpacity}
                      hideControls={field?.hideControls}
                      presets={colorPresets}
                      onChange={(val) => {
                        handleChange(val)
                      }}
                    />
                  </div>
                  <div
                    style={{ background: color }}
                    className='flex grow items-end justify-end rounded-lg'>
                    <input
                      id={input.name}
                      className='block w-10/12 resize-y rounded-br-lg rounded-tl-lg bg-[rgba(0,0,0,.65)] px-4 py-2 text-sm text-white'
                      {...input}
                      onChange={(event) => {
                        console.log(event.target.value)
                        handleChange(event.target.value)
                      }}
                    />
                  </div>
                </>
              )}
            </PopoverPanel>
          </>
        )}
      </Popover>
    </div>
  )
})
