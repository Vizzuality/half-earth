import React from 'react'
import cx from 'classnames'

import styles from './map-styles.scss'

const CesiumMap = ({ className, layers, mapId, children }) => (
  <div className={cx(className, styles.map)} id={mapId}>
    {React.Children.map(children, ch =>
      React.cloneElement(ch, { ...ch.props, layers })
    )}
  </div>
)

export default CesiumMap
