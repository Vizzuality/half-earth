import { createAction } from 'redux-actions'
import { createThunkAction } from 'app/utils/redux'

const { fetch } = window

export const selectRegionalSelector = createAction(
  'selectRegionalSelector',
  null,
  ({ selection }) => ({
    analytics: ['regional', 'Change species on map', `Change to ${selection}`]
  })
)
export const toggleRegionalLayer = createAction(
  'toggleRegionalLayer',
  null,
  ({ name }) => {
    const text = ['road-building', 'urban-development'].includes(name)
      ? 'Change Human activities on the map'
      : 'Change protection type'
    return {
      analytics: ['regional', text, name]
    }
  }
)
export const setRegionalSection = createAction('setRegionalSection')
export const setType = createAction('setType')

export const openSidePopup = createAction('openSidePopup')
export const closeSidePopup = createAction('closeSidePopup')

export const filterSpeciesBy = createAction('filterSpeciesBy')
export const gotBillboards = createAction('gotBillboards')
export const getBillboards = createThunkAction(
  'getBillboards',
  payload => dispatch => {
    return fetch(
      'https://half-earth.carto.com/api/v2/sql?q=select%20*%20from%20public.reserves_centroids'
    )
      .then(d => d.json())
      .then(d => dispatch(gotBillboards(d.rows)))
  }
)
