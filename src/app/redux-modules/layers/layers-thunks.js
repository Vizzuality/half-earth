import * as actions from './layers-actions';
import difference from 'lodash/difference';

export async function layersThunk(dispatch, getState) {
  const { layers, location } = getState();
  const sanitizeLayerId = id => {
    if (
      id.endsWith('richness') ||
      id.endsWith('rarity') ||
      id.endsWith('-1km')
    ) {
      return id.replace('-1km', '_1km').replace('-', ':');
    }
    return id;
  };
  const activeLayers = Object.values(layers.byId)
    .filter(layer => layer.config.visible)
    .map(layer => layer.id);

  let urlLayers = [];
  if (location.query && location.query.layers) {
    urlLayers = location.query.layers.split(',');
    difference(urlLayers, activeLayers).forEach(param => {
      const id = sanitizeLayerId(param);
      const layer = layers.byId[id];
      const isCartoLayer = layer && !!layer.carto;
      const hasUrl = isCartoLayer && layer.config.url;
      const layerConfig = {
        id,
        config: { visible: true }
      };
      if (isCartoLayer && !hasUrl) {
        dispatch(actions.fetchLayer(layerConfig));
      } else {
        dispatch(actions.setLayerConfig(layerConfig));
      }
    });
  }
  // Hide the previous visible layers
  difference(activeLayers, urlLayers).forEach(id => {
    const layerConfig = {
      id,
      config: { visible: false }
    };
    dispatch(actions.setLayerConfig(layerConfig));
  });
}
