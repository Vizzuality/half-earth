import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCellDetail } from 'redux-modules/cell-detail/cell-detail-actions';

import { mapStateToProps } from './detail-view-selectors';
import DetailViewComponent from './detail-view-component';

const actions = { fetchCellDetail };

class DetailViewContainer extends Component {
  componentDidMount() {
    const { cellId } = this.props;
    this.props.fetchCellDetail(cellId);
  }

  render() {
    return <DetailViewComponent {...this.props} />;
  }
}

DetailViewContainer.propTypes = { fetchCellDetail: PropTypes.func.isRequired, cellId: PropTypes.number.isRequired };

export default connect(mapStateToProps, actions)(DetailViewContainer);
