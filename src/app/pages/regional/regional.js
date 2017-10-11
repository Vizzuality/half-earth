import { Component, createElement } from 'react'
import { connect } from 'react-redux'
import { renderDropdown, renderToggle } from 'components/explorable'
import { requestCartos } from 'pages/map/map-utils'
import { actions as mapActions } from 'pages/map'
import { actions as sectionActions } from 'providers/section'
import { actions as cartoActions } from 'providers/carto'
import reducers from './regional-reducers'
import initialState from './regional-initial-state'
import RegionalComponent from './regional-component'

class RegionalConTainer extends Component {
  constructor (props) {
    super(props)
    const { getCartoTiles, selectLayer } = props
    const { layers } = props.regional
    requestCartos({ layers, getCartoTiles })
    selectLayer({ name: 'stork-flyways' })
  }
  render () {
    return createElement(RegionalComponent, this.props)
  }
}

const mapStateToProps = ({ map, regional, sidebar }) => {
  return {
    map,
    sidebar,
    regional,
    renderToggle: renderToggle(map.layers, ':regional'),
    renderDropdown: renderDropdown(regional.sections)
  }
}

export { reducers, initialState }
export default connect(mapStateToProps, {
  ...mapActions,
  ...sectionActions,
  ...cartoActions
})(RegionalConTainer)
