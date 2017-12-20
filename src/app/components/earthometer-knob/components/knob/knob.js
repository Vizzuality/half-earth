import { createElement, Component } from 'react'
import KnobComponent from './knob-component'
import { assign } from 'utils'
import { lerp, clamp, getAngle } from './knob-utils'

export const π = Math.PI

class Knob extends Component {
  constructor (props) {
    super(props)
    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.getContainer = this.getContainer.bind(this)

    const { halfTickWidth, handleWidth, trackWidth, radius } = props
    const C = 2 * π * radius
    const trackDashOffset = 2 * π * (radius / 6)
    const halfOffset = C - trackDashOffset - halfTickWidth

    const halfDashOffset =
      halfOffset * (1 - 0.5) + trackDashOffset + 2 * halfTickWidth
    const halfDashArray = `${halfTickWidth} ${C}`
    const handleDashArray = `${handleWidth} ${C}`
    const handleOffset = C - trackDashOffset - handleWidth

    this.C = C
    this.R = radius
    this.handleWidth = handleWidth
    this.halfOffset = halfOffset
    this.trackDashOffset = trackDashOffset
    this.halfDashOffset = halfDashOffset
    this.halfDashArray = halfDashArray
    this.handleDashArray = handleDashArray
    this.handleOffset = handleOffset
    this.trackWidth = trackWidth

    this.state = {
      percent: 0,
      angle: 0
    }
  }

  componentDidMount () {
    this.containerEl.addEventListener('mousedown', this.onMouseDown)
    this.containerEl.addEventListener('mousedown', this.onMouseMove)
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

    const state = {
      angle,
      percent
    }

    this.props.onChange && this.props.onChange(state)
    this.setState(state)
  }

  onMouseUp () {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  }

  componentWillUnmount () {
    this.containerEl.removeEventListener('mousedown', this.onMouseMove)
  }

  getContainer (el) {
    this.containerEl = el
  }

  render () {
    const { percent } = this.state
    const {
      R,
      C,
      halfDashOffset,
      handleDashArray,
      halfDashArray,
      trackDashOffset,
      handleWidth,
      handleOffset,
      trackWidth
    } = this

    const progressDashOffset =
      (C - (trackDashOffset + handleWidth)) * (1 - percent) +
      trackDashOffset +
      handleWidth

    const handleDashOffset =
      handleOffset * (1 - percent) + trackDashOffset + 2 * handleWidth

    return createElement(
      KnobComponent,
      assign({}, this.props, {
        radius: R,
        percent,
        trackWidth,
        dashArray: C,
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
