import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Dropdown } from 'he-components';

import styles from './rarity-richness-styles';

class DetailViewComponent extends Component {
  render() {
    const { loading, taxas, selected, handleTaxasChange } = this.props;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.container}>
        <span>For</span>
        <Dropdown options={taxas} selected={selected} onSelect={handleTaxasChange} />
        <span>this area has a average rarity richness and high rarity</span>
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  selected: PropTypes.object,
  handleTaxasChange: PropTypes.func.isRequired
};

DetailViewComponent.defaultProps = { loading: false, taxas: [], selected: {} };

export default DetailViewComponent;
