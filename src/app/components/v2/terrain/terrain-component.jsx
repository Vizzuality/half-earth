import React from 'react';
import cx from 'classnames';

import styles from './terrain-styles.scss';

function CesiumMap(props) {
  const { mapId, viewer, className, children } = props;
  return (
    <div className={cx(styles.map, className)} id={mapId}>
      {viewer && children(viewer)}
    </div>
  );
}

export default CesiumMap;
