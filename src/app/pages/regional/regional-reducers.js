import includes from 'lodash/includes'
import difference from 'lodash/difference'
import merge from 'lodash/fp/merge'
import { assign } from 'utils'
import { updateLayer } from 'pages/map/map-utils'

import { actions } from 'providers/section'
import { actions as cartoActions } from 'providers/carto'
import { actions as selectorActions } from 'providers/selectors'
import { reducers as mapReducers } from 'pages/map'

const makeVisible = l => assign(l, { visible: true })
const makeHidden = l => assign(l, { visible: false })
const toPayload = payload => ({ payload })

const selectSelector = (state, { payload: { section, selector, selection } }) =>
  merge(state, {
    sections: {
      [section]: {
        selectors: {
          [selector]: { selected: selection }
        }
      }
    }
  })

const filterSelector = (state, { payload: { section, selection } }) => {
  const { selections } = state.sections[section]
  const toHide = Object.keys(selections).map(v => selections[v])

  return merge(
    merge(state, mapReducers.hideLayers(state, toPayload(toHide))),
    mapReducers.selectLayer(state, toPayload({ name: selections[selection] }))
  )
}

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),
  [selectorActions.selectSelector]: (state, { payload }) => {
    const { section, selector, selection } = payload

    return selectSelector(
      filterSelector(state, toPayload(payload)),
      toPayload({ section, selector, selection })
    )
  },
  [actions.setSection]: (state, { payload, __app: { section } }) => {
    if (payload === section.section) return state
    const block = state.sections[payload]
    const { layers, selectors, selections } = block
    console.log(
      Object.keys(selectors).map(s => selections[selectors[s].selected])
    )
    const visibleLayers = layers.concat(
      Object.keys(selectors).map(s => selections[selectors[s].selected])
    )

    const matchingLayers = state.layers.filter(l =>
      includes(visibleLayers, l.name)
    )
    const matchingVisibleLayers = matchingLayers.map(makeVisible)
    const otherLayers = difference(state.layers, matchingLayers)
    const otherLayersHidden = otherLayers.map(makeHidden)
    const updatedLayers = matchingVisibleLayers.concat(otherLayersHidden)

    return { ...state, layers: updatedLayers }
  }
}
