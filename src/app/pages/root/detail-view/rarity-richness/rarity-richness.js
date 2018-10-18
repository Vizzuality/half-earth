import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModalMetadata } from 'components/v2/modal-metadata/modal-metadata-actions';
import RarityRichnessComponent from './rarity-richness-component';

const actions = { setModalMetadata };

class RarityRichnessContainer extends Component {
  handleMetadataClick = () => {
    this.props.setModalMetadata({
      slug: 'bivariate',
      title: 'Rarity and richness metadata',
      isOpen: true
    });
  };

  render() {
    return (
      <RarityRichnessComponent {...this.props} handleMetadataClick={this.handleMetadataClick} />
    );
  }
}

RarityRichnessContainer.propTypes = { setModalMetadata: PropTypes.func.isRequired };

export default connect(null, actions)(RarityRichnessContainer);
