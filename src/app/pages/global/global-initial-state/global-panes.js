import upperFirst from 'lodash/upperFirst'

const species = type => ({
  name: `Species ${upperFirst(type)}`,
  key: `species-${type}`,
  isOpen: true,
  layers: [
    { key: `birds:${type}`, label: 'Birds' },
    { key: `mammals:${type}`, label: 'Mammals' },
    { key: `amphibians:${type}`, label: 'Amphibians' },
    { key: `turtles:${type}`, label: 'Turtles' }
  ],
  panes: [
    {
      name: 'Plants',
      key: `species-${type}-plants`,
      isOpen: true,
      layers: [
        { key: `cacti:${type}`, label: 'Cacti' },
        { key: `conifers:${type}`, label: 'Conifers' }
      ]
    }
  ]
})

export default [
  {
    name: 'Land cover',
    key: 'land-cover',
    isOpen: true,
    layers: [
      {
        key: 'human-pressures',
        label: 'Human pressures'
      }
    ]
  },
  {
    name: 'Conservation Management',
    key: 'conservation-management',
    isOpen: true,
    layers: [{ key: 'protected-areas', label: 'Protected areas' }]
  },
  {
    name: 'Species information',
    key: 'species-information',
    isOpen: true,
    panes: [species('richness'), species('rarity')]
  }
]
