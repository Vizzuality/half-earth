import { connect } from 'react-redux';
import { actions as analyticsActions } from 'providers/analytics';
import reducers from './nav-footer-reducers';
import initialState from './initial-state';

import NavFooter from './nav-footer-component';

export { reducers, initialState };
export default connect(
  null,
  analyticsActions
)(NavFooter);
