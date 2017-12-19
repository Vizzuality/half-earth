import { createElement, Component } from 'react'
import KnobComponent from './knob-component'
import { lerp, clamp, getAngle } from './knob-utils'

export const π = Math.PI

class Knob extends Component {
  constructor (props) {
    super(props)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.getContainer = this.getContainer.bind(this)

    this.R = this.props.radius || 90
    this.C = 2 * π * this.R

    this.state = {
      percent: 0,
      angle: 0
    }
  }

  componentDidMount () {
    this.containerEl.addEventListener('mousedown', this.onMouseDown)
  }

  onMouseDown (e) {
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
    var boundingBox = this.containerEl.getBoundingClientRect()

    this.container = {
      center: {
        x: boundingBox.left + boundingBox.width / 2,
        y: boundingBox.top + boundingBox.height / 2
      }
    }
  }

  onMouseMove (e) {
    let angle = getAngle(
      this.container.center.x,
      this.container.center.y,
      e.pageX,
      e.pageY
    )

    // offet to start where the crop starts
    angle -= 120
    // fix negative values when arriving to (360-offset)
    if (angle < 0) angle += 360
    if (angle > 330) angle = 0 // reset going going over center

    const percent = clamp(lerp(angle, 0, 300, 0, 1), 0, 0.5)
    this.setState({
      angle,
      percent
    })
  }

  onMouseUp () {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  }

  getContainer (el) {
    this.containerEl = el
  }

  render () {
    const { percent } = this.state
    const { R, C } = this

    // props
    const width = 12
    const handle = 10
    const half = 1

    const dashArray = C
    const trackDashOffset = 2 * π * (R / 6)
    const progressDashOffset =
      (C - (trackDashOffset + handle)) * (1 - percent) +
      trackDashOffset +
      handle

    const halfOffset = C - trackDashOffset - half
    const halfDashOffset = halfOffset * (1 - 0.5) + trackDashOffset + 2 * half
    const halfDashArray = `${half} ${C}`

    const handleOffset = C - trackDashOffset - handle
    const handleDashOffset =
      handleOffset * (1 - percent) + trackDashOffset + 2 * handle
    const handleDashArray = `${handle} ${C}`

    return createElement(
      KnobComponent,
      Object.assign({}, this.props, {
        radius: R,
        percent,
        width,
        dashArray,
        trackDashOffset,
        progressDashOffset,
        halfDashOffset,
        halfDashArray,
        handleDashOffset,
        handleDashArray,
        getContainer: this.getContainer
      })
    )
  }
}

export default Knob
