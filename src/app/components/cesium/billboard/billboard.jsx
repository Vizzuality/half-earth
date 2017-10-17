import { Component } from 'react'
import includes from 'lodash/includes'
const { Cesium } = window

class Billboard extends Component {
  handleHover = hoverPosition => {
    const { viewer } = this.props
    if (!viewer) return false
    const { scene } = viewer
    const pickedObject = scene.pick(hoverPosition)

    viewer.entities.values.map(bill => {
      if (pickedObject) {
        if (pickedObject.id.id === bill.id) {
          bill.billboard.image = bill.imageHover
        } else {
          bill.billboard.image = bill.image
        }
      } else {
        bill.billboard.image = bill.image
      }
    })
  }

  handleClick = clickedPosition => {
    const { viewer, onClick, id } = this.props
    if (!viewer) return false
    const { scene } = viewer
    const pickedObject = scene.pick(clickedPosition)
    if (Cesium.defined(pickedObject) && pickedObject.id.id === id) {
      onClick(pickedObject.id.id)
    }
  }

  mountBillboard = viewer => {
    const {
      id,
      url: image,
      urlHover: imageHover,
      width,
      height,
      position: [lat, long]
    } = this.props
    if (!viewer) return false

    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(lat, long),
      id,
      image,
      imageHover,
      billboard: {
        image,
        imageHover,
        width,
        height
      }
    })
  }

  componentWillReceiveProps ({
    viewer,
    id,
    url: image,
    urlHover: imageHover,
    width,
    height,
    position: [lat, long],
    onClick,
    clickedPosition,
    hoverPosition,
    ...props
  }) {
    if (!viewer) return false
    const existing = viewer.entities.values.map(e => e.id)
    if (!includes(existing, id)) this.mountBillboard(viewer)
    if (clickedPosition) this.handleClick(clickedPosition)
    if (hoverPosition) this.handleHover(hoverPosition)
  }

  render () {
    return null
  }
}

export default Billboard
