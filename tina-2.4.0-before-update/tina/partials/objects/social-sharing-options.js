const socialSharingOptions = {
  name: 'socialSharingOptions',
  type: 'object',
  label: 'Social Sharing',
  fields: [
    {
      name: 'title',
      type: 'string',
      label: 'Titel',
      ui: {
        validate: (value, data) => {
          const lengthOfMetaDescription = value?.length || 0
          if (lengthOfMetaDescription >= 90) {
            return 'Der Titel sollte nicht mehr wie 90 Zeichen beinhalten'
          }
        },
      },
    },
    {
      name: 'description',
      type: 'string',
      label: 'Beschreibungstext',
      ui: {
        component: 'textarea',
        validate: (value, data) => {
          const lengthOfMetaDescription = value?.length || 0
          if (lengthOfMetaDescription >= 200) {
            return 'Der Beschreibungstext sollte weniger wie 200 Zeichen beinhalten'
          }
        },
      },
    },
    {
      name: 'image',
      type: 'image',
      label: 'Bild',
    },
  ],
}

export default socialSharingOptions
