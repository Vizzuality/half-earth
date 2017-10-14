import includes from 'lodash/includes'
import difference from 'lodash/difference'
import find from 'lodash/find'
import { assign } from 'utils'
import { updateLayer, selectLayer } from 'pages/map/map-utils'

import { actions } from 'providers/section'
import { actions as cartoActions } from 'providers/carto'
import { actions as mapActions } from 'pages/map'

const makeVisible = l => assign(l, { visible: true })
const makeHidden = l => assign(l, { visible: false })

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),
  [actions.setSection]: (state, { payload }) => {
    const block = state.sections[payload]
    const { layers, selectors } = block

    const visibleLayers = layers.concat(
      Object.keys(selectors).map(s => selectors[s].selected)
    )

    const matchingLayers = state.layers.filter(l =>
      includes(visibleLayers, l.name)
    )
    const matchingVisibleLayers = matchingLayers.map(makeVisible)
    const otherLayers = difference(state.layers, matchingLayers)
    const otherLayersHidden = otherLayers.map(makeHidden)
    const updatedLayers = matchingVisibleLayers.concat(otherLayersHidden)

    return { ...state, layers: updatedLayers }
  },
  [mapActions.selectLayers]: (state, { payload: visibleLayers }) => {
    const reset = true
    const selectedLayers = visibleLayers.map(name =>
      find(selectLayer(state, { payload: { name, reset } }).layers, { name })
    )
    const layers = state.layers.map(
      stateLayer =>
        find(selectedLayers, { name: stateLayer.name }) || stateLayer
    )

    return { ...state, layers }
  }
}
