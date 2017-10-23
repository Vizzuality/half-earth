import { connect } from 'react-redux'
import { actions as popUpActions } from 'components/pop-up'
import LogosComponent from './logos-component'

const mapStateToProps = ({ navFooter }) => ({
  popUp: navFooter.popUp
})

export default connect(mapStateToProps, popUpActions)(LogosComponent)
