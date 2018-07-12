import * as actions from './layers-actions';

export async function layersThunk(dispatch, getState) {
  const { layers, location } = getState();
  const urlLayers = location.query ? location.query.layer.split(',') : [];
  urlLayers.forEach(id => {
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
