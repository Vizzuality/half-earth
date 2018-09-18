import { createAction } from 'redux-tools';

export const openPopUp = createAction('openPopUp', ({ meta, payload }) => payload, ({ meta }) => meta);
export const openPopUpNavFooter = createAction('openPopUpNavFooter');
export const openPopUpLegend = createAction('openPopUpLegend');
export const closePopUp = createAction('closePopUp');
