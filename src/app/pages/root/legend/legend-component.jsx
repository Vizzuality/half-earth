import React from 'react';
import Legend, {
  LegendItemTimeline,
  LegendItemTypes,
  LegendListItem
} from 'wri-api-components/dist/legend';
import LegendToolBar from './toolbar';

// Icons neccesaries for the legend component
import arrowUpIcon from 'assets/icons/icon-arrow-up.svg'; // eslint-disable-line
import arrowDownIcon from 'assets/icons/icon-arrow-down.svg'; // eslint-disable-line
import dragDotsIcon from 'assets/icons/icon-drag-dots.svg'; // eslint-disable-line

import styles from './legend-styles.scss';

const LegendComponent = ({ layers }) => (
  <div className={styles.legend}>
    <Legend
      onChangeOrder={datasetIds => {
        console.info(datasetIds);
      }}
    >
      {layers.map((lg, i) => (
        <LegendListItem
          index={i}
          key={lg.dataset}
          layerGroup={lg}
          toolbar={<LegendToolBar />}
        >
          <LegendItemTypes />
          <LegendItemTimeline onChangeLayer={l => console.info(l)} />
        </LegendListItem>
      ))}
    </Legend>
  </div>
);

LegendComponent.defaultProps = {
  layers: []
};

export default LegendComponent;
