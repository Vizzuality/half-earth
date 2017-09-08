import { Component } from 'react'
const { Cesium } = window

const notEmpty = o => o && Boolean(o._layers.length)

class ImageProvider extends Component {
  componentWillReceiveProps ({ layers, visible, url, type, ...rest }) {
    if (notEmpty(layers)) {
      const provider = new Cesium[`${type}ImageryProvider`]({ url })
      const layer = layers.addImageryProvider(provider)
      layer.show = Boolean(this.props.visible)
    }
  }

  render () {
    return null
  }
}

export default ImageProvider
