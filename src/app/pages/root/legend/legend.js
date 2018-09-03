import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';
import * as ownActions from './legend-actions';

import { getLegendState } from './legend-selectors';
import LegendComponent from './legend-component';

const actions = { ...ownActions, setModalMetadataParams };

const mapStateToProps = getLegendState;

class LegendContainer extends Component {
  handleRemoveLayer = layer => {
    const { updateQueryParam, query } = this.props;
    const activeLayers = query && query.activeLayers ? query.activeLayers.split(',') : [];
    const index = activeLayers.indexOf(layer.slug);
    if (index > -1) {
      activeLayers.splice(index, 1);
    }
    updateQueryParam({
      query: { ...query, activeLayers: activeLayers.join(',') }
    });
  };

  handleInfoClick = ({ slug }) => {
    const { setModalMetadataParams } = this.props;
    setModalMetadataParams({ slug, title: 'Category metadata', isOpen: true });
  };

  render() {
    return (
      <LegendComponent
        {...this.props}
        handleRemoveLayer={this.handleRemoveLayer}
        handleInfoClick={this.handleInfoClick}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(LegendContainer);
