import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Dropdown } from 'he-components';

import styles from './rarity-richness-styles';

class RarityRichnessComponent extends Component {
  render() {
    const {
      loading,
      data = {},
      taxas,
      selected,
      // histogram,
      // handleMetadataClick
      handleTaxasChange
    } = this.props;
    const { richness, rarity } = data;

    if (loading) return <Loading height="100%" />;

    const rRichnessState = richness && richness.ranked_richness < 0.5 ? 'bottom' : 'top';
    const rRarityState = rarity && rarity.ranked_rarity < 0.5 ? 'bottom' : 'top';

    const richnessStatement = richness &&
      `(${rRichnessState} ${Math.floor(richness.ranked_richness * 100)}% of places)`;
    const rarityStatement = rarity &&
      `(${rRarityState} ${Math.floor(rarity.ranked_rarity * 100)}% of places)`;

    return (
      <div className={styles.container}>
        <span>For</span>
        <Dropdown options={taxas} selected={selected} onSelect={handleTaxasChange} />
        {
          richness && rarity && (
          <span>
                this area has{' '}
            <span className={styles.highlight}>{richness.status}</span>
            {' '}richness {richnessStatement} and{' '}
            <span className={styles.highlight}>{rarity.status}</span>
            {' '}range rarity {rarityStatement}.
          </span>
            )
        }
        {}
      </div>
    );
  }
}

RarityRichnessComponent.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  selected: PropTypes.object,
  // histogram: PropTypes.shape({ richness: PropTypes.array, rarity: PropTypes.array }),
  // handleMetadataClick: PropTypes.func.isRequired
  handleTaxasChange: PropTypes.func.isRequired
};

RarityRichnessComponent.defaultProps = {
  loading: false,
  data: undefined,
  taxas: [],
  // histogram: null
  selected: {}
};

export default RarityRichnessComponent;
