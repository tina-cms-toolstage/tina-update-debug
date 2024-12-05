const linkFieldset = [
  {
    name: 'linkText',
    type: 'string',
    label: 'Text',
  },
  {
    name: 'linkHref',
    type: 'string',
    label: 'Link',
  },
  {
    name: 'linkType',
    type: 'string',
    label: 'Link Typ',
    component: 'select',
    options: [
      {
        value: 'standard',
        label: 'Standard Link',
      },
      {
        value: 'tel',
        label: 'Telefonnummer',
      },
      {
        value: 'mailto',
        label: 'E-Mail Link',
      },
    ],
  },
  {
    name: 'linkTarget',
    type: 'string',
    label: 'Link Typ',
    component: 'select',
    options: [
      {
        value: '_self',
        label: 'Gleiches Fenster / Tab',
      },
      {
        value: '_blank',
        label: 'Neues Fenster / Tab',
      },
    ],
  },
]

const linkFieldsetDefaults = {
  linkText: 'Klick mich',
  linkHref: '#',
  linkType: 'standard',
  linkTarget: '_self',
}

export { linkFieldset, linkFieldsetDefaults }
