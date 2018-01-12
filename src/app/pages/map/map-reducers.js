import { actions as cartoActions } from 'providers/carto'
import includes from 'lodash/includes'
import sortBy from 'lodash/sortBy'
import identity from 'lodash/identity'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import difference from 'lodash/difference'
import { get, ofPath, of, set, compose } from 'js-lenses'
import { assign } from 'app/utils'
import * as actions from './map-actions'

export const updateLayer = (state, { payload, ...rest }) => {
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

export const resetLayers = state => ({
  ...state,
  layers: state.layers.map(l => {
    l.visible = false
    return l
  })
})

export const toggleLayer = (state, { payload: { name } }) => {
  const layers = get(of('layers'), state)
  const currentIndex = findIndex(layers, { name })
  const $currentIsVisible = compose(
    ofPath('layers', currentIndex),
    of('visible')
  )

  return set($currentIsVisible, !get($currentIsVisible, state), state)
}

export const hideLayers = (state, { payload }) => {
  const layers = state.layers.map(l => {
    if (includes(payload, l.name)) l.visible = false
    return l
  }, [])

  return {
    ...state,
    layers
  }
}

export const selectLayer = (state, { payload }) =>
  updateLayer(state, {
    ...payload,
    payload: layer => ({ visible: true })
  })

export default {
  updateLayer,
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),

  [actions.setDistance]: (state, { payload }) => ({
    ...state,
    distance: payload
  }),

  [actions.hideLayers]: hideLayers,
  [actions.toggleLayer]: toggleLayer,
  [actions.selectLayer]: selectLayer,
  [actions.resetLayers]: resetLayers
}
