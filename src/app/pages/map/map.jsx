import React from 'react'
import { onlyUpdateForKeys } from 'recompose'

import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import ModelProvider from 'components/cesium/model-provider'

// import styles from './home-styles.scss'
const styles = {}
const birdsVisible = false
const mammalsVisible = false
const urbanExpansionVisible = false
const lockNavigation = true

const scope = path => path.replace('/', '') || 'hidden'
const birdPosition = [22.606301200000004, -19.6, 10000.0]
const displace = (x, y, z, amt = 0.1, i = 1) => [x, y + amt * (i / 10), z]
const birds = [] // new Array(9).fill(0)

const Map = props => (
  <CesiumMap
    className={styles.map}
    lockNavigation={lockNavigation}
    zoomLevel={scope(props.location.pathname)}
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
    <ImageProvider
      type="UrlTemplate"
      url="http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_birds/{z}/{x}/{y}.png"
      visible={birdsVisible}
    />
    <ImageProvider
      type="UrlTemplate"
      url="http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_mammals/{z}/{x}/{y}.png"
      visible={mammalsVisible}
    />
    <ImageProvider
      type="WebMapService"
      url="https://geoservice.dlr.de/eoc/land/wms?service=WMS&request=GetMap&format=image/png&layers=GUF28_DLR_v1_Mosaic&SRS=EPSG:4326&TRANSPARENT=true"
      visible={urbanExpansionVisible}
    />
  </CesiumMap>
)

export default onlyUpdateForKeys(['location'])(Map)
