import { createAction } from 'redux-tools';

export const setModalShareParams = createAction('setModalShareParams');

export const urlShareAnalyticsEvent = createAction('shareUrl', null, ({ url, shareType }) => ({
  analytics: [ 'Share', shareType, `${url}` ]
}));
