import isFunction from 'lodash/isFunction'
import { createAction as CA, handleActions as handle } from 'redux-actions'

// matches action names with reducers and returns an object to
// be used with handleActions
// passes all state as a third argument
export const bindActionsToReducers = (actions, reducerList) =>
  Object.keys(actions).reduce((result, k) => {
    const c = {}
    const name = actions[k]
    c[name] = (state, action, ...rest) =>
      reducerList.reduce((r, reducer) => {
        if (!reducer.hasOwnProperty(k) || !isFunction(reducer[k])) return r
        return reducer[k](r, action, ...rest)
      }, state)

    return { ...result, ...c }
  }, {})

// this should be unwrapped and simplified:
// can take a list of all reducers and use the key to select
// can take initialstate from module instead of importing initialstate into data
export const handleActions = (actions, reducers, state) =>
  handle(bindActionsToReducers(actions, [reducers]), state || {})

// our own actioncreattor that can handle thunks
// fires the action as init
// and leaves resolve/reject to the thunk creator
export const createThunkAction = (name, thunkAction) => {
  if (!thunkAction) return CA(name)
  thunkAction.toString = () => name
  return thunkAction
}

// Middleware merges a global static app state into the local data
export const mergeAppState = store => {
  return next => baseAction => {
    const __app = Object.freeze(store.getState())
    const basePayload = baseAction.payload
    if (!basePayload) return next(baseAction)

    const actionFailed = baseAction.error || baseAction.payload instanceof Error
    const message = baseAction.payload.message || baseAction.payload.toString()
    const status = baseAction.payload.status || -1
    if (actionFailed) baseAction.error = { message, status }
    const payload =
      typeof basePayload === 'object'
        ? { ...basePayload, __app }
        : { payload: basePayload, __app }
    return next({ ...baseAction, ...payload })
  }
}
