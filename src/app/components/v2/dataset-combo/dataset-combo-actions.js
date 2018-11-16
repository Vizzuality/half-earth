import { createAction } from 'redux-tools';
import { APPv2 } from 'router';

export const updateQueryParam = createAction(APPv2);

export const addLayerAnalyticsEvent = createAction('addLayer', null, ({ slug, query }) => {
  const viewMode = query && query.terrain ? 'Landscape view' : 'Map menu';
  return { analytics: [ viewMode, 'Add layer', `${slug}` ] };
});

export const removeLayerAnalyticsEvent = createAction('removeLayer', null, ({ slug, query }) => {
  const viewMode = query && query.terrain ? 'Landscape view' : 'Map menu';
  return { analytics: [ viewMode, 'Remove layer', `${slug}` ] };
});
