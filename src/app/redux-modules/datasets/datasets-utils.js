export function parseCartoLayersToWRI(layers = [], datasets = []) {
  return layers.reduce((acc, layer) => {
    const { dataset: layerDataset } = layer;
    const dataset = datasets.find(d => d.slug === layerDataset);
    if (!dataset) return acc;

    const newDataset = !acc[layerDataset]
      ? { ...dataset, layers: layer }
      : { ...acc[layerDataset], layers: [...acc[layerDataset].layers, layer] };
    return {
      ...acc,
      [layerDataset]: newDataset
    };
  }, {});
}
