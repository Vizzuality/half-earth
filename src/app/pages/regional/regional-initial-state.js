import { cartoConfig } from 'app/utils'

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiamNoYWxmZWFydGgiLCJhIjoiY2o4Mnh4aDN6MGNqazMzc2FkeTlnajBoeiJ9.5Su3_JeAsjM0slTkaGFihw'
const maximumLevel = undefined

export default {
  layers: [
    {
      name: 'basemap:1',
      type: 'UrlTemplate',
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj85y2wq523um2rryqnvxzlt1/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      maximumLevel,
      visible: false
    },
    {
      name: 'basemap:2',
      type: 'UrlTemplate',
      url: `https://api.mapbox.com/styles/v1/jchalfearth/cj82yobfla1uq2ss6vlwaidgy/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`,
      maximumLevel,
      visible: false
    },
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
      name: 'birds',
      type: 'UrlTemplate',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness_1km/birds/{z}/{x}/{y}',
      maximumLevel,
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
      name: 'mammals',
      type: 'UrlTemplate',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness_1km/mammals/{z}/{x}/{y}',
      maximumLevel,
      visible: false
    },
    {
      name: 'amphibians',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness/amphibians_1km/{z}/{x}/{y}',
      type: 'UrlTemplate',
      maximumLevel,
      visible: false
    },
    {
      name: 'protea',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness_1km/protea/{z}/{x}/{y}',
      type: 'UrlTemplate',
      maximumLevel,
      visible: false
    },
    {
      name: 'restio',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness_1km/restio/{z}/{x}/{y}"',
      type: 'UrlTemplate',
      maximumLevel,
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
    // should this be an array and use numeric access by section?
    'regional:1': {
      layers: ['basemap:1', 'stork-flyways'] // use layer index instead?
    },
    'regional:2': {
      layers: ['basemap:2', 'birds'],
      selectors: {
        birds: {
          options: {
            mammals: 'Mammals',
            amphibians: 'Amphibians',
            protea: 'Protea',
            restio: 'Restio'
          },
          selected: 'mammals'
        }
      }
    },
    'regional:3': {
      layers: ['basemap:1', 'road-building'],
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
      layers: ['basemap:1', 'protected-areas']
    }
  }
}
