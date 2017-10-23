import React, { Component, cloneElement } from 'react'
import { v1 as uuid } from 'uuid'
import cx from 'classnames'

import styles from './map-styles.scss'

const layerId = layer => `${layer.type.name}-${uuid()}`

class CesiumMap extends Component {
  render () {
    const {
      className,
      layers: cLayers,
      mapId,
      children,
      viewer,
      clickedPosition,
      hoverPosition
    } = this.props
    return (
      <div className={cx(className, styles.map)} id={mapId}>
        {React.Children.map(children, ch => {
          if (!ch) return null
          const id = layerId(ch)

          return cloneElement(ch, {
            cLayers,
            viewer,
            clickedPosition,
            hoverPosition,
            ref: el => {
              this[id] = Boolean(ch.props.url)
            }
          })
        })}
      </div>
    )
  }
}

export default CesiumMap
