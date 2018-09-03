import { connect } from 'react-redux';
import { getLegendState } from './legend-selectors';
import Component from './legend-component';

const mapStateToProps = getLegendState;

export default connect(mapStateToProps)(Component);
