import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PledgesLayer extends Component {
  markersCollection = null;

  componentDidMount() {
    const { map, show } = this.props;
    if (map && show) {
      this.addPledgesMarkers();
    }
  }

  componentDidUpdate() {
    const { show } = this.props;
    if (show) {
      this.addPledgesMarkers();
    } else {
      this.removeStoriesMarkers();
    }
  }

  componentWillUnmount() {
    this.removeStoriesMarkers();
  }

  addPledgesMarkers() {
    const { pledges, map } = this.props;
    this.clustersDatasource = new Cesium.CustomDataSource('clusters');
    this.clustersDatasource.clustering.enabled = true;
    this.clustersDatasource.clustering.pixelRange = 15;
    this.clustersDatasource.clustering.minimumClusterSize = 3;
    if (pledges) {
      pledges.forEach(pledge => {
        this.clustersDatasource.entities.add({
          position: Cesium.Cartesian3.fromDegrees(pledge.lon, pledge.lat),
          billboard: { image: 'img/pledges-point.png', scale: 0.8, id: { type: 'pledge' } }
        });
      });
      const promise = map.dataSources.add(this.clustersDatasource);

      promise.then(() => {
        this.setDatasourceBillboards();
      });
    }
  }

  setDatasourceBillboards() {
    if (Cesium.defined(this.clustersListener)) {
      this.clustersListener();
      this.clustersListener = null;
    } else {
      this.clustersListener = this.clustersDatasource.clustering.clusterEvent.addEventListener((
        clusteredEntities,
        cluster
      ) =>
        {
          /* eslint-disable no-param-reassign */
          cluster.label.show = false;
          cluster.billboard.show = true;

          if (cluster.label.show) {
            cluster.billboard.image = 'img/pledges-cluster.png';
          } else {
            cluster.billboard.image = 'img/pledges-point.png';
          }
          /* eslint-enable no-param-reassign */
        });
    }

    // force a re-cluster with the new styling
    const pixelRange = this.clustersDatasource.clustering.pixelRange;
    this.clustersDatasource.clustering.pixelRange = 0;
    this.clustersDatasource.clustering.pixelRange = pixelRange;
  }

  removeStoriesMarkers() {
    const { map } = this.props;
    if (this.markersCollection) {
      map.dataSources.remove(this.markersCollection, true);
    }
  }

  render() {
    return null;
  }
}

PledgesLayer.propTypes = {
  pledges: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  map: PropTypes.object
};

PledgesLayer.defaultProps = { map: {} };

const mapStateToProps = state => ({ pledges: state.pledges.data || null });

export default connect(mapStateToProps)(PledgesLayer);
