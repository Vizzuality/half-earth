import { Component, createElement } from 'react'
import { connect } from 'react-redux'

import { assign } from 'utils'

import { renderDropdown, renderToggle } from 'components/explorable'
import GlobalComponent from './global-component'
import { requestCartos } from 'pages/map/map-utils'
import { actions as cartoActions } from 'providers/carto'
import { actions as sectionActions } from 'providers/section'
import { getSection, getType } from './global-selectors'
import * as actions from './global-actions'
import reducers from './global-reducers'
import initialState from './global-initial-state/global-initial-state'

class GlobalContainer extends Component {
  constructor (props) {
    super(props)
    const {
      getCartoTiles,
      setGlobalSection,
      setSection,
      layers,
      getChartData
    } = props
    requestCartos({ layers, getCartoTiles })
    setGlobalSection('global:1')
    setSection('global:1')
    getChartData()
  }
  render () {
    return createElement(GlobalComponent, assign(this.props))
  }
}

const mapStateToProps = state => {
  const { map, global, section, earthometer } = state

  const index = Math.round(earthometer.landSaved.value)
  const globalConservationPrioritization = {
    ...global.charts.globalConservationPrioritization,
    data: (global.charts.globalConservationPrioritization.data[index] || [])
      .map((d, i, l) => ({ ...d, isLast: i === l.length - 1 }))
  }
  return {
    map,
    selectedType: getType(getSection(state)),
    layers: global.layers,
    section: section.section,
    renderToggle: renderToggle(global.layers),
    renderDropdown: renderDropdown(global.sections),
    ...global.charts,
    globalConservationPrioritization
  }
}

export { actions, reducers, initialState }
export default connect(mapStateToProps, {
  ...actions,
  ...cartoActions,
  ...sectionActions
})(GlobalContainer)
