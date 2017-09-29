import React from 'react'
import { connect } from 'react-redux'

import find from 'lodash/find'
import lowerCase from 'lodash/lowerCase'
import kebabCase from 'lodash/kebabCase'

import GlobalComponent from './global-component'
import XToggle from 'components/explorable/toggle'

import { actions as mapActions } from 'pages/map'
import toggleTheme from 'styles/themes/toggle.scss'

const renderToggle = layers => toggle => (label, n) => {
  const name = n || kebabCase(lowerCase(label))
  return (
    <XToggle
      theme={toggleTheme}
      key={name}
      active={find(layers, { name }) && find(layers, { name }).visible}
      onClick={() => toggle({ name })}
      className={toggleTheme.toggle}
    >
      {label}
    </XToggle>
  )
}

const mapStateToProps = ({ map }) => ({
  map,
  renderToggle: renderToggle(map.layers)
})

export default connect(mapStateToProps, mapActions)(GlobalComponent)
