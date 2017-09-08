import React from 'react'
import CesiumMap from 'components/cesium/map'
import Zoom from 'components/zoom'
import ImageProvider from 'components/cesium/image-provider'

const birdsVisible = false
const mammalsVisible = false
const urbanExpansionVisible = true
const lockNavigation = false

const Home = ({ match: { params: { scope } } }) => (
  <div>
    <CesiumMap lockNavigation={lockNavigation} zoomLevel={scope}>
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
    <Zoom />
  </div>
)

export default Home
