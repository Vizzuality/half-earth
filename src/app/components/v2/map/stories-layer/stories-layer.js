import { Component } from 'react';
import { connect } from 'react-redux';

class StoriesLayer extends Component {
  componentDidMount() {
    const { map } = this.props;
    if (map) {
      this.addStoriesMarkers();
    }
  }

  componentDidUpdate() {
    this.addStoriesMarkers();
  }

  addStoriesMarkers() {
    const { stories, map } = this.props;
    const markersCollection = map.scene.primitives.add(new Cesium.BillboardCollection());
    if (stories) {
      stories.forEach(story => {
        markersCollection.add({
          position: Cesium.Cartesian3.fromDegrees(story.lon, story.lat),
          image: 'img/stories-icon.png',
          scale: 0.8,
          id: {
            storyId: story.lat + story.lon,
            title: story.title,
            text: story.subtitle,
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

  render() {
    return null;
  }
}

const mapStateToProps = state => ({ stories: state.stories.data || null });

export default connect(mapStateToProps)(StoriesLayer);
