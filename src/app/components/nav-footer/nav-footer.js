import { connect } from 'react-redux';
import * as analyticsActions from 'providers/analytics/analytics-actions';
import reducers from './nav-footer-reducers';
import initialState from './initial-state';

import NavFooter from './nav-footer-component';

export const reduxConfig = { reducers, initialState };
export default connect(
  null,
  analyticsActions
)(NavFooter);
