import mapboxgl from 'mapbox-gl'
import max from 'lodash/max'
const { fetch } = window

// replaced at compile time
mapboxgl.accessToken = MAPBOX_TOKEN

const filter = data => {
  const { features } = data
  const maxPvalue = max(data.features.map(f => Number(f.properties.pvalue)))

  return [Object
    .assign(data, { features: features
      .map(f => Object.assign(f, { pvalue: Number(f.properties.pvalue) }))
      .filter(({properties: {taxa}}) => taxa === 'birds') }), maxPvalue]
}

const render = ([data, max]) => {
  const loader = document.querySelector('#loading')
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9'
  })
  .setStyle({
    version: 8,
    sources: {
      'mapbox-streets': {
        type: 'raster',
        url: 'mapbox://mapbox.mapbox-streets-v6'
      }
    },
    layers: []
  })

  map.on('load', function () {
    map.addSource('mol_patterns', {
      type: 'geojson',
      data
    })

    map.addLayer({
      'id': 'park-boundary',
      'type': 'fill',
      'source': 'mol_patterns',
      'paint': {
        'fill-outline-color': '#FFFFFF',
        'fill-color': '#FF0000',
        'fill-opacity': {
          property: 'pvalue',
          stops: [
            [0, 0],
            [max, 1]
          ]
        },
        'fill-antialias': true
      }
    })

    map.on('data', function (d) {
      if (d.tile) loader.style.display = 'none'
    })
  })
}

fetch('./data/mol_patterns_facet_map.geojson')
  .then(d => d.json())
  .then(filter)
  .then(render)
