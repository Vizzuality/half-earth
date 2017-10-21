import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MAPBOX_TOKEN, MOLLayer, speciesSelector, speciesSelections } = utils

export default {
  graphs: {
    data: [
      {
        subject: 'BIRDS',
        percent: 96,
        tooltip: [
          {
            value: 607,
            label: 'Number of species in the region',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'MAMMALS',
        percent: 88,
        tooltip: [
          {
            value: 160,
            label: 'Number of species in the region',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'AMPHIBIANS',
        percent: 56,
        tooltip: [
          {
            value: 52,
            label: 'Number of species in the region',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'CACTI',
        percent: 100,
        tooltip: [
          {
            value: 1,
            label: 'Number of species in the region',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'TURTLES',
        percent: 81,
        tooltip: [
          {
            value: 9,
            label: 'Number of species in the region',
            color: '#3850d6'
          }
        ]
      },
      {
        subject: 'CONIFERS',
        percent: 71,
        tooltip: [
          {
            value: 5,
            label: 'Number of species in the region',
            color: '#3850d6'
          }
        ]
      }
    ],
    dimensions: [{ key: 'percent' }]
  },

  layers: [
    {
      name: 'basemap',
      type: 'UrlTemplate',
      keep: true,
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      visible: false
    },
    {
      name: 'dark:basemap',
      type: 'UrlTemplate',
      keep: true,
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj82yobfla1uq2ss6vlwaidgy/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      visible: false
    },
    MOLLayer('birds:richness', 'birds', 'richness_1km'),
    MOLLayer('amphibians:richness', 'amphibians', 'richness_1km'),
    MOLLayer('mammals:richness', 'mammals', 'richness_1km'),
    MOLLayer('protea:richness', 'protea', 'richness_1km'),
    MOLLayer('restio:richness', 'restio', 'richness_1km'),

    MOLLayer('birds:pressures', 'birds', 'richness_pressures_1km'),
    MOLLayer('amphibians:pressures', 'amphibians', 'richness_pressures_1km'),
    MOLLayer('mammals:pressures', 'mammals', 'richness_pressures_1km'),
    MOLLayer('protea:pressures', 'protea', 'richness_pressures_1km'),
    MOLLayer('restio:pressures', 'restio', 'richness_pressures_1km'),
    {
      name: 'stork-flyways',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #00f7ff;
          polygon-opacity: 0.9;
        }
        #layer::outline {
          line-width: 1;
          line-color: #FFFFFF;
          line-opacity: 0.5;
        }`,
        'southern_africa_white_stork_flyway'
      ),
      visible: false
    },
    {
      name: 'key-biodiversity-areas',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #38c0b4;
          polygon-opacity: 0.7;
        }
        #layer::outline {
          line-width: 1;
          line-color: #38c0b4;
          line-opacity: 0.5;
        }`,
        'kba_poly_2016_id'
      ),
      visible: false
    },
    {
      name: 'road-building',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          line-width: 1.5;
          line-color: #291270;
          line-opacity: 1;
        }`,
        'openstreetmaps_southern_africa_roads'
      ),
      visible: false
    },
    {
      name: 'existing-reserves',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'half-earth',
        `#layer {
          polygon-fill: #d96fad;
          polygon-opacity: 0.9;
        }
        #layer::outline {
          line-width: 1;
          line-color: #d96fad;
          line-opacity: 1;
        }`,
        'wdpa_example_reserves'
      ),
      visible: false
    },
    {
      name: 'corridors',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'half-earth',
        `#layer {
          polygon-fill: #a509e4;
          polygon-opacity: 0.8;
        }
        #layer::outline {
          line-width: 1;
          line-color: #a509e4;
          line-opacity: 1;
        }`,
        'proposed_cederberg_corridor'
      ),
      visible: false
    },
    {
      name: 'community-based-reserves',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'half-earth',
        `#layer {
          polygon-fill: #e95353;
          polygon-opacity: 1;
        }
        #layer::outline {
          line-width: 1;
          line-color: #e95353;
          line-opacity: 1;
        }`,
        'community_based_kenilworth'
      ),
      visible: false
    },
    {
      name: 'private-reserves',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'half-earth',
        `#layer {
          polygon-fill: #972a6a;
          polygon-opacity: 0.7;
        }
        #layer::outline {
          line-width: 1;
          line-color: #972a6a;
          line-opacity: 1;
        }`,
        'private_nature_reserve'
      ),
      visible: false
    },
    {
      name: 'protected-areas',
      url:
        'https://cdn.mol.org/half-earth/tiles/reserve-coverage/existing-network/{z}/{x}/{y}',
      type: 'UrlTemplate',
      visible: false
    },
    {
      name: 'urban-development',
      type: 'UrlTemplate',
      url:
        'https://storage.googleapis.com/half-earth/v1/urban-earthenv-consensus-landcover/{z}/{x}/{y}.png',
      visible: false
    }
  ],
  sections: {
    'regional:1': {
      layers: [],
      selections: speciesSelections('richness'),
      selectors: {
        birds: speciesSelector('birds')
      }
    },
    'regional:2': {
      layers: [],
      selections: speciesSelections('pressures'),
      selectors: {
        anthropogenic: speciesSelector('birds')
      }
    },
    'regional:3': {
      layers: []
    }
  },
  legend: {
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
    'private-reserves': {
      type: 'simple',
      label: 'Private Reserves',
      color: 'pink'
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
    mammals: {
      type: 'gradient',
      label: 'Mammals',
      color: 'purple',
      size: 'big',
      min: 8,
      max: 49
    },
    birds: {
      type: 'gradient',
      label: 'Birds',
      color: 'aqua',
      size: 'big',
      min: 1,
      max: 38
    },
    amphibians: {
      type: 'gradient',
      label: 'Amphibians',
      color: 'green',
      size: 'big',
      min: 3,
      max: 25
    },
    restio: {
      type: 'gradient',
      label: 'Restio',
      color: 'orange',
      size: 'big',
      min: 1,
      max: 166
    },
    protea: {
      type: 'gradient',
      label: 'Protea',
      color: 'orange2',
      size: 'big',
      min: 1,
      max: 69
    }
  }
}
