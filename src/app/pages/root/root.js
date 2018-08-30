import { connect } from 'react-redux';
import * as actions from './root-actions';
import { getRootState } from './root-selectors';
import Component from './root-component';

const mapStateToProps = getRootState;

export default connect(
  mapStateToProps,
  actions
)(Component);
