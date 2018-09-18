export default [
  {
    key: 'species-richness',
    title: 'Species Richness',
    content: [
      'The species richness of each group (birds, mammals, amphibians, proteas (plant), and restios (plant)).',
      'Richness can be defined as the number of species present in a given area, in this case richness has been calculated for the number of species per 1 km grid cell.'
    ]
  },
  {
    key: 'species-rarity',
    title: 'Species Rarity',
    content: [
      'Species rarity of each group (birds, mammals, amphibians, proteas (plant), and restios (plant)).',
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
    key: 'protected-areas',
    title: 'Protected areas',
    content: [
      'Based on the World Database on Protected Areas (WDPA), the most comprehensive dataset of protected areas globally that is used to measure the amount of the globe within protected areas.',
      'Protected areas in this dataset include national parks, state parks, nature reserves, wilderness areas, and national forests.'
    ]
  },
  {
    key: 'alternative-conservation-areas',
    title: 'Alternative conservation areas',
    content: [
      'The World Database on Protected Areas includes most of the global area under formal protection. However, there are many conservation initiatives that are protecting biodiversity outside of these official reserves. For example, there are community-based conservation approaches that involve collaborations between private landowners and government bodies, while other efforts include the establishment of conservancies and the creation of private reserves.',
      'This layer highlights a handful of reserves in the cape region that play an important role in the protection of the Cape Floristic Region.'
    ],
    keywords: [ 'community-based conservation', 'private nature reserves', 'nature conservancies' ]
  }
];
