import React from 'react'
import styles from './legend-layers-styles.scss'

const data = [
  {
    title: 'Global richness layers',
    subTitle:
      'Birds, Mammals, Amphibians, Conifers, Cacti, Turtles and All Taxa',
    description:
      'There is a layer for the richness of each species groups (birds, mammals, amphibians, turtles, conifers, and cacti). Additionally, the All Taxa layer combines richness across all taxonomic groups in which there is available data (birds, mammals, amphibians, conifers, cacti, turtles). Richness can be defined as the number of species present in a given area, in this case richness has been calculated for the number of species per 110 km grid cell.',
    source: 'Map of Life'
  },
  {
    title: 'Biodiversity Richness at 1km resolution',
    subTitle: 'Birds, Mammals, Amphibians, Proteas and Restios',
    description:
      'There is a layer for the richness of each species groups (birds, mammals, amphibians, proteas (plant), and restios (plant)). Richness can be defined as the number of species present in a given area, in this case richness has been calculated for the number of species per 1 km grid cell. These are novel datasets that are based on a combination of sophisticated species distribution models and expert range predictions.',
    source: 'Map of Life'
  },
  {
    title: 'White Stork (Ciconia ciconia) tracking data',
    subTitle: '',
    description:
      'This dataset tracks the movement of a White Stork, named 40534B, who was banded near Leipzig, Germany. The tracks show its migration along the eastern flyway of this population to its breeding grounds in South Africa, then back again to Germany. It passes through the Okavango Delta during its southbound migration.',
    source:
      'Max Planck Institute for Ornithology (Dept. Vogelwarte Radolfzell) and Storchenhof Loburg; Germany.'
  },
  {
    title: 'Protected Areas',
    subTitle: 'World Database on Protected Areas (WDPA)',
    description:
      'The most comprehensive dataset of protected areas globally that is used to measure the amount of the globe within protected areas. Protected areas in this dataset include national parks, state parks, nature reserves, wilderness areas, and national forests.',
    source:
      'IUCN, UNEP-WCMC (2017). The World Database on Protected Areas (WDPA). Cambridge (UK): UNEP World Conservation Monitoring Centre. Available at: www.protectedplanet.net'
  },
  {
    title: 'Key Biodiversity Areas (KBAs)',
    subTitle: '',
    description:
      'Key Biodiversity Areas (KBAs) are areas that have been identified as having high conservation value. KBAs account for threatened and geographically restricted biodiversity, ecological integrity, biological processes, and irreplaceability. This global standard has been implemented to help inform decision-makers on which areas should be prioritized for conservation.',
    source:
      'BirdLife International (2017). Key Biodiversity Area digital boundaries. Derived from the World Database of Key Biodiversity Areas. Developed by the KBA Partnership (BirdLife International, International Union for the Conservation of Nature, Amphibian Survival Alliance, Conservation International, Critical Ecosystem Partnership Fund, Global Environment Facility, Global Wildlife Conservation, NatureServe, Royal Society for the Conservation of Birds, Wildlife Conservation Society and World Wildlife Fund). Available at www.keybiodiversityareas.org'
  },
  {
    title: 'Alternative Conservation Areas',
    subTitle: 'Community-based reserves, Private reserves, Corridors',
    description:
      'The World Database on Protected Areas includes most of the global area under formal protection. However, there are many conservation initiatives that are protecting biodiversity outside of these official reserves. For example, there are community-based conservation approaches that involve collaborations between private landowners and government bodies, while other efforts include the establishment of conservancies and the creation of private reserves. These layers highlight a handful of reserves in the cape region that play an important role in the protection of the Cape Floristic Region.',
    source: 'Map of Life'
  },
  {
    title: 'Anthropogenic impacts on biodiversity',
    subTitle: '',
    description:
      'Shows areas where there is high anthropogenic pressure, which are represented as areas that have been highly modified or transformed from their natural state. The land use practices that typically characterize these human impacts are urban areas, roads, intensive farming, and clear-cutting. Human impacts must be considered when establishing protected areas as some species are less tolerant of human disturbance.',
    source:
      'Tuanmu, M.-N. & Jetz, W., 2014. A global 1-km consensus land-cover product for biodiversity and ecosystem modelling. Global ecology and biogeography: a journal of macroecology, 23(9), pp.1031–1045.'
  },
  {
    title: 'Road building',
    subTitle: '',
    description:
      'This layer shows the current road network across Southern Africa, it´s shown as a proxy of human induced pressures. This is important for conservation planning because roads affect the connectivity of the landscape and impede the ability of species movement and distribution. Roads and human impacts are both important considerations when developing protected area networks to establish corridors to maintain connectivity between suitable habitats.',
    source: 'Open Street Maps (2017)'
  }
]

const ModalContent = props => (
  <div className={styles.legendPopUp}>
    {data.map((item, i) => (
      <div className={styles.containInfo} key={i}>
        <h2>{item.title}</h2>
        <h3>{item.subTitle}</h3>
        <p>{item.description}</p>
        <p>Source: {item.source}</p>
      </div>
    ))}
  </div>
)

export default ModalContent
