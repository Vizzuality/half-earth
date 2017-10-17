import { createElement, Component } from 'react'
import { withRouter } from 'react-router-dom'

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

export default withRouter(NavFooterContainer)
