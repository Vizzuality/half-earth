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
    this.markersCollection = map.scene.primitives.add(new Cesium.BillboardCollection());
    if (pledges) {
      pledges.forEach(pledge => {
        this.markersCollection.add({
          position: Cesium.Cartesian3.fromDegrees(pledge.lon, pledge.lat),
          image: 'img/stories-icon.png',
          scale: 0.8,
          id: {
            type: 'pledge',
            markerImage: 'img/stories-icon.png',
            markerHoverImage: 'img/stories-icon-hover.png'
          }
        });
      });
    }
  }

  removeStoriesMarkers() {
    const { map } = this.props;
    if (this.markersCollection) {
      map.scene.primitives.remove(this.markersCollection);
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
