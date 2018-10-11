import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';
import chevronIcon from 'assets/icons/icon-chevron.svg';
import closeIcon from 'assets/icons/icon-cross.svg';

import styles from './map-tooltip-styles.scss';

const ACTION_TEXT = { story: 'go to story', place: 'go to landscape view' };

const BACKGROUND_URL = { story: 'img/stories/', place: 'img/places/' };

const TERRAIN_CAMERA_OFFSET = new Cesium.HeadingPitchRange(
  Cesium.Math.toRadians(0.0),
  Cesium.Math.toRadians(-27.0),
  200000.0
);

class MapTooltipComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { tooltipPosition: { x: -11110, y: 0 } };
    this.height = 450;
    this.width = 145;
  }

  componentWillMount() {
    const { map } = this.props;
    map.camera.moveEnd.addEventListener(this.updateTooltipPositionAndShow);
  }

  componentDidMount() {
    this.height = this.tooltip.clientHeight + 25;
  }

  componentWillUnmount() {
    const { map } = this.props;
    map.camera.moveEnd.removeEventListener(this.updateTooltipPositionAndShow);
  }

  updateTooltipPositionAndShow = () => {
    const { lon, lat, map } = this.props;
    const { scene } = map;
    const cartesianPosition = Cesium.Cartesian3.fromDegrees(lon, lat);
    const tooltipPosition = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      scene,
      cartesianPosition
    );
    this.setState({ tooltipPosition });
  };

  removeTooltip = () => {
    const { query, updateQueryParam } = this.props;
    updateQueryParam({ query: { ...query, activeMarker: undefined } });
  };

  setMapTerrain = () => {
    const { query, updateQueryParam, coordinates, cellId } = this.props;
    const activeLayers = query.activeLayers ? query.activeLayers
        .filter(l => l.layerCategory !== 'terrestrial' && l.layerCategory !== 'aquatic')
        .map(l => ({ ...l, opacity: l.landscapeOpacity || l.opacity })) : null;
    const params = {
      terrain: true,
      activeLayers,
      terrainCameraOffset: TERRAIN_CAMERA_OFFSET,
      cellCoordinates: coordinates,
      cellId,
      activeMarker: undefined
    };
    updateQueryParam({ query: { ...query, ...params } });
  };

  render() {
    const { type, title, image, text, url, handleTooltipClose } = this.props;
    const { tooltipPosition } = this.state;
    return (
      <div
        className={styles.container}
        style={{
          transform: `translate(${tooltipPosition.x - this.width}px, ${tooltipPosition.y -
            this.height}px)`
        }}
        ref={tooltip => {
          this.tooltip = tooltip;
        }}
      >
        <div
          style={{ backgroundImage: `url(${BACKGROUND_URL[type]}${image}` }}
          className={styles.image}
        />
        <Button onClick={handleTooltipClose} theme={{ button: styles.closeButton }}>
          <Icon icon={closeIcon} theme={{ icon: styles.closeIcon }} />
        </Button>
        <section className={styles.contentSection}>
          <h2 className={styles.title}>
            {title}
          </h2>
          <p className={styles.text}>
            {text}
          </p>
          <section className={styles.actionSection}>
            {
              url
                ? (
                  <a
                    href={url}
                    className={styles.linkButton}
                    target="_blank"
                    rel="noopener noreferrer"
                    theme={{ button: styles.linkButton }}
                  >
                    <span className={styles.actionText}>
                      {ACTION_TEXT[type]}
                    </span>
                    <Icon icon={chevronIcon} theme={{ icon: styles.chevronIcon }} />
                  </a>
)
                : (
                  <Button
                    onClick={this.setMapTerrain}
                    className={styles.linkButton}
                    theme={{ button: styles.linkButton }}
                  >
                    <span className={styles.actionText}>
                      {ACTION_TEXT[type]}
                    </span>
                    <Icon icon={chevronIcon} theme={{ icon: styles.chevronIcon }} />
                  </Button>
)
            }
          </section>
        </section>
      </div>
    );
  }
}

MapTooltipComponent.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  coordinates: PropTypes.array,
  cellId: PropTypes.string,
  handleTooltipClose: PropTypes.func.isRequired,
  updateQueryParam: PropTypes.func.isRequired,
  query: PropTypes.object,
  lat: PropTypes.number,
  lon: PropTypes.number,
  map: PropTypes.object.isRequired
};

MapTooltipComponent.defaultProps = {
  image: '',
  text: '',
  url: null,
  coordinates: null,
  cellId: null,
  query: {},
  lat: null,
  lon: null
};

export default MapTooltipComponent;
