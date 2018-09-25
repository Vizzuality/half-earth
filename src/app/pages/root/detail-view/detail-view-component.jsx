import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, Button, Icon } from 'he-components';

import closeIcon from 'assets/icons/icon-cross.svg';
import RarityRichness from './rarity-richness';
import ProgressCard from './progress-card';
import SpeciesToWatch from './species-to-watch';
import styles from './detail-view-styles';

class DetailViewComponent extends Component {
  render() {
    const { loading, data, taxas, handleCloseTerrainClick, handleTaxasChange } = this.props;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.detailViewContainer}>
        <Button theme={styles} circle onClick={handleCloseTerrainClick}>
          <Icon icon={closeIcon} />
        </Button>
        <h2 className={styles.detailTitle}>Area in United States, North America</h2>
        <h2 className={styles.detailSubTitle}>Global, ~110 km cell size mapping of terrestrial species. </h2>
        <RarityRichness taxas={taxas} data={data} handleTaxasChange={handleTaxasChange} />
        <ProgressCard data={data} />
        <ProgressCard data={data} />
        {data && data.species && <SpeciesToWatch species={data.species} />}
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  data: PropTypes.object,
  handleCloseTerrainClick: PropTypes.func.isRequired,
  handleTaxasChange: PropTypes.func.isRequired
};

DetailViewComponent.defaultProps = { loading: false, taxas: [], data: {} };

export default DetailViewComponent;
