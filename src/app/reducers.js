import { combineReducers } from 'redux'
import { handleActions } from 'redux-tools'
import { routerReducer } from 'react-router-redux'

import {
  reducers as zoomReducers,
  initialState as zoomState
} from 'components/zoom'

import {
  reducers as earthometerReducers,
  initialState as earthometerState
} from 'components/earthometer-multi'

import { reducers as mapReducers, initialState as mapState } from 'pages/map'

import {
  reducers as sidebarReducers,
  initialState as sidebarState
} from 'components/sidebar'

import {
  reducers as sectionReducers,
  initialState as sectionState
} from 'providers/section'

import {
  reducers as regionalReducers,
  initialState as regionalState
} from 'pages/regional'

import {
  reducers as globalReducers,
  initialState as globalState
} from 'pages/global'

import {
  reducers as navFooterReducers,
  initialState as navFooterState
} from 'components/nav-footer'

import {
  reducers as legendLayersReducers,
  initialState as legendLayersState
} from 'components/legend/legend-layers/legend-layers'

import {
  reducers as paneReducers,
  initialState as paneState
} from 'components/pane'

export default (state, action) => {
  const appState = combineReducers({
    routing: routerReducer,
    zoom: handleActions(zoomReducers, zoomState),
    earthometer: handleActions(earthometerReducers, earthometerState),
    sidebar: handleActions(sidebarReducers, sidebarState),
    map: handleActions(mapReducers, mapState),
    section: handleActions(sectionReducers, sectionState),
    regional: handleActions(regionalReducers, regionalState),
    navFooter: handleActions(navFooterReducers, navFooterState),
    legendLayers: handleActions(legendLayersReducers, legendLayersState),
    global: handleActions(globalReducers, globalState)
  })(state, action)

  // give the pane access to the whole state
  return handleActions(paneReducers, paneState)(appState, action)
}
