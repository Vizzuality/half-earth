import { Component } from 'react'
const { Cesium } = window

const notEmpty = o => o && Boolean(o._layers.length)

class ImageProvider extends Component {
  constructor (props) {
    super(props)
    this.layer = null
  }

  componentWillReceiveProps ({ layers, url, visible }) {
    if (notEmpty(layers)) {
      this.layer = layers.addImageryProvider(
        new Cesium.UrlTemplateImageryProvider({ url })
      )
      this.layer.show = Boolean(this.props.visible)
    }
  }

  render () {
    return null
  }
}

export default ImageProvider
