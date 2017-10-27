import { createAction } from 'redux-actions'
import { createThunkAction } from 'app/utils/redux'
const { fetch } = window

export const setGlobalSection = createAction('setGlobalSection')
export const resetGlobalLayers = createAction('resetGlobalLayers')
export const setWhereToProtectData = createAction('setWhereToProtectData')

export const selectGlobalSelector = createAction(
  'selectGlobalSelector',
  null,
  ({ selection }) => ({
    analytics: ['global', 'Change species on map', `Change to ${selection}`]
  })
)
export const toggleGlobalLayer = createAction(
  'toggleGlobalLayer',
  null,
  ({ name }) => ({
    analytics: ['global', 'Change Map Layer', name]
  })
)

export const getWhereToProtectSpiderData = createThunkAction(
  'getWhereToProtectSpiderData',
  () => (dispatch, state) => {
    const classifyScenarios = data =>
      data.reduce((acc, next) => {
        const scenario = acc[next.scenario] || []
        const scenarios = [...scenario, next]

        return { ...acc, [next.scenario]: scenarios }
      }, {})

    const { whereToProtect: { url } } = state().global
    return fetch(url)
      .then(res => res.json())
      .then(classifyScenarios)
      .then(data => dispatch(setWhereToProtectData(data)))
  }
)
