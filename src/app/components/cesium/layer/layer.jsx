import { Component } from 'react';
const { Cesium } = window;

class CesiumLayer extends Component {
  static getWebMapServiceProvider(options) {
    return new Cesium[`WebMapServiceImageryProvider`](options);
  }

  static getProvider(type, options) {
    if (type === 'WebMapService') {
      return CesiumLayer.getWebMapServiceProvider(options);
    }
    return new Cesium[`${type}ImageryProvider`](options);
  }

  layer = null;

  componentDidUpdate() {
    const { cLayers, visible, opacity } = this.props;
    if (
      cLayers &&
      cLayers._layers &&
      cLayers._layers.length > 0 &&
      this.layer
    ) {
      this.layer.show = !!visible;
      this.layer.alpha = opacity / 100 || 1;
    } else {
      this.addLayer();
    }
  }

  componentWillUnmount() {
    const { viewer } = this.props;
    viewer.imageryLayers.remove(this.layer);
  }

  addLayer() {
    const { type, url, cLayers } = this.props;
    if (!this.layer) {
      const provider = CesiumLayer.getProvider(type, { url });
      provider.errorEvent.addEventListener(() => false); // hides warning
      this.layer = cLayers.addImageryProvider(provider);
    }
  }

  render() {
    return null;
  }
}

export default CesiumLayer;
