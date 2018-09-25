
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'he-components';

import styles from './species-to-watch-styles';

class DetailViewComponent extends Component {
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loading height="300" />
    return (
      <React.Fragment>
        <p>List of species to watch</p>
        {data && data.length > 0 &&
          data.map(specie => (
            <div key={specie.commonname}>
              {specie.image &&
                <img className={styles.specieImg} src={specie.image.url} alt={`${specie.commonname} specie`} />
              }
              <p>Common name: {specie.commonname}</p>
              <p>Scientific name: {specie.scientificname}</p>
              <p>Iucn: {specie.iucn}</p>
            </div>
          ))
        }
      </React.Fragment>
    );
  }
}

DetailViewComponent.propTypes = {
  species: PropTypes.array,
  data: PropTypes.array,
  loading: PropTypes.bool,
};

DetailViewComponent.defaultProps = { species: null, data: null, loading: true };

export default DetailViewComponent;
