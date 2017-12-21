import { utils } from 'pages/map'
const { speciesSelector, speciesSelections } = utils

export default {
  'regional:1': {
    layers: [],
    selectionType: 'richness',
    selections: speciesSelections('richness'),
    selectors: {
      birds: speciesSelector('mammals')
    }
  },
  'regional:2': {
    layers: [],
    selections: speciesSelections('pressures'),
    selectors: {
      anthropogenic: speciesSelector('birds')
    }
  },
  'regional:3': {
    layers: []
  }
}
