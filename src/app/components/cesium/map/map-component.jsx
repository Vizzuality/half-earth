import React, { cloneElement } from 'react';
import cx from 'classnames';

import styles from './map-styles.scss';

function CesiumMap(props) {
  const {
    className,
    layersCollection,
    mapId,
    children,
    viewer,
    clickedPosition,
    hoverPosition
  } = props;
  return (
    <div className={cx(styles.map, className)} id={mapId}>
      {React.Children.map(children, child => {
        if (!child) return null;
        return cloneElement(child, {
          layersCollection,
          viewer,
          clickedPosition,
          hoverPosition
        });
      })}
    </div>
  );
}

export default CesiumMap;
