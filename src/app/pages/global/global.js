import React from 'react'
import { connect } from 'react-redux'

import find from 'lodash/find'
import lowerCase from 'lodash/lowerCase'

import GlobalComponent from './global-component'
import XToggle from 'components/explorable/toggle'

import { actions as mapActions } from 'pages/map'
import pageStyles from 'styles/pages.scss'

const renderToggle = layers => toggle => (label, n) => {
  const name = n || lowerCase(label)

  return (
    <XToggle
      key={name}
      active={find(layers, { name }) && find(layers, { name }).visible}
      onClick={() => toggle({ name })}
      className={pageStyles.toggle}
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
