import { createAction } from 'redux-tools';

// export const setLandSaved = createAction('setLandSaved', null, payload => ({
//   analytics: ['global', 'Change protection Coverage', `% protected ${payload}`]
// }))
export const setLandSaved = createAction('setLandSaved');
export const setOceanSaved = createAction('setOceanSaved');
export const setTab = createAction('setTab');
