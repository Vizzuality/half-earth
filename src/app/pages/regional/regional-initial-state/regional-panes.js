import upperFirst from 'lodash/upperFirst'

const species = type => ({
  name: `Species ${upperFirst(type)}`,
  isOpen: true,
  layers: [
    { key: `birds:${type}`, label: 'Birds' },
    { key: `mammals:${type}`, label: 'Mammals' },
    { key: `amphibians:${type}`, label: 'Amphibians' }
  ],
  panes: [
    {
      name: 'Plants',
      isOpen: true,
      layers: [
        { key: `protea:${type}`, label: 'Protea' },
        { key: `restio:${type}`, label: 'Restio' }
      ]
    }
  ]
})

export default [
  {
    name: 'Conservation Management Types',
    isOpen: true,
    layers: [
      {
        key: 'community-based-conservation-areas',
        label: 'Community based conservation areas'
      },
      { key: 'private-reserves', label: 'Private reserves' },
      { key: 'protected-areas', label: 'Protected areas' }
    ]
  },
  species('richness'),
  species('rarity')
]
