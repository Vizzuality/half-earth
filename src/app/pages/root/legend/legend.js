import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';
import * as ownActions from './legend-actions';

import { mapStateToProps } from './legend-selectors';
import LegendComponent from './legend-component';

const actions = { ...ownActions, setModalMetadataParams };

class LegendContainer extends Component {
  handleRemoveLayer = layer => {
    const { updateQueryParam, query = {} } = this.props;
    const activeLayers = query.activeLayers ? [...query.activeLayers] : [];
    const index = activeLayers.map(l => l.slug).indexOf(layer.slug);
    if (index > -1) {
      activeLayers.splice(index, 1);
    }
    updateQueryParam({
      query: { ...query, activeLayers }
    });
  };

  handleChangeOpacity = ({ slug }, opacity) => {
    console.log(slug, opacity);
  };

  handleChangeVisibility = ({ slug }, visibility) => {
    console.log(slug, visibility);
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
