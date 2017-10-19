import { createAction } from 'redux-actions'
import { createThunkAction } from 'app/utils/redux'
const { fetch } = window

export const selectGlobalSelector = createAction('selectGlobalSelector')
export const toggleGlobalLayer = createAction('toggleGlobalLayer')
export const setGlobalSection = createAction('setGlobalSection')
export const resetGlobalLayers = createAction('resetGlobalLayers')
export const setWhereToProtectData = createAction('setWhereToProtectData')

export const getWhereToProtectSpiderData = createThunkAction(
  'getWhereToProtectSpiderData',
  () => (dispatch, state) => {
    const { whereToProtect: { url } } = state().global
    return fetch(url)
      .then(res => res.json())
      .then(data =>
        data.reduce((acc, next) => {
          const scenarios = acc[next.taxa] || []
          return { ...acc, [next.taxa]: [...scenarios, next] }
        }, {})
      )
      .then(data => {
        dispatch(setWhereToProtectData(data))
      })
  }
)
