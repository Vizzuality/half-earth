import { Component } from 'react'
import includes from 'lodash/includes'
const { Cesium } = window

class Billboard extends Component {
  handleHover = hoverPosition => {
    const { viewer, url, urlHover } = this.props
    if (!viewer) return false
    const { scene } = viewer
    const pickedObject = scene.pick(hoverPosition)

    viewer.entities.values.forEach(bill => {
      if (pickedObject) {
        if (pickedObject.id.id === bill.id) {
          bill.billboard.image = urlHover
        } else {
          bill.billboard.image = url
        }
      } else {
        bill.billboard.image = url
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

  mountBillboard = () => {
    const {
      viewer,
      id,
      url: image,
      width,
      height,
      position: [lat, long]
    } = this.props
    if (!viewer) return false
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

    if (!includes(existing, id)) this.mountBillboard()
    if (hoverPosition) this.handleHover(hoverPosition)
    if (clickedPosition) this.handleClick(clickedPosition)
  }

  render () {
    return null
  }
}

export default Billboard
