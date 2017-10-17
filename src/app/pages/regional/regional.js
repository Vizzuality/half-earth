import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import { renderDropdown, renderToggle } from 'components/explorable'
import { requestCartos } from 'pages/map/map-utils'
import * as actions from './regional-actions'
import { actions as cartoActions } from 'providers/carto'
import { actions as sectionActions } from 'providers/section'

import reducers from './regional-reducers'
import initialState from './regional-initial-state'
import RegionalComponent from './regional-component'

class RegionalConTainer extends Component {
  constructor (props) {
    super(props)
    const { getCartoTiles, setRegionalSection, setSection } = props
    const { layers } = props.regional
    requestCartos({ layers, getCartoTiles })
    setRegionalSection('regional:1')
    setSection('regional:1')
  }
  render () {
    return createElement(RegionalComponent, this.props)
  }
}

const mapStateToProps = ({ map, regional, sidebar, section }) => {
  return {
    map,
    sidebar,
    regional,
    section,
    renderToggle: renderToggle(regional.layers),
    renderDropdown: renderDropdown(regional.sections)
  }
}

export { reducers, initialState, actions }
export default connect(mapStateToProps, {
  ...cartoActions,
  ...actions,
  ...sectionActions
})(RegionalConTainer)
