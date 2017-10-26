import { createThunkAction } from 'app/utils/redux'
const { ga } = window

export const trackEvent = createThunkAction('trackEvent', params =>
  ga(({ send }) => send('event', ...params))
)
