import { actions as popUpActions } from 'components/pop-up';
import { connect } from 'react-redux';

import reducers from './legend-layers-reducer';
import initialState from './initial-state';

import LegendLayers from './legend-layers-component';

const mapStateToProps = ({ legendLayers }) => ({
  popUp: legendLayers.popUp
});

export { reducers, initialState };
export default connect(
  mapStateToProps,
  popUpActions
)(LegendLayers);
