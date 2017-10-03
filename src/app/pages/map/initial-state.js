import { cartoConfig } from 'app/utils'

let maximumLevel

export default {
  layers: [
    {
      name: 'mammals:global',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/mammals/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: ['vertebrates']
    },
    {
      name: 'mammals:regional',
      type: 'UrlTemplate',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness_1km/mammals/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: ['vertebrates', 'regional']
    },
    {
      name: 'birds:regional',
      type: 'UrlTemplate',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness_1km/birds/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: ['vertebrates', 'regional']
    },
    {
      name: 'birds:global',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/birds/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: ['vertebrates']
    },
    {
      name: 'amphibians',
      type: 'UrlTemplate',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness/amphibians/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: ['vertebrates']
    },
    {
      name: 'reptiles',
      type: 'UrlTemplate',
      url: 'missing',
      maximumLevel,
      visible: false,
      groups: ['vertebrates']
    },
    {
      name: 'turtles',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/turtles/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: []
    },
    {
      name: 'cacti',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/cacti/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: []
    },
    {
      name: 'conifers',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/conifers/{z}/{x}/{y}',
      maximumLevel,
      visible: false,
      groups: []
    },
    {
      name: 'KBA',
      type: 'UrlTemplate',
      url: null,
      maximumLevel,
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #374C70;
          polygon-opacity: 0.9;
          ::outline {
            line-color: #FFF;
            line-width: 1;
            line-opacity: 0.5;
          }
        }`,
        'kba_poly_2016_id'
      ),
      visible: false,
      groups: []
    },
    // {
    //   name: 'mammals',
    //   type: 'UrlTemplate',
    //   url: null,
    //   maximumLevel,
    //   carto: cartoConfig(
    //     'jcalonso',
    //     `#layer {
    //         raster-opacity: 1;
    //         raster-colorizer-default-mode: linear;
    //         raster-colorizer-default-color: transparent;
    //         raster-colorizer-stops:
    //             stop(-1, transparent)
    //             stop(0, transparent)
    //             stop(10, '#14131C')
    //             stop(20, '#2A2839')
    //             stop(50, '#35334C')
    //             stop(75, '#413E60')
    //             stop(100, '#4D4A75')
    //             stop(125, '#59568B')
    //             stop(150, '#6562A1')
    //             stop(175, '#716EB8')
    //             stop(200, '#7E7BCF')
    //             stop(225, '#8B88E7')
    //             stop(250, '#9895FF')
    //         }`,
    //     'mammals_1',
    //     {
    //       geom_column: 'the_raster_webmercator',
    //       geom_type: 'raster',
    //       raster_band: 1
    //     }
    //   ),
    //   visible: false,
    // groups: []
    // },
    {
      name: 'protected-areas',
      type: 'UrlTemplate',
      url: null,
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #1bcec7;
          polygon-opacity: 0.2;
        }
        #layer::outline {
          line-width: .1;
          line-color: #1bcec7;
          line-opacity: 1;
        }`,
        'wdpa_protected_areas'
      ),
      maximumLevel,
      visible: false,
      groups: []
    },
    {
      name: 'road-building:regional',
      type: 'UrlTemplate',
      url: null,
      carto: cartoConfig(
        'simbiotica',
        `#layer {
          polygon-fill: #000000;
          polygon-opacity: 0.2;
        }
        #layer::outline {
          line-width: .3;
          line-color: #000000;
          line-opacity: 1;
        }`,
        'openstreetmaps_southern_africa_roads'
      ),
      maximumLevel,
      visible: false,
      groups: ['pressures', 'regional']
    },
    {
      name: 'urban-development:regional',
      type: 'WebMapService',
      format: 'image/png',
      layers: 'GUF28_DLR_v1_Mosaic',
      srs: 'EPSG:4326',
      transparent: true,
      url: 'https://geoservice.dlr.de/eoc/land/wms?service:WMS&request:GetMap',
      maximumLevel,
      visible: false,
      groups: ['pressures', 'regional']
    }
  ]
}
