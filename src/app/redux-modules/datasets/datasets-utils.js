const layerExample = {
  active: true,
  id: 'acfc2b99-a06b-4763-83e5-7e14539940b3',
  type: 'layer',
  name: 'Probabilities of Urban Expansion 2030',
  slug: 'Probabilities-of-Urban-Expansion-2030',
  dataset: '0a59f415-ee0b-4d19-96f7-c7304c152e1b',
  description:
    'The Global Grid of Probabilities of Urban Expansion details likely future areas of urban expansion up to 2030.',
  application: ['rw'],
  iso: [],
  provider: 'cartodb',
  userId: '58fde4354eecd9073107af0f',
  default: true,
  protected: false,
  env: 'production',
  layerConfig: {
    body: {
      layers: [
        {
          options: {
            raster_band: 1,
            geom_type: 'raster',
            geom_column: 'the_raster_webmercator',
            cartocss_version: '2.3.0',
            cartocss:
              '#layer {raster-opacity:1; raster-scaling:near; raster-colorizer-default-mode: linear; raster-colorizer-default-color:  transparent; raster-colorizer-epsilon:0.11; raster-colorizer-stops: stop(0.1, #fef0d9) stop(20, #fdd49e) stop(40, #fdbb84) stop(60, #fc8d59) stop(80, #e34a33) stop(100, #b30000) stop(101, #7f0000)}',
            sql: 'SELECT * FROM global_grid_prob_urban_expansion_2030_wgs84'
          },
          type: 'cartodb'
        }
      ],
      minzoom: 3,
      maxzoom: 18
    },
    account: 'insights'
  },
  legendConfig: {
    items: [
      { color: '#fef0d9', name: '1%' },
      { color: '#fef0d9', name: '20%' },
      { color: '#fdbb84', name: '40%' },
      { color: '#fc8d59', name: '60%' },
      { color: '#e34a33', name: '80%' },
      { color: '#b30000', name: '100%' },
      { color: '#7f0000', name: 'Urban' }
    ],
    type: 'gradient'
  },
  interactionConfig: {},
  applicationConfig: {},
  staticImageConfig: {},
  updatedAt: '2017-11-28T18:38:01.097Z'
};

function parseLayer(layer) {
  const { legendconfig, layerconfig, ...rest } = layer;
  return {
    legendConfig: layerExample.legendConfig,
    layerConfig: layerExample.layerConfig,
    ...rest
  };
}

export function parseCartoLayersToWRI(layers = [], datasets = []) {
  return layers.reduce((acc, layer) => {
    const parsedLayer = parseLayer(layer);
    const { dataset: layerDataset } = parsedLayer;
    const dataset = datasets.find(d => d.slug === layerDataset);
    if (!dataset) return acc;

    const newDataset = !acc[layerDataset]
      ? { ...dataset, layers: parsedLayer }
      : {
        ...acc[layerDataset],
        layers: [...acc[layerDataset].layers, parsedLayer]
      };
    return {
      ...acc,
      [layerDataset]: newDataset
    };
  }, {});
}
