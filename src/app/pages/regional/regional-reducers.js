import includes from 'lodash/includes'
import difference from 'lodash/difference'
import { assign } from 'utils'
import { updateLayer } from 'pages/map/map-utils'
import { actions } from 'providers/section'
import { actions as cartoActions } from 'providers/carto'
import { actions as mapActions, reducers as mapReducers } from 'pages/map'

const makeVisible = l => assign(l, { visible: true })
const makeHidden = l => assign(l, { visible: false })

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),
  [actions.setSection]: (state, { payload }) => {
    const visibleLayers = state.sections[payload].layers
    const matchingLayers = state.layers.filter(l =>
      includes(visibleLayers, l.name)
    )
    const matchingVisibleLayers = matchingLayers.map(makeVisible)
    const otherLayers = difference(state.layers, matchingLayers)
    const otherLayersHidden = otherLayers.map(makeHidden)
    const updatedLayers = matchingVisibleLayers.concat(otherLayersHidden)

    return { ...state, layers: updatedLayers }
  },
  [mapActions.selectLayer]: (state, action) => {
    const { name: payload } = action.payload
    const { section, selector, name } = payload
    if (!section) return mapReducers.selectLayer(state, action)
    const { sections } = state
    const currentSection = sections[section]
    const selectors = currentSection.selectors

    return {
      ...mapReducers.selectLayer(state, action),
      sections: {
        ...sections,
        [section]: {
          ...currentSection,
          selectors: {
            ...selectors,
            [selector]: {
              ...selectors[selector],
              selected: name
            }
          }
        }
      }
    }
  }
}
