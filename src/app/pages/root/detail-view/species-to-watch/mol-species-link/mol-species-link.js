import { connect } from 'react-redux';
import Component from './mol-species-link-component';
import * as actions from './mol-species-link-actions';

export default connect(null, actions)(Component);
