import * as actions from './layers-actions';

export async function layersThunk(dispatch, getState) {
  const { layers, location } = getState();
  const urlLayers = location.query ? location.query.layer.split(',') : [];
  const activeLayers = urlLayers
    .map(layer => layers.byId[layer])
    .filter(l => !!l);
  activeLayers.forEach(layer => {
    if (layer.type === 'carto') {
      // These needs a request to get the tile url
      // but the type hasn't been defined yet
      dispatch(actions.enableLayer(layer));
    } else {
      dispatch(actions.enableLayerReady(layer));
    }
  });
}
