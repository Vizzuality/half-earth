import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { snakeCase } from 'lodash';
import { Loading } from 'he-components';

import styles from './species-to-watch-styles';

class SpeciesToWatchComponent extends Component {
  render() {
    const { loading, data } = this.props;
    return (
      <div className={styles.container}>
        <p className={styles.title}>List of species to watch in this area</p>
        {
          loading ? <Loading height="300" /> : data && data.length > 0 && data.map(specie => (
            <div className={styles.speciesRow} key={specie.commonname || specie.scientificname}>
              {
                    (
                      <a
                        href={`https://mol.org/species/${snakeCase(specie.scientificname)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={styles.speciesImg}
                          src={specie.image && specie.image.url || 'img/species-placeholder@2x.png'}
                          alt={`${specie.commonname} specie`}
                        />
                      </a>
                    )
                  }
              <div className={styles.speciesContent}>
                <h4 className={styles.speciesTitle}>{specie.commonname}</h4>
                <p className={styles.speciesSubTitle}>{specie.scientificname}</p>
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
        <a
          className={styles.logoContainer}
          href="https://mol.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={styles.logoImg}
            src="/img/partners/mol-logo-white@2x.png"
            alt="Mol logo"
          />
        </a>
      </div>
    );
  }
}

SpeciesToWatchComponent.propTypes = { data: PropTypes.array, loading: PropTypes.bool };

SpeciesToWatchComponent.defaultProps = { data: null, loading: true };

export default SpeciesToWatchComponent;
