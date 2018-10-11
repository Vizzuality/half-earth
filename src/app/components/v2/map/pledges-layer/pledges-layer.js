import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PledgesLayer extends Component {
  static billboards = {
    POINT: { image: 'img/pledges-point.png', height: 25, width: 25, id: { type: 'pledge-point' } },
    CLUSTER: {
      image: 'img/pledges-cluster.png',
      height: 64,
      width: 64,
      id: { type: 'pledge-cluster' }
    }
  };

  static LABEL = {
    // small text in webgl renders blurry,
    // the trick is to use a bigger font size and scale it down
    // https://stackoverflow.com/questions/33784256/cesium-label-blurred
    font: '42px sans-serif',
    scale: 0.30,
    verticalOrigin: Cesium.VerticalOrigin.CENTER,
    horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
    disableDepthTestDistance: Number.POSITIVE_INFINITY
  };

  clustersDatasource = null;

  componentDidMount() {
    const { map, show } = this.props;
    if (map && show) {
      this.addPledgesMarkers();
      // antialiasing off (see LABEL link)
      map.scene.fxaa = false;
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
    if (pledges) {
      pledges.forEach(pledge => {
        this.clustersDatasource.entities.add({
          position: Cesium.Cartesian3.fromDegrees(pledge.lon, pledge.lat),
          billboard: PledgesLayer.billboards.POINT
        });
      });
      const promise = map.dataSources.add(this.clustersDatasource);

      promise.then(() => this.setDatasourceBillboards());
    }
  }

  setDatasourceBillboards() {
    const pixelRange = 100;
    this.clustersDatasource.clustering.enabled = true;
    this.clustersDatasource.clustering.pixelRange = pixelRange;
    this.clustersDatasource.clustering.minimumClusterSize = 20;

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
          cluster.billboard.show = true;

          if (cluster.label.show) {
            Object.assign(cluster.label, PledgesLayer.LABEL);
            Object.assign(cluster.billboard, PledgesLayer.billboards.CLUSTER);
          } else {
            Object.assign(cluster.billboard, PledgesLayer.billboards.POINT);
          }
          /* eslint-enable no-param-reassign */
        });
    }

    // force a re-cluster with the new styling
    this.clustersDatasource.clustering.pixelRange = 0;
    this.clustersDatasource.clustering.pixelRange = pixelRange;
  }

  removeStoriesMarkers() {
    const { map } = this.props;
    if (this.clustersDatasource) {
      map.dataSources.remove(this.clustersDatasource, true);
    }
    map.scene.fxaa = true;
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
