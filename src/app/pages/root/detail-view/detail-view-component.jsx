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
      categories,
      handleCloseTerrainClick,
      handleTaxasChange,
      cellType
    } = this.props;
    if (loading) return <Loading height="100%" />;
    const title = data && data.location ? `Area in ${data.location}` : 'Selected area';
    const subtitle = cellType && cellType === 'terrestrial'
      ? 'Global maps with 110km cell size.'
      : 'Global maps with ~50 km cell size.';
    return (
      <div className={styles.detailViewContainer}>
        <div className={styles.generalInfoCard}>
          <Button theme={styles} circle onClick={handleCloseTerrainClick}>
            <Icon icon={closeIcon} />
          </Button>
          <div className={styles.header}>
            <h2 className={styles.detailTitle}>{title}</h2>
            <p className={styles.detailSubTitle}>
              {subtitle}
            </p>
          </div>
          <RarityRichness
            data={data}
            taxas={taxas}
            histogram={histogram}
            selected={taxaSelected}
            handleTaxasChange={handleTaxasChange}
          />
        </div>
        {
          categories && categories.length > 0 && categories.map(category => (
            <AccordionCard key={category.slug} isOpen title={category.name}>
              <ProgressCard category={category} theme={{ progress: styles.progressBar }} />
            </AccordionCard>
            ))
        }
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
  categories: PropTypes.array,
  cellType: PropTypes.string,
  handleCloseTerrainClick: PropTypes.func.isRequired,
  handleTaxasChange: PropTypes.func.isRequired
};

DetailViewComponent.defaultProps = {
  loading: false,
  taxas: [],
  taxaSelected: {},
  data: {},
  categories: [],
  cellType: 'terrestrial',
  histogram: null
};

export default DetailViewComponent;
