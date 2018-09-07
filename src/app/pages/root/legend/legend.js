import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLayersActiveMerged } from 'redux-modules/datasets/datasets-utils';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';
import * as ownActions from './legend-actions';

import { mapStateToProps } from './legend-selectors';
import LegendComponent from './legend-component';

const actions = { ...ownActions, setModalMetadataParams };

class LegendContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query = {} } = this.props;
    const activeLayers = getLayersActiveMerged(layers, query.activeLayers);
    updateQueryParam({
      query: { ...query, activeLayers }
    });
  };

  updateLayersProperty(slugs, { key, value }) {
    const { updateQueryParam, query = {} } = this.props;
    const slugsArray = Array.isArray(slugs) ? slugs : [slugs];
    const activeLayers = query.activeLayers.map(layer => {
      if (!slugsArray.includes(layer.slug)) return layer;
      return {
        ...layer,
        [key]: value
      };
    });
    updateQueryParam({
      query: { ...query, activeLayers }
    });
  }

  handleChangeOrder = datasetsOrder => {
    const { datasets, updateQueryParam, query } = this.props;
    const orderedLayers = datasetsOrder.reduce((acc, datasetSlug) => {
      const dataset = datasets.find(d => d.slug === datasetSlug);
      if (!dataset) return acc;

      const datasetLayersSlug = dataset.layers.map(l => l.slug);
      const layer = query.activeLayers.find(l => datasetLayersSlug.includes(l.slug));
      if (!layer) return acc;

      acc.push(layer);
      return acc;
    }, []);
    updateQueryParam({
      query: { ...query, activeLayers: orderedLayers }
    });
  };

  handleRemoveLayer = ({ slug }) => {
    this.updateLayersActive([{ slug, active: false }]);
  };

  getMultiLayers(datasetSlug) {
    const { datasets } = this.props;
    const dataset = datasets.find(d => d.slug === datasetSlug);
    return dataset ? dataset.layers.map(l => l.slug) : [];
  }

  handleChangeOpacity = (layer, opacity) => {
    const layersSlug = layer.dataset === 'human-pressure' ? this.getMultiLayers(layer.dataset) : layer.slug;
    this.updateLayersProperty(layersSlug, { key: 'opacity', value: opacity });
  };

  handleChangeVisibility = (layer, visibility) => {
    const layersSlug = layer.dataset === 'human-pressure' ? this.getMultiLayers(layer.dataset) : layer.slug;
    this.updateLayersProperty(layersSlug, { key: 'visibility', value: visibility });
  };

  handleInfoClick = ({ slug }) => {
    const { setModalMetadataParams } = this.props;
    setModalMetadataParams({ slug, title: 'Category metadata', isOpen: true });
  };

  render() {
    return (
      <LegendComponent
        {...this.props}
        handleInfoClick={this.handleInfoClick}
        handleRemoveLayer={this.handleRemoveLayer}
        handleChangeOrder={this.handleChangeOrder}
        handleChangeOpacity={this.handleChangeOpacity}
        handleChangeVisibility={this.handleChangeVisibility}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(LegendContainer);
