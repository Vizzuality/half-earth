import React from 'react';
import { ResponsiveORFrame } from 'semiotic';

import styles from './barchart-styles.scss';

const axis = {
  orient: 'left',
  className: styles.tickLabel
};

const Barchart = ({ data, labelKey, dataKey }) => (
  <div className={styles.barchart}>
    <ResponsiveORFrame
      responsiveWidth
      responsiveHeight
      data={data.map(d => ({ ...d, domain: 70 }))}
      type="bar"
      axis={axis}
      oPadding={5}
      oAccessor={d => d[labelKey]}
      oLabel={d => (
        <text
          className={styles.tickLabel}
          fontSize="10"
          transform="translate(-20, 15)"
        >
          {d}
        </text>
      )}
      rAccessor={dataKey}
      pieceClass={styles.mark}
    />
  </div>
);

export default Barchart;
