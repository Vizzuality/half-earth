import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Legend, {
  LegendItemButtonOpacity,
  LegendItemButtonVisibility,
  LegendItemButtonInfo,
  LegendItemButtonRemove,
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
    const {
      datasets,
      handleChangeOrder,
      handleRemoveLayer,
      handleLayerChange,
      handleInfoClick,
      handleChangeVisibility,
      handleChangeOpacity
    } = this.props;
    const toolbar = (
      <LegendItemToolbar
        onChangeInfo={handleInfoClick}
        onChangeLayer={handleLayerChange}
        onRemoveLayer={handleRemoveLayer}
        onChangeVisibility={handleChangeVisibility}
        onChangeOpacity={handleChangeOpacity}
      >
        <LegendItemButtonOpacity />
        <LegendItemButtonVisibility />
        <LegendItemButtonInfo />
        <LegendItemButtonRemove />
      </LegendItemToolbar>
    );
    return (
      <div className={styles.legend}>
        <Legend sortable={datasets && datasets.length > 1} onChangeOrder={handleChangeOrder}>
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
