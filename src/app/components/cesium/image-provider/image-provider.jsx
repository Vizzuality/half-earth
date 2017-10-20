import { Component } from 'react'
const { Cesium } = window

const notEmpty = o => o && o._layers && Boolean(o._layers.length)

const formatParams = (type, props) => {
  switch (type) {
    case 'WebMapService':
      const { url, layers, ...parameters } = props
      return { url, layers, parameters }

    default:
      return props
  }
}

class ImageProvider extends Component {
  constructor (props) {
    super(props)
    this.layer = null
    this.keep = false
  }
  componentWillUnmount () {
    const { viewer } = this.props
    if (!this.keep) viewer.imageryLayers.remove(this.layer)
  }
  componentWillReceiveProps ({
    cLayers,
    keep,
    visible,
    type,
    viewer,
    ...props
  }) {
    if (notEmpty(cLayers)) {
      if (!this.layer) {
        const provider = new Cesium[`${type}ImageryProvider`](
          formatParams(type, props)
        )
        provider.errorEvent.addEventListener(e => false)
        this.layer = cLayers.addImageryProvider(provider)
      }
      this.keep = keep
      this.layer.show = Boolean(visible)
    }
  }

  render () {
    return null
  }
}

export default ImageProvider
