import React from 'react'
import cx from 'classnames'

import CesiumMap from 'components/cesium/map'
import Zoom from 'components/zoom'
import ImageProvider from 'components/cesium/image-provider'
import Local from 'pages/local'

import zoomStyles from 'styles/themes/zoom-styles.scss'
import styles from './home-styles.scss'

const birdsVisible = false
const mammalsVisible = false
const urbanExpansionVisible = false
const lockNavigation = true

const Home = ({ match: { params: { scope } } }) => (
  <div>
    <CesiumMap
      className={styles.map}
      lockNavigation={lockNavigation}
      zoomLevel={scope}
      globe={Boolean(scope)}
    >
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
    <div>
      <Zoom
        className={cx(zoomStyles.zoom, zoomStyles.home)}
        theme={zoomStyles}
      />
      <Local />
    </div>
    <Zoom
      className={cx(zoomStyles.zoom, zoomStyles.sidebar)}
      theme={zoomStyles}
    />
  </div>
)

export default Home
