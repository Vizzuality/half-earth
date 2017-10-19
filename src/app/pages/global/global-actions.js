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
    const classifyScenarios = data =>
      data.reduce((acc, next) => {
        const scenarios = acc[next.taxa] || []
        const index = next.scenario
        if (!scenarios[index - 1]) scenarios[index - 1] = {}
        scenarios[index] = next

        return { ...acc, [next.taxa]: scenarios }
      }, {})

    const { whereToProtect: { url } } = state().global
    return fetch(url)
      .then(res => res.json())
      .then(classifyScenarios)
      .then(data => dispatch(setWhereToProtectData(data)))
  }
)
