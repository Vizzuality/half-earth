import { combineReducers } from 'redux'
import { handleActions } from 'app/utils/redux'
import { routerReducer } from 'react-router-redux'

import initialState from './data/initial-state'
import allActions from './actions'
import { reducers as globalReducers } from 'pages/global'
import { reducers as zoomReducers } from 'components/zoom'
import { reducers as earthometerReducers } from 'components/earthometer'
import { reducers as localReducers } from 'pages/local'
import { reducers as mapReducers } from 'pages/map'

export default combineReducers({
  routing: routerReducer,
  zoom: handleActions('zoom', allActions, zoomReducers, initialState),
  earthSaved: handleActions(
    'zoom',
    allActions,
    earthometerReducers,
    initialState
  ),
  global: handleActions('global', allActions, globalReducers, initialState),
  local: handleActions('local', allActions, localReducers, initialState),
  map: handleActions('map', allActions, mapReducers, initialState)
})
