import { combineReducers } from 'redux'
import { handleActions } from 'app/utils/redux'
import { routerReducer } from 'react-router-redux'

import { actions as cartoActions } from 'providers/carto'
import { actions as selectorActions } from 'providers/selectors'
import { actions as popUpActions } from 'providers/pop-up'

import {
  actions as zoomActions,
  reducers as zoomReducers,
  initialState as zoomState
} from 'components/zoom'

import {
  actions as earthometerActions,
  reducers as earthometerReducers,
  initialState as earthometerState
} from 'components/earthometer'

import {
  actions as mapActions,
  reducers as mapReducers,
  initialState as mapState
} from 'pages/map'

import {
  actions as sidebarActions,
  reducers as sidebarReducers,
  initialState as sidebarState
} from 'components/sidebar'

import {
  actions as sectionActions,
  reducers as sectionReducers,
  initialState as sectionState
} from 'providers/section'

import {
  actions as regionalActions,
  reducers as regionalReducers,
  initialState as regionalState
} from 'pages/regional'

import {
  reducers as localReducers,
  initialState as localState
} from 'pages/local'

const allActions = {
  ...cartoActions,
  ...zoomActions,
  ...earthometerActions,
  ...mapActions,
  ...sidebarActions,
  ...sectionActions,
  ...selectorActions,
  ...regionalActions,
  ...popUpActions
}

export default combineReducers({
  routing: routerReducer,
  zoom: handleActions(allActions, zoomReducers, zoomState),
  earthSaved: handleActions(allActions, earthometerReducers, earthometerState),
  sidebar: handleActions(allActions, sidebarReducers, sidebarState),
  map: handleActions(allActions, mapReducers, mapState),
  section: handleActions(allActions, sectionReducers, sectionState),
  regional: handleActions(allActions, regionalReducers, regionalState),
  local: handleActions(allActions, localReducers, localState)
})
