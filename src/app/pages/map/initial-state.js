import { cartoConfig } from 'app/utils'

let maximumLevel

export default {
  layers: [
    {
      name: 'mammals',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/mammals/{z}/{x}/{y}',
      maximumLevel,
      visible: false
    },
    {
      name: 'birds',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/birds/{z}/{x}/{y}',
      maximumLevel,
      visible: false
    },
    {
      name: 'amphibians',
      type: 'UrlTemplate',
      url:
        'https://cdn.mol.org/half-earth/tiles/richness/amphibians/{z}/{x}/{y}',
      maximumLevel,
      visible: false
    },
    {
      name: 'turtles',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/turtles/{z}/{x}/{y}',
      maximumLevel,
      visible: false
    },
    {
      name: 'cacti',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/cacti/{z}/{x}/{y}',
      maximumLevel,
      visible: false
    },
    {
      name: 'conifers',
      type: 'UrlTemplate',
      url: 'https://cdn.mol.org/half-earth/tiles/richness/conifers/{z}/{x}/{y}',
      maximumLevel,
      visible: false
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
      visible: false
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
    //   visible: false
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
          line-width: 1;
          line-color: #1bcec7;
          line-opacity: 1;
        }`,
        'wdpa_protected_areas'
      ),
      maximumLevel,
      visible: false
    },
    {
      name: 'pressures',
      type: 'WebMapService',
      format: 'image/png',
      layers: 'GUF28_DLR_v1_Mosaic',
      srs: 'EPSG:4326',
      transparent: true,
      url: 'https://geoservice.dlr.de/eoc/land/wms?service:WMS&request:GetMap',
      maximumLevel,
      visible: false
    }
  ]
}
