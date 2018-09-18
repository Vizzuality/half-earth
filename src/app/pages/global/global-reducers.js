import includes from 'lodash/includes';
import difference from 'lodash/difference';
import merge from 'lodash/fp/merge';
import filter from 'lodash/filter';
import map from 'lodash/map';
import * as earthometerActions from 'components/earthometer-multi/earthometer-multi-actions';
import * as cartoActions from 'providers/carto/carto-actions';
import * as mapReducers from 'pages/map/map-reducers';
import * as regionalReducers from 'pages/regional/regional-reducers';
import * as actions from './global-actions';
import * as paneReducers from 'components/pane/pane-reducers';

const { togglePane, setLayerOpacity } = paneReducers;

const toPayload = payload => ({ payload });
const layerToNum = l => Number(l.name.replace('prioritization-of-places-', ''));
const selectSelector = (state, { payload: { section, selector, selection } }) =>
  merge(state, { sections: { [section]: { selectors: { [selector]: { selected: selection } } } } });

const filterSelector = (state, { payload: { section, selection } }) => {
  const { selections } = state.sections[section];
  const toHide = Object.keys(selections).map(v => selections[v]);

  return merge(
    merge(state, mapReducers.hideLayers(state, toPayload(toHide))),
    mapReducers.selectLayer(state, toPayload({ name: selections[selection] }))
  );
};

const slideLayers = nameId => (state, { payload: value }) => {
  const { layers } = state;
  const desiredLayers = filter(layers, l => includes(l.name, nameId));
  const restLayers = difference(layers, desiredLayers);
  const visibleLayers = map(desiredLayers, (l, i) => {
    const nextLayer = desiredLayers[i + 1];
    const notInNextLayer = nextLayer ? value < layerToNum(nextLayer) : true;
    if (value >= layerToNum(l) && notInNextLayer) {
      l.visible = true;
    } else {
      l.visible = false;
    }
    return l;
  });

  return { ...state, layers: [ ...restLayers, ...visibleLayers ] };
};

export default {
  [cartoActions.gotCartoTiles]: (state, { payload }) =>
    mapReducers.updateLayer(state, { ...payload, payload: layer => ({ url: payload.url, carto: null }) }),
  [actions.selectGlobalSelector]: (state, { payload }) => {
    const { section, selector, selection } = payload;
    const filtered = filterSelector(state, toPayload(payload));
    return selectSelector(filtered, toPayload({ section, selector, selection }));
  },
  [earthometerActions.setLandSaved]: slideLayers('prioritization-of-places'),
  [actions.toggleGlobalLayer]: mapReducers.toggleLayer,
  [actions.setGlobalSection]: regionalReducers.setRegionalSection,
  [actions.setType]: regionalReducers.setType,
  [actions.setCanonicalData]: (state, { payload }) => ({ ...state, canonical: { ...state.canonical, ...payload } }),
  [actions.setChartData]: (state, { payload }) => ({
    ...state,
    charts: { ...state.charts, [payload.chartName]: { ...state.charts[payload.chartName], data: payload.chart } }
  }),
  [actions.togglePane]: togglePane,
  [actions.setLayerOpacity]: setLayerOpacity
};
