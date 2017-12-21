import { utils } from 'pages/map'
const { speciesSelector, speciesSelections } = utils

export default {
  'regional:1': {
    layers: ['dark:basemap'],
    selectionType: 'richness',
    selections: speciesSelections('richness'),
    selectors: {
      birds: speciesSelector('mammals')
    }
  },
  'regional:2': {
    layers: ['dark:basemap', 'protected-areas'],
    selections: speciesSelections('pressures'),
    selectors: {
      anthropogenic: speciesSelector('birds')
    }
  },
  'regional:3': {
    layers: ['dark:basemap']
  }
}
