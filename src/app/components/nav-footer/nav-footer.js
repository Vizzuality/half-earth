import { actions as popUpActions } from 'components/pop-up'
import { connect } from 'react-redux'

import reducers from './nav-footer-reducers'
import initialState from './initial-state'

import NavFooter from './nav-footer-component'

const mapStateToProps = ({ navFooter }) => ({
  popUp: navFooter.popUp
})

export { reducers, initialState }
export default connect(mapStateToProps, {
  ...popUpActions
})(NavFooter)
