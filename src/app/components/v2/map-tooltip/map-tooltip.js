import { connect } from 'react-redux';
import * as actions from './map-tooltip-actions';
import { mapStateToProps } from './map-tooltip-selectors';
import Component from './map-tooltip-component';

export default connect(mapStateToProps, actions)(Component);
