import { ButtonColorShemePicker } from '../../field-components/button-color-sheme-picker'
import { FaTinaStandardSubsetIconPicker } from '../../field-components/fa-tina-standard-subset-icon-picker'
import {
  linkFieldset,
  linkFieldsetDefaults,
} from '../../partials/fieldsets/link-fieldset'

const button = {
  name: 'button',
  label: 'Button',
  fields: [
    ...linkFieldset,
    {
      name: 'faIcon',
      type: 'string',
      label: 'Icon',
      ui: {
        component: FaTinaStandardSubsetIconPicker,
      },
    },
    {
      name: 'colorScheme',
      type: 'string',
      label: 'Button Farbsatz',
      required: true,
      ui: {
        component: ButtonColorShemePicker,
      },
    },
    {
      name: 'size',
      type: 'string',
      label: 'Größe',
      options: [
        { label: 'Klein', value: 'small' },
        { label: 'Standard', value: 'medium' },
        { label: 'Groß', value: 'large' },
      ],
    },
  ],
  ui: {
    defaultItem: {
      ...linkFieldsetDefaults,
      colorScheme: 'standard',
      size: 'medium',
    },
    itemProps: (item) => {
      // Field values are accessed by item?.<Field name>
      return {
        label: item?.linkText,
      }
    },
  },
}

export default button
