import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLayersActiveMerged } from 'redux-modules/datasets/datasets-utils';
import DatasetComboComponent from './dataset-combo-component';
import * as ownActions from './dataset-combo-actions';
import { mapStateToProps } from './dataset-combo-selectors';

const actions = { ...ownActions };

class DatasetComboContainer extends Component {
  updateLayersActive = (layers, bounds) => {
    const { updateQueryParam, query } = this.props;
    const urlLayers = query && query.activeLayers || [];
    const activeLayers = getLayersActiveMerged(layers, urlLayers);
    const coordinates = bounds
      ? Cesium.Rectangle.fromDegrees(...bounds)
      : query && query.coordinates;
    updateQueryParam({ query: { ...query, activeLayers, coordinates } });
  };

  handleMultiLayerClick = ({ slug, active }) => {
    const layers = [ { slug, active: !active } ];
    this.updateLayersActive(layers);
  };

  handleLayerClick = (layers, { slug, active, layerConfig }) => {
    const { layerDefaultOpacity } = this.props;
    const activeLayers = layers.map(layer => ({
      slug: layer.slug,
      active: layer.slug === slug ? !active : false,
      opacity: layerDefaultOpacity
    }));
    const { bbox } = layerConfig.body && layerConfig.body;
    if (bbox && bbox.length === 4) {
      this.updateLayersActive(activeLayers, bbox);
    } else {
      this.updateLayersActive(activeLayers);
    }
  };

  handleSwitchChange = (category, slug, active) => {
    const { layerDefaultOpacity } = this.props;
    let layersToUpdate = [];
    if (category.multiSelect) {
      const dataset = category.datasets.find(d => d.slug === slug);
      layersToUpdate = dataset &&
        dataset.layers.map((layer, index) => ({
          slug: layer.slug,
          bbox: layer.layerConfig.body.bbox || null,
          active: !active && index === 0,
          opacity: layerDefaultOpacity
        }));
    } else {
      layersToUpdate = category.datasets.reduce((acc, dataset) => {
        const datasetLayers = dataset.layers.map((layer, index) => {
          const isDatasetLayer = dataset.slug === slug;
          const isDatasetLayerActive = !active && index === 0;
          return {
            slug: layer.slug,
            bbox: layer.layerConfig.body.bbox || null,
            active: isDatasetLayer && isDatasetLayerActive,
            opacity: layerDefaultOpacity
          };
        });
        return [ ...acc, ...datasetLayers ];
      }, []);
    }

    const layerToActive = layersToUpdate && layersToUpdate.find(l => l.active);
    const bbox = layerToActive && layerToActive.bbox;
    if (bbox && bbox.length === 4) {
      this.updateLayersActive(layersToUpdate, bbox);
    } else {
      this.updateLayersActive(layersToUpdate);
    }
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
  query: PropTypes.object,
  layerDefaultOpacity: PropTypes.number
};

DatasetComboContainer.defaultProps = { query: undefined, layerDefaultOpacity: 0.5 };

export default connect(mapStateToProps, actions)(DatasetComboContainer);
