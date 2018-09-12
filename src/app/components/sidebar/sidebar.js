import { connect } from 'react-redux';
import * as actions from './sidebar-actions';
import reducers from './sidebar-reducers';
import initialState from './sidebar-initial-state';
import SidebarComponent from './sidebar-component';

const mapStateToProps = ({ sidebar, ...state }) => ({
  ...sidebar,
  section: (state.location.payload && state.location.payload.section) || 'home',
  sidePopupOpen: state.regional.sidePopup.open
});

export const reduxConfig = { actions, reducers, initialState };
export default connect(
  mapStateToProps,
  actions
)(SidebarComponent);
