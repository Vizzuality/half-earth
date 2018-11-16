import { createAction } from 'redux-tools';
import { APPv2 } from 'router';

export const updateQueryParam = createAction(APPv2);

export const taxasChangeAnalyticsEvent = createAction('selectTaxa', null, taxaName => ({
  analytics: [ 'Landscape view', 'Filter species', `${taxaName}` ]
}));
