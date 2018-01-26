import React from 'react'

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
    min: () => (
      <span>
        2.0<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        1.8<em>e-1</em>
      </span>
    ),
    group: 'rarity'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    min: () => (
      <span>
        1.2<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        1.2<em>e-6</em>
      </span>
    ),
    group: 'rarity'
  },
  turtles: {
    type: 'gradient',
    label: 'Turtles',
    color: 'rainbow',
    min: () => (
      <span>
        2.5<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        2.7<em>e-3</em>
      </span>
    ),
    group: 'rarity'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    min: () => (
      <span>
        7.2<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        8.3<em>e-2</em>
      </span>
    ),
    group: 'rarity'
  },
  cacti: {
    type: 'gradient',
    label: 'Cacti',
    color: 'rainbow',
    min: () => (
      <span>
        5.3<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        5.2<em>e-2</em>
      </span>
    ),
    group: 'rarity'
  },
  conifers: {
    type: 'gradient',
    label: 'Conifers',
    color: 'rainbow',
    min: () => (
      <span>
        2.9<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        2.8<em>e-2</em>
      </span>
    ),
    group: 'rarity'
  },
  'all-taxa': {
    type: 'gradient',
    label: 'All Taxa',
    color: 'rainbow',
    min: () => (
      <span>
        1.3<em>e-8</em>
      </span>
    ),
    max: () => (
      <span>
        5.9<em>e-2</em>
      </span>
    ),
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
  'conservation-areas': {
    type: 'simple',
    label: 'Conservation Areas',
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
    max: 100
  },
  mammalsRichness: richnessLegend.mammals,
  birdsRichness: richnessLegend.birds,
  amphibiansRichness: richnessLegend.amphibians,
  cactiRichness: richnessLegend.cacti,
  conifersRichness: richnessLegend.conifers,
  turtlesRichness: richnessLegend.turtles,
  'all-taxaRichness': richnessLegend['all-taxa'],
  mammalsRarity: rarityLegend.mammals,
  birdsRarity: rarityLegend.birds,
  amphibiansRarity: rarityLegend.amphibians,
  cactiRarity: rarityLegend.cacti,
  conifersRarity: rarityLegend.conifers,
  turtlesRarity: rarityLegend.turtles,
  'all-taxaRarity': rarityLegend['all-taxa']
}
