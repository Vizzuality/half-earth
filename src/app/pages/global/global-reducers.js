import includes from 'lodash/includes'
import difference from 'lodash/difference'
import merge from 'lodash/fp/merge'
import filter from 'lodash/filter'
import map from 'lodash/map'
import { actions as earthometerActions } from 'components/earthometer'
import { actions as cartoActions } from 'providers/carto'
import { reducers as mapReducers } from 'pages/map'
import { reducers as regionalReducers } from 'pages/regional'
import * as actions from './global-actions'

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
    const visibleScenarioLayers = map(scenarioLayers, (l, i) => {
      const nextLayer = scenarioLayers[i + 1]
      const notInNextLayer = nextLayer ? value < layerToNum(nextLayer) : true
      if (value >= layerToNum(l) && notInNextLayer) {
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

  [actions.setGlobalSection]: regionalReducers.setRegionalSection,

  [actions.setCanonicalData]: (state, { payload }) => ({
    ...state,
    canonical: { ...state.canonical, ...payload }
  }),

  [actions.setChartData]: (state, { payload }) => ({
    ...state,
    charts: { ...state.charts, ...payload }
  })
}
