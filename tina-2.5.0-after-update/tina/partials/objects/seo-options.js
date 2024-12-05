const seoOptions = {
  name: 'seo',
  type: 'object',
  label: 'SEO',
  fields: [
    {
      name: 'metaTitle',
      type: 'string',
      label: 'Seitentitel',
    },
    {
      name: 'metaDescription',
      type: 'string',
      label: 'Meta Beschreibung',
      ui: {
        component: 'textarea',
        description:
          'Die Meta Beschreibung sollte zwischen 50 und 160 Zeichen beinhalten',
        validate: (value, data) => {
          const lengthOfMetaDescription = value?.length || 0
          if (lengthOfMetaDescription >= 160) {
            return 'Die Meta Beschreibung sollte weniger wie 160 Zeichen beinhalten'
          }
          if (lengthOfMetaDescription >= 1 && lengthOfMetaDescription <= 50) {
            return 'Die Meta Beschreibung sollte mehr wie 50 Zeichen beinhalten'
          }
        },
      },
    },
    {
      name: 'metaKeywords',
      label: 'Meta Keywords',
      type: 'object',
      fields: [
        {
          name: 'metaKeywordList',
          type: 'string',
          label: 'Keyword Liste',
          description: 'Ein Keyword pro Eintrag/Zeile',
          list: true,
        },
      ],
      ui: {},
    },
  ],
}

export default seoOptions
