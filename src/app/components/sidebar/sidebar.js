import { connect } from 'react-redux'
import * as actions from './sidebar-actions'
import reducers from './sidebar-reducers'
import initialState from './sidebar-initial-state'
import SidebarComponent from './sidebar-component'

const mapStateToProps = ({ sidebar, ...state }) => ({
  ...sidebar,
  sidePopupOpen: state.regional.sidePopup.open
})

export { actions, reducers, initialState }
export default connect(mapStateToProps, actions)(SidebarComponent)
