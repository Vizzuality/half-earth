import Katex from 'components/katex';
import React from 'react';

export const layersInfo = [
  {
    title: 'Global Species Richness',
    key: 'global-species-richness',
    subtitle:
      'Birds, Mammals, Amphibians, Conifers, Cacti, Turtles and All Taxa',
    description:
      'Maps show patterns for grid cells of 110 x 110 km size. The cell size reflects the resolution at which currently available data, without further models, allow an accurate characterization, globally. “Richness” shows the count of species in a cell. The ‘All Groups’ layer provide a sum (species richness) of currently shown groups.',
    source: () => (
      <span>
        <a target="_blank" href="https://mol.org/datasets/?dt=range">
          Map of Life and supporting datasets
        </a>
      </span>
    )
  },
  {
    title: 'Southern Africa Species Richness',
    key: 'regional-species-richness',
    subtitle: 'Birds, Mammals, Proteas and Restios',
    description:
      'In this region, sophisticated models combining different biodiversity data types and remotely sensed data were used predict species occurrences at 1 km resolution. Proteas (Genus Protea) and Restios (Genus Restio) are plant groups that are almost exclusively restricted to Southern Africa. “Richness” shows the count of species in a cell.',
    source: () => (
      <span>
        <a target="_blank" href="https://mol.org/datasets/">
          Map of Life and supporting datasets
        </a>
      </span>
    )
  },
  {
    title: 'Protected Areas',
    key: 'protected-areas',
    subtitle: '',
    description:
      'The most comprehensive dataset of protected areas globally that is used to measure the amount of the globe within protected areas. Protected areas in this dataset include national parks, state parks, nature reserves, wilderness areas, and national forest.',
    source: () => (
      <span>
        IUCN, UNEP-WCMC (2017). The World Database on Protected Areas (WDPA).
        Cambridge (UK): UNEP World Conservation Monitoring Centre. Available at:{' '}
        <a href="http://www.protectedplanet.net" target="_blank">
          www.protectedplanet.net
        </a>
      </span>
    )
  },
  {
    title: 'Human Pressures',
    key: 'human-pressures',
    subtitle: '',
    description:
      'Shows areas where there is high anthropogenic pressure, which are represented as areas that have been highly modified or transformed from their natural state. The land use practices that typically characterize these human impacts are urban areas, roads, intensive farming, and clear-cutting. Human impacts must be considered when establishing protected areas as some species are less tolerant of human disturbance.',
    source: () => (
      <span>
        {' '}
        'We used the standardized ESA Global Land Cover product (<a
          target="_blank"
          href="https://www.esa-landcover-cci.org/"
        >
          ESA Climate Change Initiative Land Cover
        </a>, accessed Nov 2017) to characterize areas in 2015 that encumbered
        by direct human encroachment (cropland, urban). For each 1km pixel a
        ‘Human Pressure’ score was calculated as average percent encroachment of
        all intersecting 300m pixel values.
      </span>
    )
  },
  {
    title: 'Community-based conservation areas',
    key: 'community-based-conservation-areas',
    subtitle: '',
    description:
      'The World Database on Protected Areas includes most of the global area under formal protection. However, there are many conservation initiatives that are protecting biodiversity outside of these official reserves. For example, there are community-based conservation approaches that involve collaborations between private landowners and government bodies.',
    source: () => (
      <span>
        {/* <a target="_blank" href="https://mol.org/datasets/"> */}
        Map of Life and supporting datasets
        {/* </a> */}
      </span>
    )
  },
  {
    title: 'Private reserves',
    key: 'private-reserves',
    subtitle: '',
    description:
      'The World Database on Protected Areas includes most of the global area under formal protection. However, there are many conservation initiatives that are protecting biodiversity outside of these official reserves. For example, there are private reserves that are effectively protecting biodiversity and helps moderate the effect of human pressures on biodiversity.',
    source: () => (
      <span>
        {/* <a target="_blank" href="https://mol.org/datasets/"> */}
        Map of Life and supporting datasets
        {/* </a> */}
      </span>
    )
  },
  {
    title: 'Global Species Rarity',
    key: 'global-species-rarity',
    subtitle:
      'Birds, Mammals, Amphibians, Conifers, Cacti, Turtles and All Taxa',
    description: ({ styles }) => (
      <span>
        Maps show patterns for grid cells of 110 x 110 km size. The cell size
        reflects the resolution at which currently available data, without
        further models, allow an accurate characterization, globally. “Rarity”
        shows the average inverse range size of species in a cell:
        <Katex>{'\\dfrac{\\sum_{i=1}^{n}\\frac{1}{R_i}}{n}'}</Katex>
        Where n is the number of species in a cell and Ri is the range size (or
        count of grid cells) of species i. The ‘All Groups’ layer provide a sum
        (species richness) of currently shown groups.
      </span>
    ),
    source: () => (
      <span>
        <a target="_blank" href="https://mol.org/datasets/?dt=range">
          Map of Life and supporting datasets
        </a>
      </span>
    )
  },
  {
    title: 'Southern Africa Species Rarity',
    key: 'regional-species-rarity',
    subtitle:
      'Birds, Mammals, Amphibians, Conifers, Cacti, Turtles and All Taxa',
    description: ({ styles }) => (
      <span>
        In this region, sophisticated models combining different biodiversity
        data types and remotely sensed data were used predict species
        occurrences at 1 km resolution. Proteas (Genus Protea) and Restios
        (Genus Restio) are plant groups that are almost exclusively restricted
        to Southern Africa. “Rarity” shows the average inverse range size of
        species in a cell:
        <Katex>{'\\dfrac{\\sum_{i=1}^{n}\\frac{1}{R_i}}{n}'}</Katex>
        Where n is the number of species in a cell and Ri is the range size (or
        count of grid cells) of species i.
      </span>
    ),
    source: () => (
      <span>
        <a target="_blank" href="https://mol.org/datasets/">
          Map of Life and supporting datasets
        </a>
      </span>
    )
  }
];

export default {
  global: layersInfo,
  regional: layersInfo
};
