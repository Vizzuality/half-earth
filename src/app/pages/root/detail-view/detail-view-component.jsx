import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccordionCard, Loading, Button, Icon } from 'he-components';

import closeIcon from 'assets/icons/icon-cross.svg';
import RarityRichness from './rarity-richness';
import ProgressCard from './progress-card';
import SpeciesToWatch from './species-to-watch';
import styles from './detail-view-styles';

class DetailViewComponent extends Component {
  render() {
    const {
      loading,
      data,
      taxas,
      histogram,
      taxaSelected,
      humanLayers,
      conservationLayers,
      handleCloseTerrainClick,
      handleTaxasChange
    } = this.props;
    if (loading) return <Loading height="100%" />;
    return (
      <div className={styles.detailViewContainer}>
        <Button theme={styles} circle onClick={handleCloseTerrainClick}>
          <Icon icon={closeIcon} />
        </Button>
        <h2 className={styles.detailTitle}>Area in United States, North America</h2>
        <h2 className={styles.detailSubTitle}>
          Global, ~110 km cell size mapping of terrestrial species.
        </h2>
        <RarityRichness
          data={data}
          taxas={taxas}
          histogram={histogram}
          selected={taxaSelected}
          handleTaxasChange={handleTaxasChange}
        />
        <AccordionCard isOpen title="Mapping conservation areas">
          <ProgressCard
            layers={conservationLayers}
            legend="Strict reserves"
            subtitle="Protections classified according to their management objectives."
          />
        </AccordionCard>
        <AccordionCard isOpen title="Mapping human activities">
          <ProgressCard
            layers={humanLayers}
            legend="Area total encroachment"
            subtitle="Human pressures are high, mainly due to agricultural practices."
          />
        </AccordionCard>
        {data && data.species && <SpeciesToWatch species={data.species} />}
      </div>
    );
  }
}

DetailViewComponent.propTypes = {
  loading: PropTypes.bool,
  taxas: PropTypes.array,
  taxaSelected: PropTypes.object,
  histogram: PropTypes.object,
  data: PropTypes.object,
  humanLayers: PropTypes.array,
  conservationLayers: PropTypes.array,
  handleCloseTerrainClick: PropTypes.func.isRequired,
  handleTaxasChange: PropTypes.func.isRequired
};

DetailViewComponent.defaultProps = {
  loading: false,
  taxas: [],
  taxaSelected: {},
  data: {},
  histogram: null,
  humanLayers: null,
  conservationLayers: null
};

export default DetailViewComponent;
