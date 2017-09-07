import React from 'react'
import CesiumMap from 'components/cesium-map'
import ImageProvider from 'components/cesium-map/image-provider'

const birdsVisible = false
const mammalsVisible = false

const Home = props => (
  <div>
    <h1>Home</h1>
    <CesiumMap>
      <ImageProvider
        url="http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_birds/{z}/{x}/{y}.png"
        visible={birdsVisible}
      />
      <ImageProvider
        url="http://storage.googleapis.com/half-earth/v1/demo/mol-rgb/sr_mammals/{z}/{x}/{y}.png"
        visible={mammalsVisible}
      />
    </CesiumMap>
  </div>
)

export default Home
