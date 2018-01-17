const richnessLegend = {
  mammals: {
    type: 'gradient',
    label: 'Mammals',
    color: 'rainbow',
    min: 1,
    max: 244,
    group: 'richness'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    min: 1,
    max: 1020,
    group: 'richness'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    min: 1,
    max: 180,
    group: 'richness'
  },
  cacti: {
    type: 'gradient',
    label: 'Cacti',
    color: 'rainbow',
    min: 1,
    max: 93,
    group: 'richness'
  },
  conifers: {
    type: 'gradient',
    label: 'Conifers',
    color: 'rainbow',
    min: 1,
    max: 49,
    group: 'richness'
  },
  'all-taxa': {
    type: 'gradient',
    label: 'All Taxa',
    color: 'rainbow',
    group: 'richness'
  }
}

const rarityLegend = {
  mammals: {
    type: 'gradient',
    label: 'Mammals',
    color: 'rainbow',
    min: 1,
    max: 244,
    group: 'rarity'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    min: 1,
    max: 1020,
    group: 'rarity'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    min: 1,
    max: 180,
    group: 'rarity'
  },
  cacti: {
    type: 'gradient',
    label: 'Cacti',
    color: 'rainbow',
    min: 1,
    max: 93,
    group: 'rarity'
  },
  conifers: {
    type: 'gradient',
    label: 'Conifers',
    color: 'rainbow',
    min: 1,
    max: 49,
    group: 'rarity'
  },
  'all-taxa': {
    type: 'gradient',
    label: 'All Taxa',
    color: 'rainbow',
    group: 'rarity'
  }
}

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
  'human-pressures': {
    type: 'gradient',
    label: 'Human Pressures',
    color: 'black',
    min: 0,
    max: 100
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
  mammalsRichness: richnessLegend.mammals,
  birdsRichness: richnessLegend.birds,
  amphibiansRichness: richnessLegend.amphibians,
  cactiRichness: richnessLegend.cacti,
  conifersRichness: richnessLegend.conifers,
  'all-taxaRichness': richnessLegend['all-taxa'],
  mammalsRarity: rarityLegend.mammals,
  birdsRarity: rarityLegend.birds,
  amphibiansRarity: rarityLegend.amphibians,
  cactiRarity: rarityLegend.cacti,
  conifersRarity: rarityLegend.conifers,
  'all-taxaRarity': rarityLegend['all-taxa']
}
