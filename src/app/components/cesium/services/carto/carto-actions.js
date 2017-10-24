import { createAction } from 'redux-actions'
import { createThunkAction } from 'app/utils/redux'
const { fetch } = window

export const fetchingCartoTiles = createAction('fetchingCartoTiles')
export const gotCartoTiles = createAction('gotCartoTiles')
export const getCartoTiles = createThunkAction(
  'getCartoTiles',
  ({ account, apiv, config, name, tileFormat }) => dispatch => {
    dispatch(fetchingCartoTiles())

    return fetch(
      `https://${account}.carto.com/api/${apiv}/map?config=${encodeURIComponent(
        JSON.stringify(config)
      )}`
    )
      .then(d => d.json())
      .then(({ layergroupid, cdn_url: { templates: { https: { url } } } }) => ({
        layergroupid,
        url
      }))
      .then(({ layergroupid, url }) => {
        const tilesUrl = `${url}/${account}/api/${apiv}/map/${layergroupid}/{z}/{x}/{y}.${tileFormat}`
        dispatch(gotCartoTiles({ url: tilesUrl, name }))
      })
  }
)
