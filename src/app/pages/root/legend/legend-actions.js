import { createAction } from 'redux-tools';
import { APPv2 } from 'router';

export const updateQueryParam = createAction(APPv2);

export const legendInteractionAnalyticsEvent = createAction('legendInteraction', null, (
  actionName,
  layerName
) => ({ analytics: [ 'Legend', `${actionName}`, `${layerName}` ] }));
