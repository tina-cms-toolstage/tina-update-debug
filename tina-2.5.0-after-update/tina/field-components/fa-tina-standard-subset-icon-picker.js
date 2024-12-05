import { all } from '@awesome.me/kit-5aabe2e567/icons'
import { faBan, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import * as React from 'react'
import { Button, wrapFieldsWithMeta } from 'tinacms'

import { SubsetIconOptions as IconOptions } from '../../components/ui/font-awesome/fa-tina-standard-subset'

const parseIconName = (name) => {
  const splitName = name.split(/(?=[A-Z])/)
  if (splitName.length > 1) {
    return splitName.slice(1).join(' ')
  } else {
    return name
  }
}

export const FaTinaStandardSubsetIconPicker = wrapFieldsWithMeta(
  ({ input }) => {
    const [filter, setFilter] = React.useState('')
    /*
    const filteredBlocks = React.useMemo(() => {
      return Object.keys(IconOptions).filter((name) => {
        return name.toLowerCase().includes(filter.toLowerCase())
      })
    }, [filter])
    */

    const filteredBlocks = React.useMemo(() => {
      return Object.keys(IconOptions).filter((name) => {
        if (
          IconOptions[name].iconName
            .toLowerCase()
            .includes(filter.toLowerCase())
        )
          return name
      })
    }, [filter])

    const inputLabel = Object.keys(IconOptions).includes(input.value)
      ? parseIconName(IconOptions[input.value].iconName)
      : 'Icon Auswahl'
    //const InputIcon = IconOptions[input.value] ? IconOptions[input.value] : null

    const InputIcon = IconOptions[input.value] ? (
      <FontAwesomeIcon icon={IconOptions[input.value]} />
    ) : null

    return (
      <div className='relative z-[1000]'>
        <input
          type='text'
          id={input.name}
          className='hidden'
          {...input}
        />
        <Popover>
          {({ open }) => (
            <>
              <PopoverButton as={'span'}>
                <Button
                  className={`h-11 px-4 text-sm ${InputIcon ? 'h-11' : 'h-10'}`}
                  size='custom'
                  rounded='full'
                  variant={open ? 'secondary' : 'white'}>
                  {InputIcon && (
                    <span className='mr-1 inline-block h-auto w-7 fill-current text-blue-500'>
                      <FontAwesomeIcon icon={IconOptions[input.value]} />
                    </span>
                  )}
                  {inputLabel}
                  {!InputIcon && (
                    <span className='ml-1 inline-block fill-current opacity-70'>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  )}
                </Button>
              </PopoverButton>
              <div
                className='absolute -bottom-2 left-0 w-full min-w-[192px] max-w-2xl translate-y-full'
                style={{ zIndex: 1000 }}>
                <Transition
                  enter='transition duration-150 ease-out'
                  enterFrom='transform opacity-0 -translate-y-2'
                  enterTo='transform opacity-100 translate-y-0'
                  leave='transition duration-75 ease-in'
                  leaveFrom='transform opacity-100 translate-y-0'
                  leaveTo='transform opacity-0 -translate-y-2'>
                  <PopoverPanel className='border-gray-150 relative z-50 overflow-hidden rounded-lg border bg-white shadow-lg'>
                    {({ close }) => (
                      <div className='flex size-full max-h-96 flex-col'>
                        <div className='z-10 border-b border-gray-100 bg-gray-50 p-2 shadow-sm'>
                          <input
                            type='text'
                            className='block w-full rounded-sm border border-gray-100 bg-white px-2.5 py-1.5 text-sm shadow-inner placeholder:text-gray-200'
                            onClick={(event) => {
                              event.stopPropagation()
                              event.preventDefault()
                            }}
                            value={filter}
                            onChange={(event) => {
                              setFilter(event.target.value)
                            }}
                            placeholder='Filter...'
                          />
                        </div>
                        {filteredBlocks.length === 0 && (
                          <span className='relative bg-gray-50 px-2 py-3 text-center text-xs italic text-gray-300'>
                            Keine passenden Icons
                          </span>
                        )}
                        {filteredBlocks.length > 0 && (
                          <div className='grid w-full auto-rows-auto grid-cols-6 overflow-y-auto p-2'>
                            <button
                              className='relative flex-1 rounded-lg px-3 py-2 text-center text-xs outline-none transition-all duration-150 ease-out hover:bg-gray-50 hover:text-blue-500 focus:bg-gray-50 focus:text-blue-500'
                              key={'clear-input'}
                              onClick={() => {
                                input.onChange('')
                                setFilter('')
                                close()
                              }}>
                              <FontAwesomeIcon
                                className='h-auto w-6 text-gray-200'
                                icon={faBan}
                              />
                            </button>
                            {filteredBlocks.map((name) => {
                              //console.log(IconOptions[name])
                              //const IconSVG = IconOptions[name]
                              return (
                                <button
                                  className='relative flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-center text-xs outline-none transition-all duration-150 ease-out hover:bg-gray-50 hover:text-blue-500 focus:bg-gray-50 focus:text-blue-500'
                                  key={name}
                                  onClick={() => {
                                    input.onChange(name)
                                    setFilter('')
                                    close()
                                  }}>
                                  <FontAwesomeIcon icon={IconOptions[name]} />
                                </button>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </PopoverPanel>
                </Transition>
              </div>
            </>
          )}
        </Popover>
      </div>
    )
  },
)
