import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Dropdown } from 'he-components';

import Histogram from './histogram';
import styles from './rarity-richness-styles';

class DetailViewComponent extends Component {
  render() {
    const { loading, taxas, selected, histogram, handleTaxasChange } = this.props;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.container}>
        <span>For</span>
        <Dropdown options={taxas} selected={selected} onSelect={handleTaxasChange} />
        <span>
          this area has a AVERAGE-DO-IT-DYNAMIC rarity richness and HIGH-DO-IT-DYNAMIC rarity
        </span>
        <Histogram data={histogram} />
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  selected: PropTypes.object,
  histogram: PropTypes.shape({ richness: PropTypes.array, rarity: PropTypes.array }),
  handleTaxasChange: PropTypes.func.isRequired
};

DetailViewComponent.defaultProps = { loading: false, taxas: [], selected: {}, histogram: null };

export default DetailViewComponent;
