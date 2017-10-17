import { createElement, Component } from 'react'
import { withRouter } from 'react-router-dom'
import { actions as popUpActions } from 'components/pop-up'
import { connect } from 'react-redux'

import reducers from './nav-footer-reducers'
import initialState from './initial-state'

import NavFooter from './nav-footer-component'

class NavFooterContainer extends Component {
  goForth = () => {
    const { history, to } = this.props
    history.push(to)
  }

  render () {
    const { history } = this.props
    const { goForth } = this
    return createElement(NavFooter, {
      ...this.props,
      goForth,
      goBack: history.goBack
    })
  }
}

const mapStateToProps = ({ navFooter }) => ({
  popUp: navFooter.popUp
})

export { reducers, initialState }
export default connect(mapStateToProps, {
  ...popUpActions
})(withRouter(NavFooterContainer))
