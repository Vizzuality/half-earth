import includes from 'lodash/includes'
import reduce from 'lodash/reduce'
import concat from 'lodash/concat'
import find from 'lodash/find'
import kebabCase from 'lodash/kebabCase'
import difference from 'lodash/difference'
import merge from 'lodash/fp/merge'
import { assign } from 'utils'
import { actions as cartoActions } from 'providers/carto'
import { reducers as mapReducers } from 'pages/map'
import * as actions from './regional-actions'

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
    mapReducers.updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),

  [actions.selectRegionalSelector]: (state, { payload }) => {
    const { section, selector, selection } = payload
    const filtered = filterSelector(state, toPayload(payload))
    return selectSelector(filtered, toPayload({ section, selector, selection }))
  },
  [actions.toggleRegionalLayer]: mapReducers.toggleLayer,

  [actions.setType]: (state, { payload, __app }) => {
    const currentSectionName = __app.section.section
    const currentSection = state.sections[currentSectionName]
    const { selections } = currentSection
    const selection = currentSection.selectors.birds.selected

    if (currentSection.selectionType === payload) return state

    // hide all current dropdown values
    const toHide = Object.keys(selections).map(v => selections[v])
    const matchingLayers = state.layers.filter(l => includes(toHide, l.name))
    const hiddenLayers = matchingLayers.map(makeHidden)
    const otherLayers = difference(state.layers, matchingLayers).map(l => {
      if (l.name === `${selection}:${payload}`) l.visible = true
      return l
    })
    // merge hidden and visible
    const layers = hiddenLayers.concat(otherLayers)

    // update dropdown data based on submited type
    const updatedSelections = reduce(
      currentSection.selections,
      (sections, value, key) => {
        sections[key] = `${key}:${payload}`
        return sections
      },
      {}
    )

    return {
      ...state,
      layers,
      sections: {
        ...state.sections,
        [currentSectionName]: {
          ...currentSection,
          selectionType: payload,
          selections: updatedSelections
        }
      }
    }
  },

  [actions.setRegionalSection]: (state, { payload, __app: { section } }) => {
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
  [actions.gotBillboards]: (state, { payload }) => {
    return {
      ...state,
      billboards: payload.map(b => ({
        id: kebabCase(b.name),
        coordinates: [b.x, b.y],
        url: 'img/billboard/dot.png',
        urlHover: 'img/billboard/dot-hover.png'
      }))
    }
  },
  [actions.openSidePopup]: (state, { payload }) => {
    return {
      ...state,
      sidePopup: {
        ...state.sidePopup,
        open: true,
        selected: payload
      }
    }
  },
  [actions.toggleFilters]: (state, { payload }) => {
    const current = find(state.sidePopup.content, {
      key: state.sidePopup.selected
    })
    const others = difference(state.sidePopup.content, [current])
    const withFilters = assign(current, {
      filters: includes(current.filters, payload)
        ? difference(current.filters, [payload])
        : concat(current.filters, [payload])
    })
    const content = others.concat(withFilters)
    return {
      ...state,
      sidePopup: {
        ...state.sidePopup,
        content
      }
    }
  },
  [actions.closeSidePopup]: (state, { payload }) => {
    return {
      ...state,
      sidePopup: {
        ...state.sidePopup,
        open: false,
        selected: null
      }
    }
  }
}
