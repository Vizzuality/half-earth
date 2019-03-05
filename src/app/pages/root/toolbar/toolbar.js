import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModalMetadata } from 'components/v2/modal-metadata/modal-metadata-actions';
import {
  setModalInstructionsParams
} from 'components/v2/modal-instructions/modal-instructions-actions';
import { setModalTutorialParams } from 'components/v2/modal-tutorial/modal-tutorial-actions';
import { setModalShareParams } from 'components/v2/modal-share/modal-share-actions';
import { getLayersActiveMerged } from 'redux-modules/datasets/datasets-utils';

import * as ownActions from './toolbar-actions';
import { mapStateToProps } from './toolbar-selectors';
import ToolbarComponent from './toolbar-component';

const hasGeolocation = 'geolocation' in navigator;

const actions = {
  ...ownActions,
  setModalMetadata,
  setModalInstructionsParams,
  setModalShareParams,
  setModalTutorialParams
};

class ToolbarContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query = {} } = this.props;
    const activeLayers = getLayersActiveMerged(layers, query.activeLayers);
    updateQueryParam({ query: { ...query, activeLayers, activeMarker: undefined } });
  };

  handleShareClick = () => {
    this.props.setModalShareParams({
      isOpen: true,
      currentLocation: `https://www.half-earthproject.org/maps${window.location.search}`,
      urlToCopy: `https://www.half-earthproject.org/maps${window.location.search}`
    });
  };

  handleInfoClick = () => {
    const { toolbarAnalyticsEvent } = this.props;
    this.props.setModalTutorialParams({ isOpen: true });
    toolbarAnalyticsEvent('How to navigate', 'Open info modal');
  };

  handleDatasetChange = ({ slug, active }) => {
    const layers = [ { slug, active: !active } ];
    this.updateLayersActive(layers);
  };

  handleBordersLayerClick = () => {
    const layers = [ { slug: 'gadm-grid', active: true } ];
    this.updateLayersActive(layers);
  };

  handleCenterLocationClick = () => {
    if (hasGeolocation) {
      const { toolbarAnalyticsEvent } = this.props;
      navigator.geolocation.getCurrentPosition(position => {
        const { updateQueryParam, query = {} } = this.props;
        const { x, y, z } = Cesium.Cartesian3.fromDegrees(
          position.coords.longitude,
          position.coords.latitude,
          310000
        );
        const coordinates = { x, y, z };
        updateQueryParam({ query: { ...query, coordinates } });
      });
      toolbarAnalyticsEvent('Center on location', null);
    }
  };

  render() {
    return (
      <ToolbarComponent
        {...this.props}
        showLocation={hasGeolocation}
        handleInfoClick={this.handleInfoClick}
        handleShareClick={this.handleShareClick}
        handleDatasetChange={this.handleDatasetChange}
        handleCenterLocationClick={this.handleCenterLocationClick}
        handleBordersLayerClick={this.handleBordersLayerClick}
      />
    );
  }
}

ToolbarContainer.propTypes = {
  query: PropTypes.object,
  updateQueryParam: PropTypes.func.isRequired,
  setModalInstructionsParams: PropTypes.func.isRequired,
  setModalTutorialParams: PropTypes.func.isRequired,
  setModalMetadata: PropTypes.func.isRequired,
  setModalShareParams: PropTypes.func.isRequired,
  toolbarAnalyticsEvent: PropTypes.func.isRequired
};

ToolbarContainer.defaultProps = { query: {} };

export default connect(mapStateToProps, actions)(ToolbarContainer);
