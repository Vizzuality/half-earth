export default [
  {
    key: 'species-richness',
    title: 'Species Richness',
    content: [
      'The species richness of each group, and additionally, the All Taxa layer combines richness across all taxonomic groups in which there is available data (birds, mammals, amphibians, conifers, cacti, turtles).',
      'Richness can be defined as the number of species present in a given area, in this case richness has been calculated for the number of species per 110 km grid cell.'
    ]
  },
  {
    key: 'species-rarity',
    title: 'Species Rarity',
    content: [
      'Species rarity of each group, and additionally the All Taxa layer combines rarity across all taxonomic groups in which there is available data (birds, mammals, amphibians, turtles, conifers, and cacti).',
      'Rarity is used as a continuous measure of endemism and can be defined as the inverse average range size of species:'
    ],
    formulas: [
      `                                          1
       Species Rarity =  ––––––––––––––––––––––––––––––––––––––––––––––
                         average range size of all species in grid cell`
    ]
  },
  {
    key: 'human-pressures',
    title: 'Human pressures',
    content: [
      'Areas where there is high anthropogenic pressure, which are represented as areas that have been highly modified or transformed from their natural state.',
      'The land use practices that typically characterize these human impacts are urban areas, roads, intensive agriculture, and clear-cutting.'
    ]
  },
  {
    key: 'prioritization-of-places',
    title: 'Priority Areas for Conservation Management',
    content: [
      'These layers show the current state protected areas globally, and how well they are protecting species. Working at a 110 km grid size, priority was assigned based on cells with the highest rarity and protecting up to 75% of those cells, until sufficient protection was reached on a per species basis. Sufficient protection was determined based on species range size.'
    ]
  },
  {
    key: 'protected-areas',
    title: 'Protected areas',
    content: [
      'Based on the World Database on Protected Areas (WDPA), the most comprehensive dataset of protected areas globally that is used to measure the amount of the globe within protected areas.',
      'Protected areas in this dataset include national parks, state parks, nature reserves, wilderness areas, and national forests.'
    ]
  }
];
