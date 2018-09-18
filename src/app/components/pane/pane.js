import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import identity from 'lodash/identity';
import find from 'lodash/find';
import kebabCase from 'lodash/kebabCase';
import last from 'lodash/last';
import { pick } from 'app/utils';
import * as regionalActions from 'pages/regional/regional-actions';
import * as globalActions from 'pages/global/global-actions';
import { layersInfo } from 'data/layers-info';
import PaneComponent from './pane-component';

import reducers from './pane-reducers';
import * as actions from './pane-actions';
import initialState from './pane-initial-state';

const dToKey = d => kebabCase(last(d.name.split(':')));
const addInfo = (data, infos, page) =>
  data &&
    data.map(datum => ({
      ...datum,
      info: pick(find(infos, { key: dToKey(datum) }) || find(infos, { key: `${page}-${dToKey(datum)}` }), 'key')
    })) ||
    [];

const mapStateToProps = (state, { page, ...props }) => {
  const { popup, opacities } = state.pane;
  const { layers, panes } = state[page];
  return {
    layers: addInfo(layers, layersInfo, page),
    panes: addInfo(panes, layersInfo, page),
    opacities,
    popup,
    selectedPopup: find(layersInfo, { key: popup.selected }) || find(layersInfo, { key: `${page}-${popup.selected}` }),
    page
  };
};

const mapDispatchToProps = (dispatch, { page }) => {
  // page dependent actions
  const toggleLayer = page === 'regional'
    ? regionalActions.toggleRegionalLayer
    : page === 'global' ? globalActions.toggleGlobalLayer : identity;

  const setLayerOpacity = page === 'regional'
    ? regionalActions.setLayerOpacity
    : page === 'global' ? globalActions.setLayerOpacity : identity;

  const togglePane = page === 'regional'
    ? regionalActions.togglePane
    : page === 'global' ? globalActions.togglePane : identity;

  return bindActionCreators({ ...actions, toggleLayer, setLayerOpacity, togglePane }, dispatch);
};

export const reduxConfig = { actions, reducers, initialState };
export default connect(mapStateToProps, mapDispatchToProps)(PaneComponent);
