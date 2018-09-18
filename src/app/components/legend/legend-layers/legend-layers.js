import * as popUpActions from 'components/pop-up/pop-up-actions';
import { connect } from 'react-redux';

import reducers from './legend-layers-reducer';
import initialState from './initial-state';

import LegendLayers from './legend-layers-component';

const mapStateToProps = ({ legendLayers }) => ({ popUp: legendLayers.popUp });

export const reduxConfig = { reducers, initialState };
export default connect(mapStateToProps, popUpActions)(LegendLayers);
