const blockOptionsPublishing = [
  {
    name: 'draft',
    type: 'boolean',
    label: 'Entwurf',
    required: true,
    description: 'Wenn aktiviert wird dieser Block nicht veröffentlicht',
  },
]

const blockOptionsPublishingDefaults = {
  draft: false,
}
export { blockOptionsPublishing, blockOptionsPublishingDefaults }
