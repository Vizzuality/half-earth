import React from 'react'
import { onlyUpdateForKeys } from 'recompose'

import CesiumMap from 'components/cesium/map'
import ImageProvider from 'components/cesium/image-provider'
import ModelProvider from 'components/cesium/model-provider'

// import styles from './home-styles.scss'
const styles = {}
const birdsVisible = false
const mammalsVisible = false
const urbanExpansionVisible = true
const keyBiodiversityAreasVisible = true
const protectedAreasVisible = true
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
      type="UrlTemplate"
      url="https://cartocdn-ashbu.global.ssl.fastly.net/simbiotica/api/v1/map/f270dbb613da2f1070ba58689f139d85:1506097102253/0/{z}/{x}/{y}.png"
      visible={keyBiodiversityAreasVisible}
    />
    <ImageProvider
      type="UrlTemplate"
      url="https://cartocdn-ashbu.global.ssl.fastly.net/simbiotica/api/v1/map/7ee5af5d52cd4929232b8b60961cbd02:1462351287227/0/{z}/{x}/{y}.png"
      visible={protectedAreasVisible}
    />
    <ImageProvider
      type="WebMapService"
      format="image/png"
      layers="GUF28_DLR_v1_Mosaic"
      srs="EPSG:4326"
      transparent
      url="https://geoservice.dlr.de/eoc/land/wms?service=WMS&request=GetMap"
      visible={urbanExpansionVisible}
    />
  </CesiumMap>
)

export default onlyUpdateForKeys(['location'])(Map)
