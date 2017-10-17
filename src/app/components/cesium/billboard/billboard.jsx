import { Component } from 'react'
import includes from 'lodash/includes'
const { Cesium } = window

class Billboard extends Component {
  componentWillReceiveProps ({
    viewer,
    id,
    url: image,
    width,
    height,
    position: [lat, long],
    onClick,
    clickedPosition,
    ...props
  }) {
    if (!viewer) return false
    const existing = viewer.entities.values.map(e => e.id)

    if (!includes(existing, id)) {
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(lat, long),
        id,
        billboard: {
          image,
          width,
          height
        }
      })
    }
    const { scene } = viewer
    if (clickedPosition) {
      var pickedObject = scene.pick(clickedPosition)
      if (Cesium.defined(pickedObject) && pickedObject.id.id === id) {
        onClick(pickedObject.id.id)
      }
    }
  }

  render () {
    return null
  }
}

export default Billboard
