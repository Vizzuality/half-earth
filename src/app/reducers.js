import { combineReducers } from 'redux'
import { handleActions } from 'app/utils/redux'
import { routerReducer } from 'react-router-redux'

import initialState from './data/initial-state'
import allActions from './actions'
import { reducers as zoomReducers } from 'components/zoom'
// import { reducers as earthometerReducers } from 'components/earthometer'
import { reducers as mapReducers } from 'pages/map'

export default combineReducers({
  routing: routerReducer,
  zoom: handleActions('zoom', allActions, zoomReducers, initialState),
  // earthSaved: handleActions(
  //   'zoom',
  //   allActions,
  //   earthometerReducers,
  //   initialState
  // ),
  map: handleActions('map', allActions, mapReducers, initialState)
})
