import { cartoConfig } from 'app/utils'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiamNoYWxmZWFydGgiLCJhIjoiY2o4Mnh4aDN6MGNqazMzc2FkeTlnajBoeiJ9.5Su3_JeAsjM0slTkaGFihw'
const maximumLevel = undefined

const MOLLayer = (name, species, type) => ({
  name,
  url: `https://cdn.mol.org/half-earth/tiles/${type}/${species}/{z}/{x}/{y}`,
  type: 'UrlTemplate',
  visible: false
})

export default {
  layers: [
    {
      name: 'basemap',
      type: 'UrlTemplate',
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      maximumLevel,
      visible: false
    },
    {
      name: 'dark:basemap',
      type: 'UrlTemplate',
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj82yobfla1uq2ss6vlwaidgy/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      maximumLevel,
      visible: false
    },
    MOLLayer('birds:richness', 'birds', 'richness_1km'),
    MOLLayer('mammals:richness', 'mammals_1km', 'richness'),
    MOLLayer('amphibians:richness', 'amphibians_1km', 'richness'),
    MOLLayer('protea:richness', 'protea', 'richness_1km'),
    MOLLayer('restio:richness', 'restio', 'richness_1km'),
    MOLLayer('birds:pressures', 'birds', 'richness_pressures_1km'),
    {
      name: 'stork-flyways',
      url: null,
      type: 'UrlTemplate',
      maximumLevel,
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
      name: 'road-building',
      url: null,
      type: 'UrlTemplate',
      maximumLevel,
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #00f7ff;
          polygon-opacity: 0;
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
      name: 'protected-areas',
      url: null,
      type: 'UrlTemplate',
      maximumLevel,
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #00f7ff;
          polygon-opacity: 0;
        }
        #layer::outline {
          line-width: 1;
          line-color: #000000;
          line-opacity: 0.5;
        }`,
        'wdpa_protected_areas'
      ),
      visible: false
    },
    {
      name: 'urban-density',
      type: 'WebMapService',
      format: 'image/png',
      layers: 'GUF28_DLR_v1_Mosaic',
      srs: 'EPSG:4326',
      transparent: true,
      url: 'https://geoservice.dlr.de/eoc/land/wms?service:WMS&request:GetMap',
      maximumLevel,
      visible: false
    }
  ],
  sections: {
    'regional:1': {
      layers: ['basemap'],
      selectors: {
        birds: {
          options: {
            'birds:richness': 'Birds',
            'mammals:richness': 'Mammals',
            'amphibians:richness': 'Amphibians',
            'protea:richness': 'Protea',
            'restio:richness': 'Restio'
          },
          selected: 'birds:richness'
        }
      }
    },
    'regional:2': {
      layers: ['basemap'],
      selectors: {
        anthropogenic: {
          options: {
            birds: 'Birds:richness',
            mammals: 'Mammals',
            amphibians: 'Amphibians',
            protea: 'Protea',
            restio: 'Restio'
          },
          selected: 'birds:richness'
        }
      }
    },
    'regional:3': {
      layers: ['basemap', 'road-building'],
      selectors: {
        'road-building': {
          options: {
            'road-building': 'Road Building',
            'urban-density': 'Urban Density'
          },
          selected: 'road-building'
        }
      }
    },
    'regional:4': {
      layers: ['basemap', 'protected-areas']
    }
  }
}
