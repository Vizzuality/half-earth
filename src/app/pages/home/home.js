import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { actions as mapActions } from 'pages/map'
import { actions as analyticsActions } from 'providers/analytics'
import HomeComponent from './home-component'

const analytics = {
  onClick: ['Landing', 'Click Play', 'Click Play']
}

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    props.resetLayers()
  }
  onClick = () => {
    const { history, trackEvent } = this.props
    trackEvent(...analytics.onClick)

    history.push('/local')
  }

  render () {
    return createElement(HomeComponent, {
      ...this.props,
      onClick: this.onClick
    })
  }
}

export default withRouter(
  connect(null, { ...mapActions, ...analyticsActions })(HomeContainer)
)
