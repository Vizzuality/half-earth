import { createAction } from 'redux-tools';
import { APPv2 } from 'router';

export const setIsTouchScreenState = createAction('setIsTouchScreenState');
export const updateQueryParam = createAction(APPv2);

export const sidebarAnalyticsEvent = createAction('sidebarAnalytics', null, value => ({
  analytics: [ 'Map menu', 'Sidebar is open?', `${value}` ]
}));
