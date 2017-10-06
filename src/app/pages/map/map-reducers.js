import sortBy from 'lodash/sortBy'
import identity from 'lodash/identity'
import find from 'lodash/find'
import difference from 'lodash/difference'

import { assign } from 'app/utils'
import * as actions from './map-actions'
import { actions as cartoActions } from 'providers/carto'
import { actions as sectionActions } from 'providers/section'

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

  [actions.selectLayer]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      reset: true,
      payload: layer => ({ visible: true })
    }),

  [actions.resetLayers]: (state, { payload }) => ({
    ...state,
    layers: state.layers.map(l => {
      l.visible = false
      return l
    })
  }),

  [sectionActions.setSection]: (state, { payload }) => {
    console.log(payload)
    return state
  }
}
