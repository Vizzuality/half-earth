const richnessLegend = {
  mammals: {
    type: 'gradient',
    label: 'Mammals',
    color: 'rainbow',
    min: 1,
    max: 221,
    group: 'richness'
  },
  turtles: {
    type: 'gradient',
    label: 'Turtles',
    color: 'rainbow',
    min: 1,
    max: 22,
    group: 'richness'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    min: 1,
    max: 1010,
    group: 'richness'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    min: 1,
    max: 179,
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
    min: 1,
    max: 1416,
    color: 'rainbow',
    group: 'richness'
  }
}

const rarityLegend = {
  mammals: {
    type: 'gradient',
    label: 'Mammals',
    color: 'rainbow',
    min: '2.0e-8,',
    max: '1.8e-1',
    group: 'rarity'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    min: '1.2e-8,',
    max: '1.2e-6',
    group: 'rarity'
  },
  turtles: {
    type: 'gradient',
    label: 'Turtles',
    color: 'rainbow',
    min: '2.5e-8,',
    max: '2.7e-3',
    group: 'rarity'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    min: '7.2e-8,',
    max: '8.3e-2',
    group: 'rarity'
  },
  cacti: {
    type: 'gradient',
    label: 'Cacti',
    color: 'rainbow',
    min: '5.3e-8,',
    max: '5.2e-2',
    group: 'rarity'
  },
  conifers: {
    type: 'gradient',
    label: 'Conifers',
    color: 'rainbow',
    min: '2.9e-8,',
    max: '2.8e-2',
    group: 'rarity'
  },
  'all-taxa': {
    type: 'gradient',
    label: 'All Taxa',
    color: 'rainbow',
    min: '1.3e-8,',
    max: '5.9e-2',
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
  'prioritization-of-places': {
    type: 'gradient',
    label: 'Priority Places',
    color: 'priority',
    min: 0,
    max: 7793
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
  turtlesRichness: richnessLegend.conifers,
  'all-taxaRichness': richnessLegend['all-taxa'],
  mammalsRarity: rarityLegend.mammals,
  birdsRarity: rarityLegend.birds,
  amphibiansRarity: rarityLegend.amphibians,
  cactiRarity: rarityLegend.cacti,
  conifersRarity: rarityLegend.conifers,
  turtlesRarity: rarityLegend.turtles,
  'all-taxaRarity': rarityLegend['all-taxa']
}
