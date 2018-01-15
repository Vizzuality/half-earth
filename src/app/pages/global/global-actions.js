import { createAction, createThunkAction } from 'redux-tools'
import isEmpty from 'lodash/isEmpty'

const { fetch } = window

export const setGlobalSection = createAction('setGlobalSection')
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

export const setCanonicalData = createAction('setCanonicalData')

export const setChartData = createAction('setChartData')

export const getChartData = createThunkAction(
  'getChartData',
  () => (dispatch, getState) => {
    const requests = []
    const { charts, canonical } = getState().global
    Object.keys(charts).forEach(chartName => {
      const { data, provider, parser = x => x } = charts[chartName]
      const { [provider]: canonicalData } = canonical
      let req = null
      if (!isEmpty(data)) return
      if (canonicalData) {
        req = Promise.resolve(parser(canonical)).then(chart =>
          dispatch(setChartData({ chartName, chart }))
        )
      } else {
        req = fetch(provider)
        req
          .then(d => (d.ok ? d.json() : Promise.reject(d.statusText)))
          .then(
            canonical =>
              dispatch(setCanonicalData({ [provider]: canonical })) ||
              Promise.resolve(canonical)
          )
          .then(res => Promise.resolve(parser(res)))
          .then(chart => dispatch(setChartData({ chartName, chart })))
          .catch(err => console.warn(err))
      }
      requests.push(req)
    })
    return Promise.all(requests)
  }
)

export const setType = createAction('setType:global')
export const togglePane = createAction('global:togglePane')
export const setLayerOpacity = createAction('setLayerOpacity')
