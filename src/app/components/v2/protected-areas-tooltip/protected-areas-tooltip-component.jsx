import React from 'react';
import PropTypes from 'prop-types';
import { uniqBy } from 'lodash';
import styles from './protected-areas-tooltip-styles.scss';

const ProtectedAreasTooltipComponent = ({ x, y, reserves }) => (
  <div
    className={styles.container}
    style={{
      transform: `translate(calc(${x}px - 50%), calc(${y - 18}px - 100%))`,
      transformOrigin: 'center bottom'
    }}
  >
    {uniqBy(reserves, 'name').map(r => (
      <div className={styles.reserve}>
        <p className={styles.park}>{r.park}</p>
        <p className={styles.name}>{r.name}</p>
      </div>
    ))}
  </div>
);

ProtectedAreasTooltipComponent.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  reserves: PropTypes.array
};

ProtectedAreasTooltipComponent.defaultProps = { x: undefined, y: undefined, reserves: undefined };

export default ProtectedAreasTooltipComponent;
