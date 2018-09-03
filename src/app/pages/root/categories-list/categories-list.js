import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ownActions from './categories-list-actions';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';

import { getCategoriesState } from './categories-list-selectors';
import CategoriesListComponent from './categories-list-component';

const actions = { ...ownActions, setModalMetadataParams };

const mapStateToProps = getCategoriesState;

class CategoriesListContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query } = this.props;
    const layersArray = Array.isArray(layers) ? layers : [layers];
    const activeLayers = query && query.activeLayers ? query.activeLayers.split(',') : [];
    layersArray.forEach(layer => {
      if (!layer.active) {
        activeLayers.push(layer.slug);
      } else {
        const index = activeLayers.indexOf(layer.slug);
        if (index > -1) {
          activeLayers.splice(index, 1);
        }
      }
    });
    updateQueryParam({
      query: { ...query, activeLayers: activeLayers.join(',') }
    });
  };

  handleLayerClick = (dataset, { slug, active }) => {
    const layers = dataset.layers.map(layer => ({
      slug: layer.slug,
      active: layer.slug === slug ? active : true
    }));
    this.updateLayersActive(layers);
  };

  handleSwitchChange = ({ layers, active }) => {
    const slugs = active ? layers.map(l => ({ slug: l.slug, active })) : { slug: layers[0].slug, active };
    this.updateLayersActive(slugs);
  };

  handleMetadataClick = ({ slug }) => {
    const { setModalMetadataParams } = this.props;
    setModalMetadataParams({ slug, title: 'Category metadata', isOpen: true });
  };

  render() {
    return (
      <CategoriesListComponent
        {...this.props}
        handleSwitchChange={this.handleSwitchChange}
        handleLayerClick={this.handleLayerClick}
        handleMetadataClick={this.handleMetadataClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(CategoriesListContainer);
