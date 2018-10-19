import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'he-components';
import cx from 'classnames';
import MolSpeciesLink from './mol-species-link';

import styles from './species-to-watch-styles';

class SpeciesToWatchComponent extends Component {
  render() {
    const { loading, data } = this.props;
    const isDataPresent = data && data.length > 0;
    const noData = !loading && !isDataPresent;
    return (
      <div className={styles.container}>
        <p className={cx(styles.title, { [styles.titleWithSubtitle]: noData })}>
          Species to watch in this area
        </p>
        {noData && <p className={styles.speciesAbsent}>Species data coming soon.</p>}
        {
          loading ? <Loading height="300" /> : isDataPresent && data.map(specie => (
            <div className={styles.speciesRow} key={specie.commonname || specie.scientificname}>
              {
                    (
                      <MolSpeciesLink scientificName={specie.scientificname}>
                        <img
                          className={styles.speciesImg}
                          src={specie.image && specie.image.url || 'img/species-placeholder@2x.png'}
                          alt={`${specie.commonname} specie`}
                        />
                      </MolSpeciesLink>
                    )
                  }
              <div className={styles.speciesContent}>
                <MolSpeciesLink
                  scientificName={specie.scientificname}
                  className={styles.speciesTitle}
                >
                  {specie.commonname}
                </MolSpeciesLink>
                <MolSpeciesLink
                  scientificName={specie.scientificname}
                  className={styles.speciesSubTitle}
                >
                  {specie.scientificname}
                </MolSpeciesLink>
                {
                      specie.iucn && (
                      <a
                        href={specie.redlist_link}
                        className={styles.specieLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p className={styles.speciesCategory}>{specie.iucn}</p>
                      </a>
                        )
                    }
              </div>
            </div>
              ))
        }
        <div className={styles.logoContainer}>
          <a href="https://mol.org/" target="_blank" rel="noopener noreferrer">
            <img className={styles.logoImg} src="/img/partners/mol-logo.png" alt="Mol logo" />
          </a>
        </div>
      </div>
    );
  }
}

SpeciesToWatchComponent.propTypes = { data: PropTypes.array, loading: PropTypes.bool };

SpeciesToWatchComponent.defaultProps = { data: null, loading: true };

export default SpeciesToWatchComponent;
