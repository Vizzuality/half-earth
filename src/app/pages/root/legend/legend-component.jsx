import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Legend, { LegendItemTypes, LegendListItem, LegendItemToolbar } from 'wri-api-components/dist/legend';

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
    const { datasets, handleRemoveLayer, handleInfoClick } = this.props;
    const toolbar = <LegendItemToolbar onChangeInfo={handleInfoClick} onRemoveLayer={handleRemoveLayer} />;

    return (
      <div className={styles.legend}>
        <Legend
          sortable={false}
          onChangeOrder={datasetIds => {
            console.info(datasetIds);
          }}
        >
          {datasets.map((dataset, i) => (
            <LegendListItem index={i} key={dataset.slug} layerGroup={dataset} toolbar={toolbar}>
              <LegendItemTypes />
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
  datasets: []
};

export default LegendComponent;
