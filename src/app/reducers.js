import { combineReducers } from 'redux'
import { handleActions } from 'app/utils/redux'
import { routerReducer } from 'react-router-redux'

import initialState from './data/initial-state'
import allActions from './actions'
import { reducers as zoomReducers } from 'components/zoom'
// import { reducers as earthometerReducers } from 'components/earthometer'
import { reducers as mapReducers } from 'pages/map'
import { reducers as sidebarReducers } from 'components/sidebar'
import { reducers as sectionReducers } from 'providers/section'

export default combineReducers({
  routing: routerReducer,
  zoom: handleActions('zoom', allActions, zoomReducers, initialState),
  // earthSaved: handleActions(
  //   'zoom',
  //   allActions,
  //   earthometerReducers,
  //   initialState
  // ),
  sidebar: handleActions('sidebar', allActions, sidebarReducers, initialState),
  map: handleActions('map', allActions, mapReducers, initialState),
  section: handleActions('section', allActions, sectionReducers, initialState)
})
