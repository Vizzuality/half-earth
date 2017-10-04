import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import { actions as mapActions } from 'pages/map'
import HomeComponent from './home-component'

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    props.resetLayers()
  }
  render () {
    return createElement(HomeComponent, this.props)
  }
}

export default connect(null, mapActions)(HomeContainer)
