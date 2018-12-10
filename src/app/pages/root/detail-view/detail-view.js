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

  componentDidUpdate(prevProps) {
    const { cellId } = this.props;
    if (cellId !== prevProps.cellId) {
      this.props.fetchCellDetail(cellId);
    }
  }

  handleCloseTerrainClick = () => {
    const { updateQueryParam, query } = this.props;
    const activeLayers = query.activeLayers
      ? query.activeLayers.map(l => ({ ...l, opacity: 1 }))
      : null;
    updateQueryParam({
      query: {
        ...query,
        activeLayers,
        taxa: undefined,
        cellId: undefined,
        terrain: undefined,
        terrainCameraOffset: undefined,
        orientation: [ 0, -1.5707963267948966, 6.283185307179586 ]
      }
    });
  };

  handleTaxasChange = taxa => {
    const { updateQueryParam, query, taxasChangeAnalyticsEvent } = this.props;
    updateQueryParam({ query: { ...query, taxa: taxa.slug } });
    taxasChangeAnalyticsEvent(taxa.slug);
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
  taxasChangeAnalyticsEvent: PropTypes.func.isRequired,
  cellId: PropTypes.string.isRequired
};

export default connect(mapStateToProps, actions)(DetailViewContainer);
