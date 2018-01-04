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
} from 'components/earthometer'

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
  reducers as localReducers,
  initialState as localState
} from 'pages/local'

import {
  reducers as navFooterReducers,
  initialState as navFooterState
} from 'components/nav-footer'

import {
  reducers as legendLayersReducers,
  initialState as legendLayersState
} from 'components/legend/legend-layers/legend-layers'

export default combineReducers({
  routing: routerReducer,
  zoom: handleActions(zoomReducers, zoomState),
  earthSaved: handleActions(earthometerReducers, earthometerState),
  sidebar: handleActions(sidebarReducers, sidebarState),
  map: handleActions(mapReducers, mapState),
  section: handleActions(sectionReducers, sectionState),
  regional: handleActions(regionalReducers, regionalState),
  local: handleActions(localReducers, localState),
  navFooter: handleActions(navFooterReducers, navFooterState),
  legendLayers: handleActions(legendLayersReducers, legendLayersState),
  global: handleActions(globalReducers, globalState)
})
