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
    layers: ['protected-areas']
  },
  'regional:3': {
    layers: []
  }
}
