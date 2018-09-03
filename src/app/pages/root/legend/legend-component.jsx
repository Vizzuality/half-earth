import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Legend, {
  LegendItemTimeline,
  LegendItemTypes,
  LegendListItem,
  LegendItemToolbar
} from 'wri-api-components/dist/legend';

// Icons neccesaries for the legend component
import 'assets/icons/icon-arrow-up.svg';
import 'assets/icons/icon-arrow-down.svg';
import 'assets/icons/icon-drag-dots.svg';
import 'assets/icons/icon-info.svg';
import 'assets/icons/icon-cross.svg';
import 'assets/icons/icon-opacity.svg';
import 'assets/icons/icon-hide.svg';
import 'assets/icons/icon-show.svg';

import styles from './legend-styles.scss';

class LegendComponent extends PureComponent {
  render() {
    const { layers, handleRemoveLayer, handleInfoClick } = this.props;
    const toolbar = <LegendItemToolbar onChangeInfo={handleInfoClick} onRemoveLayer={handleRemoveLayer} />;

    return (
      <div className={styles.legend}>
        <Legend
          onChangeOrder={datasetIds => {
            console.info(datasetIds);
          }}
        >
          {layers.map((layer, i) => (
            <LegendListItem index={i} key={layer.slug} sortable={false} layerGroup={layer} toolbar={toolbar}>
              <LegendItemTypes />
              <LegendItemTimeline onChangeLayer={l => console.info(l)} />
            </LegendListItem>
          ))}
        </Legend>
      </div>
    );
  }
}

LegendComponent.defaultProps = {
  handleInfoClick: PropTypes.func.isRequired,
  handleRemoveLayer: PropTypes.func.isRequired,
  layers: []
};

export default LegendComponent;
