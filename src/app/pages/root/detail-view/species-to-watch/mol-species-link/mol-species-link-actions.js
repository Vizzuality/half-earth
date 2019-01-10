import { createAction } from 'redux-tools';

export const speciesToWatchAnalyticsEvent = createAction(
  'landscapeAnalytics',
  null,
  speciesName => ({ analytics: [ 'Landscape view', 'Species to watch', `${speciesName}` ] })
);
