import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PlacesLayer extends Component {
  markersCollection = null;

  componentDidMount() {
    const { map, show } = this.props;
    if (map && show) {
      this.addPlacesMarkers();
    }
  }

  componentDidUpdate() {
    const { show } = this.props;
    if (show) {
      this.addPlacesMarkers();
    } else {
      this.removePlacesMarkers();
    }
  }

  componentWillUnmount() {
    this.removePlacesMarkers();
  }

  addPlacesMarkers() {
    const { places, map } = this.props;
    this.markersCollection = map.scene.primitives.add(new Cesium.BillboardCollection());
    if (places) {
      places.forEach(place => {
        const coordinates = JSON.parse(place.bbox).coordinates[0].map(
          c => Cesium.Cartesian3.fromDegrees(c[0], c[1])
        );
        this.markersCollection.add({
          position: Cesium.Cartesian3.fromDegrees(place.lon, place.lat),
          image: 'img/flag-icon.png',
          scale: 0.8,
          id: {
            id: place.lat + place.lon,
            title: place.places,
            text: place.description,
            cellId: place.cellId,
            image: place.image,
            lat: place.lat,
            lon: place.lon,
            coordinates,
            type: 'place',
            markerImage: 'img/flag-icon.png',
            markerHoverImage: 'img/flag-icon-hover.png'
          }
        });
      });
    }
  }

  removePlacesMarkers() {
    const { map } = this.props;
    if (this.markersCollection) {
      map.scene.primitives.remove(this.markersCollection);
    }
  }

  render() {
    return null;
  }
}

PlacesLayer.propTypes = {
  places: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  map: PropTypes.object
};

PlacesLayer.defaultProps = { map: {} };

const mapStateToProps = state => ({ places: state.places.data || null });

export default connect(mapStateToProps)(PlacesLayer);
