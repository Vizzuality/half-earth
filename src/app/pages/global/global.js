import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'

import { renderDropdown, renderToggle } from 'components/explorable'
import GlobalComponent from './global-component'
import { requestCartos } from 'pages/map/map-utils'
import { actions as cartoActions } from 'providers/carto'
import { actions as sectionActions } from 'providers/section'
import * as actions from './global-actions'
import reducers from './global-reducers'
import initialState from './global-initial-state'

class GlobalContainer extends Component {
  constructor (props) {
    super(props)
    const {
      getCartoTiles,
      setGlobalSection,
      setSection,
      layers,
      getWhereToProtectSpiderData
    } = props
    requestCartos({ layers, getCartoTiles })
    setGlobalSection('global:1')
    setSection('global:1')
    getWhereToProtectSpiderData()
  }
  render () {
    return createElement(GlobalComponent, assign(this.props))
  }
}

const mapStateToProps = ({
  map,
  global,
  section,
  earthSaved,
  getWhereToProtectSpiderData
}) => {
  const index = Math.round(earthSaved.value)
  const whereToProtectScenario = global.whereToProtect.data[index] || []
  const whereToProtectSpider = {
    dimensions: [
      {
        key: 'percentSpeciesMeetingTargetProtectedAreaViaAny',
        style: {
          fill: '#8366e4',
          stroke: '#8366e4',
          fillOpacity: 0.18
        }
      },
      {
        key: 'percentProtectedCurrently'
      }
    ],
    data: whereToProtectScenario
  }

  return {
    map,
    whereToProtectSpider,
    getWhereToProtectSpiderData,
    layers: global.layers,
    section: section.section,
    protectedAnimalsSpider: global.protectedAnimals,
    renderToggle: renderToggle(global.layers),
    renderDropdown: renderDropdown(global.sections)
  }
}

export { actions, reducers, initialState }
export default connect(mapStateToProps, {
  ...actions,
  ...cartoActions,
  ...sectionActions
})(GlobalContainer)
