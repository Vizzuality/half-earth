import sortBy from 'lodash/sortBy'
import identity from 'lodash/identity'
import find from 'lodash/find'
import difference from 'lodash/difference'
import { assign } from 'app/utils'

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

export const requestCartos = ({ layers, getCartoTiles }) => {
  layers.map(({ carto, name, url }) => {
    if (carto && !url) {
      const { account, config, apiv, tileFormat } = carto
      getCartoTiles({ account, config, apiv, name, tileFormat })
    }
  })
}

export const selectLayer = (state, { payload }) =>
  updateLayer(state, {
    ...payload,
    payload: layer => ({ visible: true })
  })
