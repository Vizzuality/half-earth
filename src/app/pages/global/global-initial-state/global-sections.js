export const speciesSelector = selected => ({
  options: {
    mammals: 'Mammals',
    amphibians: 'Amphibians',
    cacti: 'Cacti',
    birds: 'Birds',
    conifers: 'Conifers',
    turtles: 'Turtles'
  },
  selected
})
export const speciesSelections = type => ({
  mammals: `mammals:${type}`,
  amphibians: `amphibians:${type}`,
  cacti: `cacti:${type}`,
  birds: `birds:${type}`,
  conifers: `conifers:${type}`,
  turtles: `turtles:${type}`
})

export const allTaxaSelector = selected => ({
  options: {
    'all-taxa': 'All taxa'
  },
  selected
})

export const allTaxaSelections = type => ({
  'all-taxa': `all-taxa:${type}`
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
    selectionType: 'richness',
    layers: ['all-taxa:richness'],
    selections: allTaxaSelections('richness'),
    selectors: {
      birds: allTaxaSelector('all-taxa')
    }
  },
  'global:3': {
    layers: ['human-pressures']
  },
  'global:4': {
    layers: ['human-pressures', 'prioritization-of-places-15']
  }
}
