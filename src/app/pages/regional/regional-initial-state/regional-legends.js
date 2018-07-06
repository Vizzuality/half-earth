const richnessLegend = {
  mammals: {
    type: 'gradient',
    label: 'Mammals',
    color: 'rainbow',
    size: 'big',
    min: 8,
    max: 49,
    group: 'richness'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    size: 'big',
    min: 1,
    max: 380,
    group: 'richness'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    size: 'big',
    min: 3,
    max: 25,
    group: 'richness'
  },
  restio: {
    type: 'gradient',
    label: 'Restio',
    color: 'rainbow',
    size: 'big',
    min: 1.35,
    max: 166,
    group: 'richness'
  },
  protea: {
    type: 'gradient',
    label: 'Protea',
    color: 'rainbow',
    size: 'big',
    min: 0.005,
    max: 68,
    group: 'richness'
  }
};

const rarityLegend = {
  mammals: {
    type: 'gradient',
    label: 'Mammals',
    color: 'rainbow',
    size: 'big',
    min: 8,
    max: 49,
    group: 'rarity'
  },
  birds: {
    type: 'gradient',
    label: 'Birds',
    color: 'rainbow',
    size: 'big',
    min: 1,
    max: 380,
    group: 'rarity'
  },
  amphibians: {
    type: 'gradient',
    label: 'Amphibians',
    color: 'rainbow',
    size: 'big',
    min: 3,
    max: 25,
    group: 'rarity'
  },
  restio: {
    type: 'gradient',
    label: 'Restio',
    color: 'rainbow',
    size: 'big',
    min: 1,
    max: 166,
    group: 'rarity'
  },
  protea: {
    type: 'gradient',
    label: 'Protea',
    color: 'rainbow',
    size: 'big',
    min: 1,
    max: 69,
    group: 'rarity'
  }
};

const pressureLegend = {
  label: 'Human Pressures',
  color: 'burgundy',
  type: 'simple'
};

export default {
  'key-biodiversity-areas': {
    type: 'simple',
    label: 'Key Biodiversity Areas',
    color: 'green'
  },
  'road-building': {
    type: 'simple',
    label: 'Roads',
    color: 'purple'
  },
  'community-based-reserves': {
    type: 'simple',
    label: 'Community Based Reserves',
    color: 'red'
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
  'example-protected-areas': {
    type: 'simple',
    label: 'Example Protected Areas',
    color: 'xpa'
  },
  'community-based-conservation-areas': {
    type: 'simple',
    label: 'Community Based Conservation Areas',
    color: 'cbca'
  },
  'private-reserves': {
    type: 'simple',
    label: 'Private Reserves',
    color: 'pr'
  },
  'human-pressures': {
    type: 'gradient',
    label: 'Human Pressures',
    color: 'black',
    min: 0,
    max: 100
  },

  // 'conservation-areas': {
  //   type: 'simple',
  //   label: 'Conservation Areas',
  //   color: 'red',
  //   min: 0,
  //   max: 100
  // },
  // richness
  mammalsRichness: richnessLegend.mammals,
  proteaRichness: richnessLegend.protea,
  amphibiansRichness: richnessLegend.amphibians,
  birdsRichness: richnessLegend.birds,
  restioRichness: richnessLegend.restio,
  // rarity
  mammalsRarity: rarityLegend.mammals,
  proteaRarity: rarityLegend.protea,
  amphibiansRarity: rarityLegend.amphibians,
  birdsRarity: rarityLegend.birds,
  restioRarity: rarityLegend.restio,
  // pressure
  mammalsPressures: {
    type: 'multiple',
    elements: [richnessLegend.mammals, pressureLegend]
  },
  proteaPressures: {
    type: 'multiple',
    elements: [richnessLegend.protea, pressureLegend]
  },
  amphibiansPressures: {
    type: 'multiple',
    elements: [richnessLegend.amphibians, pressureLegend]
  },
  birdsPressures: {
    type: 'multiple',
    elements: [richnessLegend.birds, pressureLegend]
  },
  restioPressures: {
    type: 'multiple',
    elements: [richnessLegend.restio, pressureLegend]
  }
};
