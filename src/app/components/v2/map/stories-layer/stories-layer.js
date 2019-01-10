import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class StoriesLayer extends Component {
  markersCollection = null;

  componentDidMount() {
    const { map, show } = this.props;
    if (map && show) {
      this.addStoriesMarkers();
    }
  }

  componentDidUpdate() {
    const { show } = this.props;
    if (show) {
      this.addStoriesMarkers();
    } else {
      this.removeStoriesMarkers();
    }
  }

  componentWillUnmount() {
    this.removeStoriesMarkers();
  }

  addStoriesMarkers() {
    const { stories, map } = this.props;
    this.markersCollection = map.scene.primitives.add(new Cesium.BillboardCollection());
    if (stories) {
      stories.forEach(story => {
        this.markersCollection.add({
          position: Cesium.Cartesian3.fromDegrees(story.lon, story.lat),
          image: 'img/stories-icon.png',
          scale: 0.8,
          id: {
            id: story.id,
            title: story.title,
            text: story.text,
            url: story.url,
            image: story.image,
            lat: story.lat,
            lon: story.lon,
            type: 'story',
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

StoriesLayer.propTypes = {
  stories: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  map: PropTypes.object
};

StoriesLayer.defaultProps = { map: {} };

const mapStateToProps = state => ({ stories: state.stories.data || null });

export default connect(mapStateToProps)(StoriesLayer);
