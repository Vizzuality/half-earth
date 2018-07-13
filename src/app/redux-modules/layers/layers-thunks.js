import * as actions from './layers-actions';
export async function layersThunk(dispatch, getState) {
  const { layers, location } = getState();
  const sanitizeLayerId = id => {
    if (id.endsWith('richness') || id.endsWith('rarity')) {
      return id.replace('-', ':');
    }
    return id;
  };
  if (location.query) {
    const urlLayers = location.query.layer
      ? location.query.layer.split(',')
      : [];
    urlLayers.forEach(param => {
      const id = sanitizeLayerId(param);
      const isCartoLayer = layers.byId[id] && !!layers.byId[id].carto;
      const layerConfig = {
        id,
        config: { visible: true }
      };
      if (isCartoLayer) {
        dispatch(actions.fetchLayer(layerConfig));
      } else {
        dispatch(actions.setLayerConfig(layerConfig));
      }
    });
  }
}
