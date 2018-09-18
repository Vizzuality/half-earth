import upperFirst from 'lodash/upperFirst';

const species = type => ({
  name: `Species ${upperFirst(type)}`,
  key: `species-${type}`,
  isOpen: true,
  layers: [
    { key: `birds:${type}`, label: 'Birds' },
    { key: `mammals:${type}`, label: 'Mammals' },
    { key: `amphibians:${type}`, label: 'Amphibians' }
  ],
  panes: [
    {
      name: 'Plants',
      key: `species-${type}-plants`,
      isOpen: true,
      layers: [ { key: `protea:${type}`, label: 'Protea' }, { key: `restio:${type}`, label: 'Restio' } ]
    }
  ]
});

export default [
  species('richness'),
  species('rarity'),
  {
    name: 'Conservation Management Types',
    key: 'conservation-management-types',
    isOpen: true,
    layers: [
      { key: 'community-based-conservation-areas', label: 'Community based conservation areas' },
      { key: 'private-reserves', label: 'Private reserves' },
      { key: 'protected-areas', label: 'Protected areas' },
      { key: 'human-pressures', label: 'Human pressures' }
    ]
  },
  { name: 'Land Use', key: 'land-use', isOpen: true, layers: [ { key: 'human-pressures', label: 'Human pressures' } ] }
];
