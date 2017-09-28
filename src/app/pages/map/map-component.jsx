import React from 'react'

import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import ModelProvider from 'components/cesium/model-provider'

// import styles from './home-styles.scss'
const styles = {}
const lockNavigation = true

const scope = path => path.replace('/', '') || 'hidden'
const birdPosition = [22.606301200000004, -19.6, 10000.0]
const displace = (x, y, z, amt = 0.1, i = 1) => [x, y + amt * (i / 10), z]
const birds = [] // new Array(9).fill(0)

const Map = ({ map, location }) => (
  <CesiumMap
    className={styles.map}
    lockNavigation={lockNavigation}
    zoomLevel={scope(location.pathname)}
  >
    {birds.map((bird, i) => (
      <ModelProvider
        key={`bird-${i}`}
        url="/bird.gltf"
        scale="150.0"
        coordinates={displace(...birdPosition, i)}
        animate
        speed={3 + i / 10}
      />
    ))}
    {map.layers.map(
      layer =>
        layer.url ? <ImageProvider key={layer.name} {...layer} /> : null
    )}
  </CesiumMap>
)

export default Map