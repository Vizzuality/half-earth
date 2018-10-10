import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Dropdown } from 'he-components';

import Histogram from './histogram';
import styles from './rarity-richness-styles';

class RarityRichnessComponent extends Component {
  render() {
    const { loading, data = {}, taxas, selected, histogram, handleTaxasChange } = this.props;
    const { richness, rarity } = data;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.container}>
        <span>For</span>
        <Dropdown options={taxas} selected={selected} onSelect={handleTaxasChange} />
        {
          richness && rarity && (
          <span>
                this area has{' '}
            <span className={styles.highlight}>{richness.status}</span>
            {' '}richness and{' '}
            <span className={styles.highlight}>{rarity.status}</span>
            {' '}rarity
          </span>
            )
        }
        <Histogram data={data} values={histogram} />
      </div>
    );
  }
}

RarityRichnessComponent.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  selected: PropTypes.object,
  histogram: PropTypes.shape({ richness: PropTypes.array, rarity: PropTypes.array }),
  handleTaxasChange: PropTypes.func.isRequired
};

RarityRichnessComponent.defaultProps = {
  loading: false,
  data: undefined,
  taxas: [],
  selected: {},
  histogram: null
};

export default RarityRichnessComponent;
