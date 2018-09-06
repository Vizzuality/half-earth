function parseLayer(layer) {
  const { legendconfig, layerconfig, ...rest } = layer;
  return {
    legendConfig: JSON.parse(layer.legendconfig.replace(/'/g, '"')),
    layerConfig: JSON.parse(layer.layerconfig.replace(/'/g, '"')),
    id: layer.slug, // necessary by the layer manager
    ...rest
  };
}

export function parseCartoLayersToWRI(layers = [], datasets = []) {
  return layers.reduce((acc, layer) => {
    const parsedLayer = parseLayer(layer);
    // Filtering layers without url
    if (parsedLayer.layerConfig.body && !parsedLayer.layerConfig.body.url) return acc;

    const { dataset: layerDataset } = parsedLayer;
    const dataset = datasets.find(d => d.slug === layerDataset);
    if (!dataset) return acc;

    const newDataset = !acc[layerDataset]
      ? { ...dataset, id: dataset.slug, layers: [parsedLayer] }
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
