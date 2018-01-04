export const speciesSelector = selected => ({
  options: {
    birds: 'Birds',
    mammals: 'Mammals',
    amphibians: 'Amphibians',
    cacti: 'Cacti',
    conifers: 'Conifers'
  },
  selected
})

export const speciesSelections = type => ({
  birds: `birds:${type}`,
  mammals: `mammals:${type}`,
  amphibians: `amphibians:${type}`,
  cacti: `cacti:${type}`,
  conifers: `conifers:${type}`
})

export default {
  'global:1': {
    layers: ['birds:richness'],
    selectionType: 'richness',
    selections: speciesSelections('richness'),
    selectors: {
      birds: speciesSelector('birds')
    }
  },
  'global:2': {
    layers: []
  },
  'global:3': {
    layers: []
  },
  'global:4': {
    layers: []
  },
  'global:5': {
    layers: []
  }
}
