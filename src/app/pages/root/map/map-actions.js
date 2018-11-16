import { createAction } from 'redux-tools';
import { APPv2 } from 'router';

export const updateQueryParam = createAction(APPv2);

export const gridCellSelectionAnalyticsEvent = createAction('selectGridCell', null, cellId => ({
  analytics: [ 'Landscape view', 'User clicks an area', `${cellId}` ]
}));
