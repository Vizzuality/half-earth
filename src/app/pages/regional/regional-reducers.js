import includes from 'lodash/includes'
import reduce from 'lodash/reduce'
import find from 'lodash/find'
import kebabCase from 'lodash/kebabCase'
import difference from 'lodash/difference'
import uniq from 'lodash/uniq'
import toLower from 'lodash/toLower'
import first from 'lodash/first'
import merge from 'lodash/fp/merge'
import { assign } from 'utils'
import { filterToLayer } from './regional-utils'
import { actions as cartoActions } from 'providers/carto'
import * as mapReducers from 'pages/map/map-reducers'
import * as actions from './regional-actions'
import * as paneReducers from 'components/pane/pane-reducers'
import * as keyActions from 'providers/keyboard/keyboard-actions'

const { togglePane, setLayerOpacity } = paneReducers

const makeVisible = l => assign(l, { visible: true })
const makeHidden = l => assign(l, { visible: false })
const toPayload = payload => ({ payload })

const toggleFilters = (state, { payload }) => {
  const current = find(state.sidePopup.content, {
    key: state.sidePopup.selected
  })
  const others = difference(state.sidePopup.content, [current])
  const withFilters = assign(current, {
    filters: [payload]
  })

  const filters = uniq(current.species.map(f => toLower(f.taxoGroup)))
  const content = others.concat(withFilters)
  return mapReducers.hideLayers(
    mapReducers.selectLayer(
      {
        ...state,
        sidePopup: {
          ...state.sidePopup,
          content
        }
      },
      toPayload({ name: filterToLayer(payload) })
    ),
    toPayload(difference(filters, [payload]).map(f => filterToLayer(f)))
  )
}

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

export const setType = (state, { payload: { type, section } }) => {
  const currentSection = state.sections[section]
  const { selections } = currentSection
  // should be configurable ?
  const currentSelector = currentSection.selectors.birds
  const selection = currentSelector.selected

  if (currentSection.selectionType === type) return state

  // hide all current dropdown values
  const toHide = Object.keys(selections).map(v => selections[v])
  const matchingLayers = state.layers.filter(l => includes(toHide, l.name))
  const hiddenLayers = matchingLayers.map(makeHidden)
  const otherLayers = difference(state.layers, matchingLayers).map(l => {
    if (l.name === `${selection}:${type}`) l.visible = true
    return l
  })
  // merge hidden and visible
  const layers = hiddenLayers.concat(otherLayers)

  // update dropdown data based on submited type
  const updatedSelections = reduce(
    currentSection.selections,
    (sections, value, key) => {
      sections[key] = `${key}:${type}`
      return sections
    },
    {}
  )

  return {
    ...state,
    layers,
    sections: {
      ...state.sections,
      [section]: {
        ...currentSection,
        selectionType: type,
        selections: updatedSelections
      }
    }
  }
}

export const setRegionalSection = (state, { payload: { type, section } }) => {
  if (type === section.section) return state
  const reset = mapReducers.resetLayers(state)
  const block = reset.sections[type]
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
}

const popCloser = (state, key) => {
  return {
    ...state,
    [key]: {
      ...state[key],
      open: false,
      selected: null
    }
  }
}

const closeSidePopup = state => popCloser(state, 'sidePopup')
const closePopup = state => popCloser(state, 'popup')

const nameToLayer = name =>
  ({
    'community conservation area': 'community-based-conservation-areas',
    'private game reserve': 'private-reserves',
    'Protected Area': 'example-protected-areas'
  }[name])

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    mapReducers.updateLayer(state, {
      ...payload,
      payload: layer => ({ url: payload.url, carto: null })
    }),

  [keyActions.keyUp]: (state, { payload }) => {
    const escaped = payload.key === 'Escape'
    return state.popup.open && escaped
      ? closePopup(state)
      : state.sidePopup.open && escaped
        ? closeSidePopup(state)
        : state
  },

  [actions.selectRegionalSelector]: (state, { payload }) => {
    const { section, selector, selection } = payload
    const filtered = filterSelector(state, toPayload(payload))
    return selectSelector(filtered, toPayload({ section, selector, selection }))
  },
  [actions.toggleRegionalLayer]: mapReducers.toggleLayer,

  [actions.setType]: setType,

  [actions.setRegionalSection]: setRegionalSection,
  [actions.gotBillboards]: (state, { payload }) => {
    return {
      ...state,
      billboards: payload.map(b => ({
        id: kebabCase(b.name),
        name: b.name,
        layerName: nameToLayer(b.pa_type),
        type: b.pa_type,
        coordinates: [b.x, b.y],
        url: `img/billboard/${nameToLayer(b.pa_type)}.png`,
        urlHover: `img/billboard/${nameToLayer(b.pa_type)}-hover.png`
      }))
    }
  },
  [actions.openSidePopup]: (state, { payload }) => {
    const current = find(state.sidePopup.content, {
      key: payload
    })
    const filter = first(uniq(current.species.map(f => toLower(f.taxoGroup))))
    return toggleFilters(
      {
        ...state,
        sidePopup: {
          ...state.sidePopup,
          open: true,
          selected: payload
        }
      },
      toPayload(filter)
    )
  },
  [actions.openPopup]: (state, { payload }) => {
    return {
      ...state,
      popup: {
        ...state.popup,
        open: true,
        selected: payload
      }
    }
  },
  [actions.closePopup]: closePopup,
  [actions.toggleFilters]: toggleFilters,
  [actions.closeSidePopup]: closeSidePopup,
  [actions.setLayerOpacity]: setLayerOpacity,
  [actions.togglePane]: togglePane,
  [actions.hideLayers]: mapReducers.hideLayers
}
