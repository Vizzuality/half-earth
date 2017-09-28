import React from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'

import XToggle from 'components/explorable/toggle'
import { actions as mapActions } from 'pages/map'

import pageStyles from 'styles/pages.scss'

const Global = ({ toggleLayer, map, ...props }) => (
  <div className={pageStyles.container}>
    <h1>Global</h1>
    <XToggle
      active={find(map.layers, { name: 'mammals' }).visible}
      onClick={() => toggleLayer({ name: 'mammals' })}
      className={pageStyles.toggle}
    >
      Toggle Mammals
    </XToggle>
    <XToggle
      active={find(map.layers, { name: 'birds' }).visible}
      onClick={() => toggleLayer({ name: 'birds' })}
      className={pageStyles.toggle}
    >
      Toggle birds
    </XToggle>
    <XToggle
      active={find(map.layers, { name: 'KPA' }).visible}
      onClick={() => toggleLayer({ name: 'KPA' })}
      className={pageStyles.toggle}
    >
      Toggle KPA
    </XToggle>
  </div>
)

const mapStateToProps = ({ map }) => ({ map })

export default connect(mapStateToProps, mapActions)(Global)
