import { Component } from 'react';
const { Cesium } = window;

class CesiumLayer extends Component {
  static getProvider(type, options) {
    return new Cesium[`${type}ImageryProvider`](options);
  }

  layer = null;

  componentDidUpdate() {
    const { layersCollection, visible, opacity } = this.props;
    if (this.layer) {
      this.layer.show = !!visible;
      this.layer.alpha = opacity / 100 || 1;
    } else if (layersCollection.length > 0) {
      this.addLayer();
    }
  }

  componentWillUnmount() {
    const { layersCollection } = this.props;
    layersCollection.remove(this.layer);
  }

  addLayer() {
    const { type, url, layersCollection } = this.props;
    const provider = CesiumLayer.getProvider(type, { url });
    provider.errorEvent.addEventListener(() => false); // hides warning
    this.layer = layersCollection.addImageryProvider(provider);
  }

  render() {
    return null;
  }
}

export default CesiumLayer;
