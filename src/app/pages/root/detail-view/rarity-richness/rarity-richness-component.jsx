import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Dropdown, Button, Icon } from 'he-components';

import infoIcon from 'assets/icons/icon-info.svg';

import Histogram from './histogram';
import styles from './rarity-richness-styles';

class RarityRichnessComponent extends Component {
  render() {
    const {
      loading,
      data = {},
      taxas,
      selected,
      histogram,
      handleTaxasChange,
      handleMetadataClick
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
            {' '}rarity {rarityStatement}.
          </span>
            )
        }
        <div className={styles.histogramContainer}>
          <Histogram data={data} values={histogram} />
          <Button theme={styles} onClick={handleMetadataClick}>
            <Icon icon={infoIcon} />
          </Button>
        </div>
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
  handleTaxasChange: PropTypes.func.isRequired,
  handleMetadataClick: PropTypes.func.isRequired
};

RarityRichnessComponent.defaultProps = {
  loading: false,
  data: undefined,
  taxas: [],
  selected: {},
  histogram: null
};

export default RarityRichnessComponent;
