import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCellDetail } from 'redux-modules/cell-detail/cell-detail-actions';
import * as ownActions from './detail-view-actions';

import { mapStateToProps } from './detail-view-selectors';
import DetailViewComponent from './detail-view-component';

const actions = { ...ownActions, fetchCellDetail };

class DetailViewContainer extends Component {
  componentDidMount() {
    const { cellId } = this.props;
    this.props.fetchCellDetail(cellId);
  }

  handleCloseTerrainClick = () => {
    const { updateQueryParam, query } = this.props;
    updateQueryParam({
      query: {
        ...query,
        lat: undefined,
        lng: undefined,
        cellId: undefined,
        terrain: undefined,
        terrainCameraOffset: undefined,
        orientation: undefined
      }
    });
  };

  handleTaxasChange = taxa => {
    const { updateQueryParam, query } = this.props;
    updateQueryParam({ query: { ...query, taxa: taxa.slug } });
  };

  render() {
    return (
      <DetailViewComponent
        {...this.props}
        handleTaxasChange={this.handleTaxasChange}
        handleCloseTerrainClick={this.handleCloseTerrainClick}
      />
    );
  }
}

DetailViewContainer.propTypes = {
  query: PropTypes.object.isRequired,
  fetchCellDetail: PropTypes.func.isRequired,
  updateQueryParam: PropTypes.func.isRequired,
  cellId: PropTypes.number.isRequired
};

export default connect(mapStateToProps, actions)(DetailViewContainer);
