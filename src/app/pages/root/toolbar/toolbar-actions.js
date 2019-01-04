import { createAction } from 'redux-tools';
import { APPv2 } from 'router';

export const updateQueryParam = createAction(APPv2);

export const toolbarAnalyticsEvent = createAction('toolbarAnalytics', null, (
  actionName,
  value
) => ({ analytics: [ 'Map menu', `${actionName}`, `${value}` ] }));
