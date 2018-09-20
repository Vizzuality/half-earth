import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';
import { mapStateToProps } from './categories-list-selectors';
import CategoriesListComponent from './categories-list-component';

const actions = { setModalMetadataParams };

class CategoriesListContainer extends Component {
  handleMetadataClick = ({ slug }) => {
    this.props.setModalMetadataParams({ slug, title: 'Category metadata', isOpen: true });
  };

  render() {
    return <CategoriesListComponent {...this.props} handleMetadataClick={this.handleMetadataClick} />;
  }
}

CategoriesListContainer.propTypes = { setModalMetadataParams: PropTypes.func.isRequired };

export default connect(mapStateToProps, actions)(CategoriesListContainer);
