const speciesSelector = selected => ({
  options: {
    birds: 'Birds',
    mammals: 'Mammals',
    // amphibians: 'Amphibians',
    protea: 'Protea',
    restio: 'Restio'
  },
  selected
});

const speciesSelections = type => ({
  birds: `birds:${type}`,
  mammals: `mammals:${type}`,
  // amphibians: `amphibians:${type}`,
  protea: `protea:${type}`,
  restio: `restio:${type}`
});

export default {
  'regional:1': {
    // layers: ['centroid-tests'],
    layers: [],
    selectionType: 'richness',
    selections: speciesSelections('richness'),
    selectors: { birds: speciesSelector('mammals') }
  },
  'regional:2': { layers: [ 'protected-areas' ] },
  'regional:3': { layers: [ 'conservation-areas', 'human-pressures' ] },
  'regional:4': { layers: [] }
};
