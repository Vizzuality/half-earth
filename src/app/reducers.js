import { combineReducers } from 'redux'
import { handleActions } from 'app/utils/redux'
import { routerReducer } from 'react-router-redux'

import initialState from './data/initial-state'
import allActions from './actions'
import { reducers as zoomReducers } from 'components/zoom'
import { reducers as earthometerReducers } from 'components/earthometer'

export default combineReducers({
  routing: routerReducer,
  zoom: handleActions('zoom', allActions, zoomReducers, initialState),
  earthSaved: handleActions(
    'zoom',
    allActions,
    earthometerReducers,
    initialState
  )
})
