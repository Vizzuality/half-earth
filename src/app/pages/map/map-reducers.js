import { actions as cartoActions } from 'providers/carto'
import { updateLayer, selectLayer } from './map-utils'
import * as actions from './map-actions'
// import { actions as sectionActions } from 'providers/section'

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),

  [actions.toggleLayer]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ visible: !layer.visible })
    }),

  [actions.selectLayer]: selectLayer,

  [actions.resetLayers]: (state, { payload }) => ({
    ...state,
    layers: state.layers.map(l => {
      l.visible = false
      return l
    })
  })
}
