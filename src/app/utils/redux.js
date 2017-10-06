import isFunction from 'lodash/isFunction'
import { createAction as CA, handleActions as handle } from 'redux-actions'

// matches action names with reducers and returns an object to
// be used with handleActions
// passes all state as a third argument
export const bindActionsToReducers = (actions, reducerList) =>
  Object.keys(actions).reduce((result, k) => {
    const c = {}
    const name = actions[k]
    c[name] = (state, action) =>
      reducerList.reduce((r, reducer) => {
        if (!reducer.hasOwnProperty(k) || !isFunction(reducer[k])) return r
        return reducer[k](r, action)
      }, state)

    return { ...result, ...c }
  }, {})

// this should be unwrapped and simplified:
// can take a list of all reducers and use the key to select
// can take initialstate from module instead of importing initialstate into data
export const handleActions = (key, actions, reducers, state) =>
  handle(bindActionsToReducers(actions, [reducers]), state[key] || {})

// our own actioncreattor that can handle thunks
// fires the action as init
// and leaves resolve/reject to the thunk creator
export const createThunkAction = (name, thunkAction) => {
  if (!thunkAction) return CA(name)
  thunkAction.toString = () => name
  return thunkAction
}
