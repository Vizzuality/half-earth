import React from 'react';
import Tooltip from 'rc-tooltip';

import styles from './legend-title-styles.scss';


const LegendTitleComponent = (props) => {
  const { layers, name } = props;
  return (
    <div className={styles.titleContainer}>
      {layers[0].molLogo && (
        <Tooltip
          placement="top"
          overlay={<div>Information from Map of Life</div>}
          overlayClassName="c-rc-tooltip legend-info-tooltip"
        >
          <a
            href={layers[0].logoUrl}
            className={styles.imageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src='/img/mol_short_logo.png'
              alt="logo"
            />
          </a>
        </Tooltip>
        )}
      <div>{name}</div>
    </div>
  )
};

export default LegendTitleComponent;
