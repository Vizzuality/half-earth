import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLayersActiveMerged } from 'redux-modules/datasets/datasets-utils';
import DatasetComboComponent from './dataset-combo-component';
import * as ownActions from './dataset-combo-actions';
import { mapStateToProps } from './dataset-combo-selectors';

const actions = { ...ownActions };

class DatasetComboContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query } = this.props;
    const urlLayers = query && query.activeLayers || [];
    const activeLayers = getLayersActiveMerged(layers, urlLayers);
    updateQueryParam({ query: { ...query, activeLayers } });
  };

  handleMultiLayerClick = ({ slug, active }) => {
    const layers = [ { slug, active: !active } ];
    this.updateLayersActive(layers);
  };

  handleLayerClick = (layers, { slug, active }) => {
    const activeLayers = layers.map(layer => ({
      slug: layer.slug,
      active: layer.slug === slug ? !active : false
    }));
    this.updateLayersActive(activeLayers);
  };

  handleSwitchChange = (category, slug, active) => {
    let layersToUpdate = [];
    if (category.multiSelect) {
      const dataset = category.datasets.find(d => d.slug === slug);
      layersToUpdate = dataset &&
        dataset.layers.map((layer, index) => ({
          slug: layer.slug,
          active: !active && index === 0
        }));
    } else {
      layersToUpdate = category.datasets.reduce((acc, dataset) => {
        const datasetLayers = dataset.layers.map((layer, index) => {
          const isDatasetLayer = dataset.slug === slug;
          const isDatasetLayerActive = !active && index === 0;
          return { slug: layer.slug, active: isDatasetLayer && isDatasetLayerActive };
        });
        return [ ...acc, ...datasetLayers ];
      }, []);
    }
    this.updateLayersActive(layersToUpdate);
  };

  render() {
    return (
      <DatasetComboComponent
        {...this.props}
        handleSwitchChange={this.handleSwitchChange}
        handleLayerClick={this.handleLayerClick}
        handleMultiLayerClick={this.handleMultiLayerClick}
      />
    );
  }
}

DatasetComboContainer.propTypes = {
  updateQueryParam: PropTypes.func.isRequired,
  query: PropTypes.object
};

DatasetComboContainer.defaultProps = { query: undefined };

export default connect(mapStateToProps, actions)(DatasetComboContainer);
