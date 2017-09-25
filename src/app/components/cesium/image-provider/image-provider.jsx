import { Component } from 'react'
const { Cesium } = window

const notEmpty = o => o && o._layers && Boolean(o._layers.length)

class ImageProvider extends Component {
  componentWillReceiveProps (props) {
    const {
      cLayers,
      visible,
      type,
      viewer,
      url,
      layers,
      ...parameters
    } = props
    if (notEmpty(cLayers)) {
      console.log({ url, layers, parameters })
      const provider = new Cesium[`${type}ImageryProvider`]({
        url,
        layers,
        parameters
      })
      const layer = cLayers.addImageryProvider(provider)
      layer.show = Boolean(visible)
    }
  }

  render () {
    return null
  }
}

export default ImageProvider
