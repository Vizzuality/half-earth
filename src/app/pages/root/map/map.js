import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './map-actions';

import { mapStateToProps } from './map-selectors';
import MapComponent from './map-component';

class MapContainer extends Component {
  updateMapParams = params => {
    const { query, updateQueryParam } = this.props;
    updateQueryParam({ query: { ...query, ...params } });
  };

  render() {
    return <MapComponent {...this.props} updateMapParams={this.updateMapParams} />;
  }
}

MapContainer.propTypes = { query: PropTypes.object, updateQueryParam: PropTypes.func.isRequired };

MapContainer.defaultProps = { query: null };

export default connect(mapStateToProps, actions)(MapContainer);
