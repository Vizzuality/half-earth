import { actions as cartoActions } from 'providers/carto'
import includes from 'lodash/includes'
import sortBy from 'lodash/sortBy'
import identity from 'lodash/identity'
import find from 'lodash/find'
import difference from 'lodash/difference'
import { assign } from 'app/utils'
import * as actions from './map-actions'

const updateLayer = (state, { payload, ...rest }) => {
  const { name, reset } = rest
  const { layers } = state
  const layer = find(layers, { name })
  if (!layer) return state
  const filtered = difference(layers, [layer]).map(
    reset ? l => assign(l, { visible: false }) : identity
  )

  return {
    ...state,
    layers: sortBy(filtered.concat([assign(layer, payload(layer))]), 'name')
  }
}

export default {
  updateLayer,
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

  [actions.selectLayer]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ visible: true })
    }),

  [actions.resetLayers]: state => ({
    ...state,
    layers: state.layers.map(l => {
      l.visible = false
      return l
    })
  })
}
