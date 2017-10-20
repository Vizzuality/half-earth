import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MAPBOX_TOKEN, MOLLayer, speciesSelector, speciesSelections } = utils

export default {
  graphs: {
    data: [
      { subject: 'BIRDS', total: 96, fullMark: 150 },
      { subject: 'MAMMALS', total: 88, fullMark: 150 },
      { subject: 'AMPHIBIANS', total: 56, fullMark: 150 },
      { subject: 'CACTI', total: 100, fullMark: 150 },
      { subject: 'TURTLES', total: 81, fullMark: 150 },
      { subject: 'CONIFERS', total: 71, fullMark: 150 }
    ],
    dimensions: [{ key: 'total' }]
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
          line-color: #e85353;
          line-opacity: 1;
        }
        #layer::outline {
          line-width: 1;
          line-color: #000000;
          line-opacity: 0.5;
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
          polygon-fill: #00f7ff;
          polygon-opacity: 0;
        }
        #layer::outline {
          line-width: 1;
          line-color: #000000;
          line-opacity: 0.5;
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
          polygon-fill: #00f7ff;
          polygon-opacity: 0;
        }
        #layer::outline {
          line-width: 1;
          line-color: #000000;
          line-opacity: 0.5;
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
          polygon-fill: #00f7ff;
          polygon-opacity: 0;
        }
        #layer::outline {
          line-width: 1;
          line-color: #000000;
          line-opacity: 0.5;
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
          polygon-fill: #f38828;
          polygon-opacity: 0.7;
        }
        #layer::outline {
          line-width: 1;
          line-color: #f38828;
          line-opacity: 1;
        }`,
        'private_nature_reserve'
      ),
      visible: false
    },
    {
      name: 'protected-areas',
      url: null,
      type: 'UrlTemplate',
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #f32874;
          polygon-opacity: 0.7;
        }
        #layer::outline {
          line-width: 1;
          line-color: #f32874;
          line-opacity: 1;
        }`,
        'wdpa_protected_areas'
      ),
      visible: false
    },
    {
      name: 'urban-development',
      type: 'WebMapService',
      format: 'image/png',
      layers: 'GUF28_DLR_v1_Mosaic',
      srs: 'EPSG:4326',
      transparent: true,
      url: 'https://geoservice.dlr.de/eoc/land/wms?service:WMS&request:GetMap',
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
      color: 'pink'
    },
    mammals: {
      type: 'gradient',
      label: 'Mammals',
      color: 'purple',
      size: 'big'
    },
    birds: {
      type: 'gradient',
      label: 'Birds',
      color: 'aqua',
      size: 'big'
    },
    amphibians: {
      type: 'gradient',
      label: 'Amphibians',
      color: 'green',
      size: 'big'
    },
    restio: {
      type: 'gradient',
      label: 'Restio',
      color: 'orange',
      size: 'big'
    },
    protea: {
      type: 'gradient',
      label: 'Protea',
      color: 'red',
      size: 'big'
    }
  }
}
