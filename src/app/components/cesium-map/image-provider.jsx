import { Component } from 'react'
const { Cesium } = window

const notEmpty = o => o && Boolean(o._layers.length)

class ImageProvider extends Component {
  constructor (props) {
    super(props)
    this.layer = null
  }

  componentWillReceiveProps ({ layers, visible, url, type }) {
    if (notEmpty(layers)) {
      const provider = new Cesium[`${type}ImageryProvider`]({ url })
      this.layer = layers.addImageryProvider(provider)
      this.layer.show = Boolean(this.props.visible)
    }
  }

  render () {
    return null
  }
}

export default ImageProvider
