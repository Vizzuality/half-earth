import { connect } from 'react-redux'
import ButtonComponent from './button-component.jsx'
import { actions as sidebarActions } from 'providers/sidebar'

const mapStateToProps = ({ sidebar }) => ({ sidebar })

export default connect(mapStateToProps, sidebarActions)(ButtonComponent)
