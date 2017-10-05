import React, { Component, cloneElement } from 'react'
import cx from 'classnames'

import styles from './map-styles.scss'

/*
  <button
    style={{ display: 'none', position: 'fixed', zIndex: '100' }}
    onClick={() => console.log('getPos') || getPos()}
  >
    getPos
  </button>
*/

const layerKey = layer => `layer-${layer.key}`

class CesiumMap extends Component {
  render () {
    const { className, layers: cLayers, mapId, children, viewer } = this.props
    return (
      <div className={cx(className, styles.map)} id={mapId}>
        {React.Children.map(
          children,
          ch =>
            ch && !this[layerKey(ch)] // prevent remounting
              ? cloneElement(ch, {
                cLayers,
                viewer,
                ref: el => {
                  this[layerKey(ch)] = Boolean(ch.url)
                }
              })
              : null
        )}
      </div>
    )
  }
}

export default CesiumMap
