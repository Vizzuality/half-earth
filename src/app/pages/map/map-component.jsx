import React from 'react'

import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import ModelProvider from 'components/cesium/model-provider'

// import styles from './home-styles.scss'
import random from 'lodash/random'
import zoomLevels from 'data/zoom-levels'
const { Cesium } = window

const styles = {}
const lockNavigation = true

const scope = path => path.replace('/', '') || 'home'
const [lat, long] = zoomLevels(Cesium).local[0]
const birdPosition = [lat - 0.07, long - 0.07, 150000]
const displace = (x, y, z) => [
  x + 0.1 + random(-0.05, 0.5, true),
  y - 0.5 + random(-0.05, 0.5, true),
  z
]
const birds = new Array(100).fill(0)

const Map = ({ map, location }) => (
  <CesiumMap
    className={styles.map}
    lockNavigation={lockNavigation}
    zoomLevel={scope(location.pathname)}
  >
    {birds.map((bird, i) => (
      <ModelProvider
        key={`bird-${i}`}
        url="/img/bird.gltf"
        scale="150.0"
        coordinates={displace(...birdPosition)}
        animate
        speed={1}
      />
    ))}
    {map.layers.map(
      layer =>
        layer.url ? <ImageProvider key={layer.name} {...layer} /> : null
    )}
  </CesiumMap>
)

export default Map
