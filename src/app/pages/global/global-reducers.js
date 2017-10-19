import includes from 'lodash/includes'
import difference from 'lodash/difference'
import merge from 'lodash/fp/merge'
import filter from 'lodash/filter'
import map from 'lodash/map'
import { assign } from 'utils'
import { actions as earthometerActions } from 'components/earthometer'
import { actions as cartoActions } from 'providers/carto'
import { reducers as mapReducers } from 'pages/map'
import * as actions from './global-actions'

const makeVisible = l => assign(l, { visible: true })
const makeHidden = l => assign(l, { visible: false })
const toPayload = payload => ({ payload })
const layerToNum = l => Number(l.name.replace('pa-scenario-', ''))
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
    mapReducers.updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),

  [actions.selectGlobalSelector]: (state, { payload }) => {
    const { section, selector, selection } = payload
    const filtered = filterSelector(state, toPayload(payload))
    return selectSelector(filtered, toPayload({ section, selector, selection }))
  },

  [earthometerActions.setEarthSaved]: (state, { payload: value }) => {
    const { layers } = state
    const scenarioLayers = filter(layers, l => includes(l.name, 'pa-scenario'))
    const restLayers = difference(layers, scenarioLayers)
    const visibleScenarioLayers = map(scenarioLayers, l => {
      if (value >= layerToNum(l)) {
        l.visible = true
      } else {
        l.visible = false
      }
      return l
    })

    return {
      ...state,
      layers: [...restLayers, ...visibleScenarioLayers]
    }
  },

  [actions.toggleGlobalLayer]: mapReducers.toggleLayer,

  [actions.setGlobalSection]: (state, { payload, __app: { section } }) => {
    if (payload === section.section) return state
    const reset = mapReducers.resetLayers(state)
    const block = reset.sections[payload]
    const { layers, selectors, selections } = block

    const visibleLayers = layers.concat(
      (selectors &&
        Object.keys(selectors).map(s => selections[selectors[s].selected])) ||
        []
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

  [actions.setWhereToProtectData]: (state, { payload }) => ({
    ...state,
    whereToProtect: { ...state.whereToProtect, data: payload }
  })
}
