import { createThunkAction } from 'app/utils/redux'
const { ga } = window

export const trackEvent = createThunkAction('trackEvent', params => dispatch =>
  ga(({ send }) => send('event', ...params))
)
