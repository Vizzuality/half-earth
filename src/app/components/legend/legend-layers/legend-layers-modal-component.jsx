import React from 'react'
import styles from './legend-layers-styles.scss'

const data = [
  {
    title: 'Global richness layers',
    subtitle:
      'Birds, Mammals, Amphibians, Conifers, Cacti, Turtles and All Taxa',
    description:
      'Maps show the count of species for grid cells of 110 x 110km size. The cell size reflects the resolution at which currently available data, without further models, allow an accurate characterization, globally. The ‘All Groups’ layer is the summed richness of all other species groups shown (birds, mammals, amphibians, turtles, conifers, and cacti).',
    source: 'Map of Life'
  },
  {
    title: 'Biodiversity Richness at 1km resolution',
    subtitle: 'Birds, Mammals, Amphibians, Proteas and Restios',
    description:
      'In this region, sophisticated models combining different biodiversity data types and remotely sensed data were used to predict species occurrences at 1km resolution. Richness maps show species counts for the different groups analyzed. Proteas (Genus Protea) and Restios (Genus Restio) are plant groups that are almost exclusively restricted to Southern Africa.',
    source: 'Map of Life'
  },
  {
    title: 'Protected Areas',
    subtitle: 'World Database on Protected Areas (WDPA)',
    description:
      'The WDPA is the most comprehensive dataset of protected areas globally that is used to measure the amount of the globe within protected areas. Protected areas in this dataset include national parks, state parks, nature reserves, wilderness areas, and national forests.',
    source:
      'IUCN, UNEP-WCMC (2017). The World Database on Protected Areas (WDPA). Cambridge (UK): UNEP World Conservation Monitoring Centre. Available at: www.protectedplanet.net'
  },
  {
    title: 'Alternative Conservation Areas',
    subtitle: 'Community-based reserves, Private reserves, Corridors',
    description:
      'The World Database on Protected Areas includes most of the global area under formal protection. However, there are many conservation initiatives that are protecting biodiversity outside of these official reserves. For example, there are community-based conservation approaches that involve collaborations between private landowners and government bodies, while other efforts include the establishment of conservancies and the creation of private reserves. We highlight examples of management areas that are of particular relevance for conserving the globally unique biodiversity of the Cape region.',
    source: 'Misc. sources'
  },
  {
    title: 'Anthropogenic impacts on biodiversity',
    subtitle: '',
    description:
      'This map layer shows areas where there is high anthropogenic pressure, which are represented as areas that have been highly modified or transformed from their natural state. The land use practices that typically characterize these human impacts are urban areas, roads, intensive farming, and clear-cutting. Human impacts must be considered when establishing protected areas as some species are less tolerant of human disturbance.',
    source:
      'Tuanmu, M.-N. & Jetz, W., 2014. A global 1-km consensus land-cover product for biodiversity and ecosystem modelling. Global ecology and biogeography: a journal of macroecology, 23(9), pp.1031–1045.'
  }
]

const ModalContent = props => (
  <div className={styles.legendPopUp}>
    {data.map((item, i) => (
      <div className={styles.containInfo} key={i}>
        <h2>{item.title}</h2>
        <h3>{item.subtitle}</h3>
        <p>{item.description}</p>
        <p className={styles.source}>Source: {item.source}</p>
      </div>
    ))}
  </div>
)

export default ModalContent
