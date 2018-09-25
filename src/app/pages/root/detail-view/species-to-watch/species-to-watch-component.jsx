
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './species-to-watch-styles';

class DetailViewComponent extends Component {
  render() {
    console.info(this.props.species)
    return (
      <p>List of species to watch</p>
    );
  }
}

DetailViewComponent.propTypes = {
  species: PropTypes.array,
};

DetailViewComponent.defaultProps = { species: null };

export default DetailViewComponent;
