import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';
import { getLayersActiveMerged } from 'redux-modules/datasets/datasets-utils';
import * as ownActions from './toolbar-actions';

import { mapStateToProps } from './toolbar-selectors';
import ToolbarComponent from './toolbar-component';

const actions = { ...ownActions, setModalMetadataParams };

class ToolbarContainer extends Component {
  updateLayersActive = layers => {
    const { updateQueryParam, query = {} } = this.props;
    const activeLayers = getLayersActiveMerged(layers, query.activeLayers);
    updateQueryParam({ query: { ...query, activeLayers } });
  };

  handleShareClick = () => {
    this.props.setModalMetadataParams({ title: 'Share modal', isOpen: true });
  };
  handleInfoClick = () => {
    this.props.setModalMetadataParams({ title: 'App information', isOpen: true });
  };
  handleGridChange = ({ slug, active }) => {
    const layers = [ { slug, active: !active } ];
    this.updateLayersActive(layers);
  };
  render() {
    return (
      <ToolbarComponent
        {...this.props}
        handleInfoClick={this.handleInfoClick}
        handleShareClick={this.handleShareClick}
        handleGridChange={this.handleGridChange}
      />
    );
  }
}

export default connect(mapStateToProps, actions)(ToolbarContainer);
