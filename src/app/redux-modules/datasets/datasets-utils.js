import sortBy from 'lodash/sortBy';

function parseLayer(layer) {
  const { legendconfig, layerconfig, ...rest } = layer;
  return {
    legendConfig: JSON.parse(layer.legendconfig.replace(/'/g, '"')),
    layerConfig: JSON.parse(layer.layerconfig.replace(/'/g, '"')),
    id: layer.slug, // necessary by the layer manager
    visibility: true,
    opacity: 1,
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
      ? { ...dataset, dataset: dataset.slug, layers: [parsedLayer] }
      : {
        ...acc[layerDataset],
        layers: [...acc[layerDataset].layers, parsedLayer]
      };
    newDataset.layers = sortBy(newDataset.layers, 'name');
    return {
      ...acc,
      [layerDataset]: newDataset
    };
  }, {});
}

export function getLayersActiveMerged(newLayers = [], activeLayers = []) {
  const layersToAdd = newLayers.filter(l => l.active).map(l => ({ slug: l.slug }));
  const layersToRemove = newLayers.filter(l => !l.active).map(l => l.slug);
  return activeLayers.filter(layer => !layersToRemove.includes(layer.slug)).concat(layersToAdd);
}
