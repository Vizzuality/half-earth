import { Component } from 'react'
import includes from 'lodash/includes'
import isUndefined from 'lodash/isUndefined'
const { Cesium } = window

class Billboard extends Component {
  componentWillUnmount () {
    const { viewer } = this.props
    viewer.entities.remove(this.entity)
  }
  handleHover = hoverPosition => {
    const { viewer, onMouseHover, onMouseOut } = this.props
    if (!viewer) return false
    const { scene } = viewer
    const pickedObject = scene.pick(hoverPosition)

    viewer.entities.values.map(bill => {
      if (!bill.billboard) return bill
      if (pickedObject) {
        if (pickedObject.id.id === bill.id) {
          bill.billboard.image = bill.imageHover
          onMouseHover && onMouseHover(pickedObject.id.id)
        } else {
          bill.billboard.image = bill.image
        }
      } else {
        bill.billboard.image = bill.image
        onMouseOut && onMouseOut()
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
      position: [lat, long],
      color,
      show,
      distanceDisplayCondition
    } = this.props

    if (!viewer) return false
    this.entity = viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(lat, long),
      id,
      image,
      imageHover,
      billboard: {
        image,
        color,
        distanceDisplayCondition,
        imageHover,
        width,
        height,
        show
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
    color,
    show,
    ...props
  }) {
    if (!viewer) return false
    const existing = viewer.entities.values.map(e => e.id)
    if (!includes(existing, id)) this.mountBillboard(viewer)
    if (clickedPosition) this.handleClick(clickedPosition)
    if (hoverPosition) this.handleHover(hoverPosition)
    if (color && this.entity.billboard.color !== color) {
      this.entity.billboard.color = color
    }
    if (!isUndefined(show) && this.entity.billboard.show !== show) {
      this.entity.billboard.show = show
    }
  }

  render () {
    return null
  }
}

export default Billboard
