import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as ownActions from './categories-list-actions';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';

import { mapStateToProps } from './categories-list-selectors';
import CategoriesListComponent from './categories-list-component';

const actions = { ...ownActions, setModalMetadataParams };

class CategoriesListContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query } = this.props;
    const layersArray = Array.isArray(layers) ? layers : [layers];
    const activeLayers = query && query.activeLayers ? query.activeLayers.split(',') : [];
    layersArray.forEach(layer => {
      if (layer.active) {
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

  handleMultiLayerClick = ({ slug, active }) => {
    const layers = [{ slug, active }];
    this.updateLayersActive(layers);
  };

  handleLayerClick = (dataset, { slug, active }) => {
    const layers = dataset.layers.map(layer => ({
      slug: layer.slug,
      active: layer.slug === slug ? !active : false
    }));
    this.updateLayersActive(layers);
  };

  handleSwitchChange = (category, { slug, layers, active }) => {
    const layersToUpdate = category.datasets.reduce((acc, dataset) => {
      const datasetLayers = dataset.layers.map((layer, index) => {
        const isDatasetLayer = dataset.slug === slug;
        const isDatasetLayerActive = !active && index === 0;
        return {
          slug: layer.slug,
          active: isDatasetLayer && isDatasetLayerActive
        };
      });
      return [...acc, ...datasetLayers];
    }, []);
    this.updateLayersActive(layersToUpdate);
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
        handleMultiLayerClick={this.handleMultiLayerClick}
        handleMetadataClick={this.handleMetadataClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(CategoriesListContainer);
