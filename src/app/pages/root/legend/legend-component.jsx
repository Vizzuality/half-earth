import React from 'react';
import Legend, {
  LegendItemTimeline,
  LegendItemTypes,
  LegendListItem
} from 'wri-api-components/dist/legend';
import LegendToolBar from './toolbar';

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

export default LegendComponent;
