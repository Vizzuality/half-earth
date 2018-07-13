import { connect } from 'react-redux';
import MapLayout from './map-layout-component';

function mapDispatchToProps(state) {
  const { layers, location } = state;
  let coordinates, coordinatesOptions;
  const sanitizeVector = vector => vector.split(',').slice(0, 3);
  if (location.query) {
    coordinates =
      location.query.coordinates && sanitizeVector(location.query.coordinates);
    if (location.query.orientation) {
      const [heading, pitch, roll] = sanitizeVector(location.query.orientation);
      coordinatesOptions = {
        orientation: {
          roll,
          pitch,
          heading
        }
      };
    }
  }
  const activeLayers = Object.values(layers.byId).filter(
    layer => layer.config.visible
  );
  return {
    coordinates,
    layers: activeLayers,
    coordinatesOptions
  };
}

export default connect(mapDispatchToProps)(MapLayout);
