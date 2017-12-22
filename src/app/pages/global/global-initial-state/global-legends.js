export default {
  'key-biodiversity-areas': {
    type: 'simple',
    label: 'Key Biodiversity Areas',
    color: 'green'
  },
  'road-building': {
    type: 'simple',
    label: 'Roads',
    color: 'red'
  },
  'private-reserves': {
    type: 'simple',
    label: 'Private Reserves',
    color: 'orange'
  },
  'urban-development': {
    type: 'simple',
    label: 'Urban Development',
    color: 'brown'
  },
  'protected-areas': {
    type: 'simple',
    label: 'Protected Areas',
    color: 'violet'
  },
  'pa-scenario': {
    type: 'multiple',
    elements: [
      {
        label: 'Priority regions for conservation',
        color: 'yellow',
        type: 'simple'
      },
      {
        label: 'Regions with >75% current reserve coverage',
        color: 'violet',
        type: 'simple'
      }
    ]
  },
  mammalsRichness: {
    type: 'gradient',
    label: 'Mammals',
    color: 'purple',
    min: 1,
    max: 244
  },
  birdsRichness: {
    type: 'gradient',
    label: 'Birds',
    color: 'aqua',
    min: 1,
    max: 1020
  },
  amphibiansRichness: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'green',
    min: 1,
    max: 180
  },
  cactiRichness: {
    type: 'gradient',
    label: 'Cacti',
    color: 'orange',
    min: 1,
    max: 93
  },
  conifersRichness: {
    type: 'gradient',
    label: 'Conifers',
    color: 'orange2',
    min: 1,
    max: 49
  },
  'all-taxaRichness': {
    type: 'gradient',
    label: 'All Taxa',
    color: 'blue'
  }
}
