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

  updateLayerProperty(slug, { key, value }) {
    const { updateQueryParam, query = {} } = this.props;
    const activeLayers = query.activeLayers.map(layer => {
      if (!layer.slug === slug) return layer;
      return {
        ...layer,
        [key]: value
      };
    });
    updateQueryParam({
      query: { ...query, activeLayers }
    });
  }

  handleRemoveLayer = ({ slug }) => {
    this.updateLayersActive([{ slug, active: false }]);
  };

  handleChangeOpacity = ({ slug }, opacity) => {
    this.updateLayerProperty(slug, { key: 'opacity', value: opacity });
  };

  handleChangeVisibility = (layer, visibility) => {
    this.updateLayerProperty(layer.slug, { key: 'visibility', value: visibility });
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
