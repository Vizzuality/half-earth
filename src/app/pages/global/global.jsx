import React from 'react'
import { connect } from 'react-redux'
import find from 'lodash/find'

import XToggle from 'components/explorable/toggle'
import { actions as mapActions } from 'pages/map'

import pageStyles from 'styles/pages.scss'

const Global = ({ toggleLayer, map, ...props }) => (
  <div className={pageStyles.container}>
    <h1>Global</h1>
    {map.layers
      .map(d => d.name)
      .sort()
      .map(name => (
        <XToggle
          key={name}
          active={find(map.layers, { name }).visible}
          onClick={() => toggleLayer({ name })}
          className={pageStyles.toggle}
        >
          Toggle {name}
        </XToggle>
      ))}
  </div>
)

const mapStateToProps = ({ map }) => ({ map })

export default connect(mapStateToProps, mapActions)(Global)
