import { actions as cartoActions } from 'providers/carto'
import includes from 'lodash/includes'
import { updateLayer, selectLayer } from './map-utils'
import * as actions from './map-actions'

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),

  [actions.hideLayers]: (state, { payload }) => {
    const layers = state.layers.map(l => {
      if (includes(payload, l.name)) l.visible = false
      return l
    }, [])

    return {
      ...state,
      layers
    }
  },

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
