import { cartoConfig } from 'app/utils'
import { utils } from 'pages/map'

const { MOLLayer, speciesSelector, speciesSelections } = utils

const sliderLayers = steps => {
  return steps.map(v =>
    MOLLayer(`pa-scenario-${v}`, `pa-scenario/${v}/all-taxa`, 'richness')
  )
}

export default {
  graphs: [
    { subject: 'BIRDS', Meeting: 4871, Global: 9990, fullMark: 150 },
    { subject: 'MAMMALS', Meeting: 1661, Global: 4214, fullMark: 150 },
    { subject: 'AMPHIBIANS', Meeting: 1356, Global: 6183, fullMark: 150 },
    { subject: 'CACTI', Meeting: 213, Global: 1413, fullMark: 150 },
    { subject: 'TURTLES', Meeting: 89, Global: 289, fullMark: 150 },
    { subject: 'CONIFERS', Meeting: 226, Global: 606, fullMark: 150 }
  ],
  layers: [
    ...sliderLayers([20, 25, 30, 35, 40, 45, 50]),
    MOLLayer('all-taxa', 'all-taxa', 'richness'),
    MOLLayer('birds', 'birds', 'richness'),
    MOLLayer('mammals', 'mammals', 'richness'),
    MOLLayer('amphibians', 'amphibians', 'richness'),
    MOLLayer('conifers', 'conifers', 'richness'),
    MOLLayer('cacti', 'cacti', 'richness'),
    {
      name: 'protected-areas',
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
        'wdpa_protected_areas'
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
          polygon-fill: #00f7ff;
          polygon-opacity: 0.9;
        }
        #layer::outline {
          line-width: 1;
          line-color: #FFFFFF;
          line-opacity: 0.5;
        }`,
        'kba_poly_2016_id'
      ),
      visible: false
    }
  ],
  sections: {
    'global:1': {
      layers: [],
      selections: speciesSelections('richness'),
      selectors: {
        birds: speciesSelector('birds')
      }
    },
    'global:2': {
      layers: []
    },
    'global:3': {
      layers: []
    },
    'global:4': {
      layers: []
    },
    'global:5': {
      layers: []
    }
  }
}
