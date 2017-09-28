import find from 'lodash/find'
import difference from 'lodash/difference'

import { assign } from 'app/utils'
import * as actions from './map-actions'
import { actions as cartoActions } from 'providers/carto'

const updateLayer = (state, { payload, ...rest }) => {
  const { name } = rest
  const { layers } = state
  const layer = find(layers, { name })
  const filtered = difference(layers, [layer])

  return {
    ...state,
    layers: filtered.concat([assign(layer, payload(layer))])
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
    })
}
