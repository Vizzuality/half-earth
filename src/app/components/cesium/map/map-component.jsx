import React, { cloneElement } from 'react';
import cx from 'classnames';

import styles from './map-styles.scss';

function CesiumMap(props) {
  const {
    className,
    layers: cLayers,
    mapId,
    children,
    viewer,
    clickedPosition,
    hoverPosition
  } = props;
  return (
    <div className={cx(className, styles.map)} id={mapId}>
      {React.Children.map(children, child => {
        if (!child) return null;
        return cloneElement(child, {
          cLayers,
          viewer,
          clickedPosition,
          hoverPosition
        });
      })}
    </div>
  );
}

export default CesiumMap;
