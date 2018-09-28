import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setModalMetadata } from 'components/v2/modal-metadata/modal-metadata-actions';
import {
  setModalInstructionsParams
} from 'components/v2/modal-instructions/modal-instructions-actions';
import { getLayersActiveMerged } from 'redux-modules/datasets/datasets-utils';

import * as ownActions from './toolbar-actions';
import { mapStateToProps } from './toolbar-selectors';
import ToolbarComponent from './toolbar-component';

const hasGeolocation = 'geolocation' in navigator;

const actions = { ...ownActions, setModalMetadata, setModalInstructionsParams };

class ToolbarContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query = {} } = this.props;
    const activeLayers = getLayersActiveMerged(layers, query.activeLayers);
    updateQueryParam({ query: { ...query, activeLayers } });
  };

  handleShareClick = () => {
    this.props.setModalMetadata({ title: 'Share modal', isOpen: true });
  };

  handleInfoClick = () => {
    this.props.setModalInstructionsParams({ isOpen: true });
  };

  handleCenterLocationClick = () => {
    if (hasGeolocation) {
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
    }
  };

  render() {
    return (
      <ToolbarComponent
        {...this.props}
        showLocation={hasGeolocation}
        handleInfoClick={this.handleInfoClick}
        handleShareClick={this.handleShareClick}
        handleCenterLocationClick={this.handleCenterLocationClick}
      />
    );
  }
}

ToolbarContainer.propTypes = {
  query: PropTypes.object,
  updateQueryParam: PropTypes.func.isRequired,
  setModalInstructionsParams: PropTypes.func.isRequired,
  setModalMetadata: PropTypes.func.isRequired
};

ToolbarContainer.defaultProps = { query: {} };

export default connect(mapStateToProps, actions)(ToolbarContainer);
