import React from 'react'
import CesiumMap from 'components/cesium-map'
import ImageProvider from 'components/cesium-map/image-provider'

const birdsVisible = false
const mammalsVisible = false
const urbanExpansionVisible = true
const lockNavigation = false

const Home = props => (
  <div>
    <h1>Home</h1>
    <CesiumMap lockNavigation={lockNavigation}>
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
        url="https://geoservice.dlr.de/eoc/land/ows?service=WMS&request=GetMap&format=image/png&width=20&height=20&layer=GUF28_DLR_v1_Mosaic&style=guf_8bit_bw&"
        visible={urbanExpansionVisible}
      />
    </CesiumMap>
  </div>
)

export default Home
