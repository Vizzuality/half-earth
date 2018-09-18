import { connect } from 'react-redux';
import * as actions from './root-actions';
import reducers, { initialState } from './root-reducers';

import MapComponent from './root-component';
import { mapStateToProps } from './root-selectors';

export const reduxConfig = { actions, reducers, initialState };

export default connect(mapStateToProps, actions)(MapComponent);
