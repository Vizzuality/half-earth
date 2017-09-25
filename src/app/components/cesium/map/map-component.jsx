import React from 'react'
import cx from 'classnames'

import styles from './map-styles.scss'

const CesiumMap = ({ className, layers, mapId, children, getPos, viewer }) => (
  <div>
    <div className={cx(className, styles.map)} id={mapId}>
      {React.Children.map(children, ch =>
        React.cloneElement(ch, { cLayers: layers, viewer })
      )}
    </div>
    <button
      style={{ display: 'none', position: 'fixed', zIndex: '100' }}
      onClick={() => console.log('getPos') || getPos()}
    >
      getPos
    </button>
  </div>
)

export default CesiumMap
