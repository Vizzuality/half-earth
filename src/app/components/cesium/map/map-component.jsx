import React, { Component, cloneElement } from 'react'
import cx from 'classnames'

import styles from './map-styles.scss'

const layerKey = layer => `layer-${layer.key}`

class CesiumMap extends Component {
  render () {
    const { className, layers: cLayers, mapId, children, viewer } = this.props
    return (
      <div className={cx(className, styles.map)} id={mapId}>
        {React.Children.map(
          children,
          ch =>
            ch && ch.props.url // prevent remounting
              ? cloneElement(ch, {
                cLayers,
                viewer,
                ref: el => {
                  this[layerKey(ch)] = Boolean(ch.props.url)
                }
              })
              : null
        )}
      </div>
    )
  }
}

export default CesiumMap
