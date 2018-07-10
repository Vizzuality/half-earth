import { connect } from 'react-redux';
import * as actions from './sidebar-actions';
import reducers from './sidebar-reducers';
import styles from './sidebar-styles';
import initialState from './sidebar-initial-state';
import SidebarComponent from './sidebar-component';

const mapStateToProps = ({ sidebar, ...state }) => ({
  ...sidebar,
  section: state.location.payload.section || 'home',
  sidePopupOpen: state.regional.sidePopup.open
});

export { actions, reducers, initialState, styles };
export default connect(
  mapStateToProps,
  actions
)(SidebarComponent);
