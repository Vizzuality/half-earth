import find from 'lodash/find'
import difference from 'lodash/difference'

import { assign } from 'app/utils'
import * as actions from './map-actions'

// const showMammals = (state, { payload }) => ({ ...state })

export default {
  [actions.gotCartoTiles]: (state, { payload }) => {
    const { name, url } = payload
    const { layers } = state

    const layer = find(layers, { name })
    const filtered = difference(layers, [layer])
    return {
      ...state,
      layers: filtered.concat([assign(layer, { url, carto: null })])
    }
  },

  [actions.toggleLayer]: (state, { payload }) => {
    const { layers } = state
    const layer = find(layers, { name: payload })
    const filtered = difference(layers, [layer])
    return {
      ...state,
      layers: filtered.concat([assign(layer, { visible: !layer.visible })])
    }
  }
}
