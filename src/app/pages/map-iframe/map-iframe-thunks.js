import { reduxConfig } from 'redux-modules/layers';
import { sanitizeLayerId } from 'redux-modules/layers/layers-utils';
const { actions } = reduxConfig;

export async function fetchLayersThunk(dispatch, getState) {
  const { layers, location } = getState();

  if (location.query && location.query.layers) {
    location.query.layers.split(',').forEach(param => {
      const id = sanitizeLayerId(param);
      const layer = layers.byId[id];
      const isCartoLayer = layer && !!layer.carto;
      const hasUrl = isCartoLayer && layer.config.url;
      if (isCartoLayer && !hasUrl) {
        console.log(layer.id);
        dispatch(actions.fetchLayer(layer.id, layer.carto));
      }
      if (!layer.config.visible) {
        dispatch(actions.setLayerVisibility({ id: layer.id, visible: true }));
      }
    });
  }
}
