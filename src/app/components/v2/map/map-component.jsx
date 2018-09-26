import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './map-styles.scss';

function CesiumMap(props) {
  const { mapId, viewer, className, children } = props;
  return (
    <div className={cx(styles.map, className)} id={mapId}>
      {viewer && children(viewer)}
    </div>
  );
}

CesiumMap.propTypes = {
  mapId: PropTypes.string.isRequired,
  className: PropTypes.string,
  viewer: PropTypes.object,
  children: PropTypes.func
};

CesiumMap.defaultProps = { className: '', viewer: undefined, children: null };

export default CesiumMap;
