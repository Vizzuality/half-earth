import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Dropdown } from 'he-components';

import styles from './rarity-richness-styles';

class DetailViewComponent extends Component {
  render() {
    const { loading, taxas, handleTaxasChange } = this.props;
    if (loading) return <Loading height="100%" />;
    const selected = taxas && taxas[0] || {};
    return (
      <div className={styles.container}>
        <span>For all</span>
        <Dropdown options={taxas} selected={selected} onSelect={handleTaxasChange} />
        <span>this area has a average rarity richness and high rarity</span>
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  handleTaxasChange: PropTypes.func.isRequired
};

DetailViewComponent.defaultProps = { loading: false, taxas: [] };

export default DetailViewComponent;
