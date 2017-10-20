import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import LocalComponent from './local-component'
import { actions as popUpActions } from 'components/pop-up'
import { actions as sectionActions } from 'providers/section'
import reducers from './local-reducers'
import initialState from './initial-state'
import { renderToggle } from 'components/explorable'

class Local extends Component {
  constructor (props) {
    super(props)
    props.setSection('local')
  }

  render () {
    return createElement(LocalComponent, this.props)
  }
}

const mapStateToProps = ({ map, local, sidebar }) => ({
  local,
  sidebar,
  renderToggle: renderToggle(map.layers)
})

export { reducers, initialState }
export default connect(mapStateToProps, {
  ...popUpActions,
  ...sectionActions
})(Local)
