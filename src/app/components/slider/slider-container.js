import { Component, createElement } from 'react'
import PropTypes from 'prop-types'
import SliderComponent from './slider-component'
import constants from './slider-constants'

// helpers
function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

function clamp (value, min, max) {
  return Math.min(Math.max(value, min), max)
}

class SliderContainer extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      // computed limit based on the handle's size
      limit: 0,
      grab: 0,
      mouseDown: false
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.handleUpdate)
    this.handleUpdate()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleUpdate)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.update !== this.props.update) this.handleUpdate()
  }

  /**
   * Calculate position of slider based on its value
   * @param  {number} value - Current value of slider
   * @return {position} pos - Calculated position of slider based on value
   */
  getPositionFromValue = value => {
    const { limit } = this.state
    const { min, max } = this.props
    const diffMaxMin = max - min
    const diffValMin = value - min
    const percentage = diffValMin / diffMaxMin
    return Math.round(percentage * limit)
  };

  /**
   * Translate position of slider to slider value
   * @param  {number} pos - Current position/coordinates of slider
   * @return {number} value - Slider value
   */
  getValueFromPosition = pos => {
    let value = null
    const { limit } = this.state
    const { orientation, min, max, step } = this.props
    const percentage = clamp(pos, 0, limit) / (limit || 1)
    const baseVal = step * Math.round(percentage * (max - min) / step)

    if (orientation === 'horizontal') {
      value = baseVal + min
    } else {
      value = max - baseVal
    }

    if (value >= max) value = max
    if (value <= min) value = min

    return value
  };

  /**
   * Calculate position of slider based on value
   * @param  {Object} e - Event object
   * @return {number} value - Slider value
   */
  position = e => {
    const { grab } = this.state
    const { orientation, reverse } = this.props

    const node = this.slider
    const coordinateStyle = constants.orientation[orientation].coordinate
    const directionStyle = reverse
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction

    const clientCoordinateStyle = `client${capitalize(coordinateStyle)}`
    const coordinate = !e.touches
      ? e[clientCoordinateStyle]
      : e.touches[0][clientCoordinateStyle]

    const direction = node.getBoundingClientRect()[directionStyle]
    const grabOffset = grab / 3
    const pos = reverse
      ? direction - coordinate - grabOffset
      : coordinate - direction - grabOffset

    return this.getValueFromPosition(pos)
  };

  /**
   * Update slider state on change
   * @return {void}
   */
  handleUpdate = () => {
    const { orientation } = this.props
    const dimension = capitalize(constants.orientation[orientation].dimension)
    const sliderPos = this.slider[`client${dimension}`]
    const handlePos = this.handle[`offset${dimension}`]

    this.setState({
      limit: sliderPos, // - handlePos,
      grab: handlePos / 2
    })
  };

  /**
   * Handle drag/mousemove event
   * @param  {Object} e - Event object
   * @return {void}
   */
  handleDrag = e => {
    if (!this.state.mouseDown) return
    this.handleNoop(e)
    const { onChange } = this.props
    // const { target } = e;
    if (!onChange) return
    const value = this.position(e)
    this.state.mouseDown && onChange && onChange(value, e)
  };

  /**
   * Attach event listeners to mousemove/mouseup events
   * @return {void}
   */
  handleStart = e => {
    const { onChangeStart } = this.props
    onChangeStart && onChangeStart(e)
    this.state.mouseDown = true
    document.addEventListener('mousemove', this.handleDrag)
    document.addEventListener('mouseup', this.handleEnd)
    this.handleDrag(e)
  };

  /**
   * Detach event listeners to mousemove/mouseup events
   * @return {void}
   */
  handleEnd = e => {
    const { onChangeComplete } = this.props
    onChangeComplete && onChangeComplete(e)
    this.state.mouseDown = false
    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleEnd)
  };

  /**
   * Prevent default event and bubbling
   * @param  {Object} e - Event object
   * @return {void}
   */
  handleNoop = e => {
    e.stopPropagation()
    e.preventDefault()
  };

  /**
   * Grab coordinates of slider
   * @param  {Object} pos - Position object
   * @return {Object} - Slider fill/handle coordinates
   */
  coordinates = pos => {
    let fillPos = null
    const { limit, grab } = this.state
    const { orientation } = this.props

    // const dimension = constants.orientation[orientation].dimension
    // const value = this.getValueFromPosition(pos);
    const handlePos = pos - grab // this.getPositionFromValue(value);
    const sumHandleposGrab = pos

    if (orientation === 'horizontal') {
      fillPos = sumHandleposGrab
    } else {
      fillPos = limit - sumHandleposGrab
    }

    return {
      fill: fillPos,
      handle: handlePos
    }
  };

  render () {
    const {
      value,
      orientation,
      className,
      reverse,
      theme,
      disabled,
      children
    } = this.props
    const { handleStart, handleDrag, handleEnd } = this

    const dimension = constants.orientation[orientation].dimension
    const direction = reverse
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction

    const position = this.getPositionFromValue(value)
    const coords = this.coordinates(position)
    const sliderRef = s => (this.slider = s)
    const handleRef = s => (this.handle = s)

    return createElement(SliderComponent, {
      orientation,
      dimension,
      coords,
      direction,
      className,
      reverse,
      theme,
      disabled,
      sliderRef,
      handleRef,
      handleStart,
      handleDrag,
      handleEnd,
      children
    })
  }
}

SliderContainer.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  orientation: PropTypes.string,
  reverse: PropTypes.bool,
  onChange: PropTypes.func,
  onChangeComplete: PropTypes.func
}

SliderContainer.defaultProps = {
  min: 0,
  max: 1,
  step: 0.001,
  value: 0,
  orientation: 'horizontal',
  tooltip: false,
  reverse: false
}

export default SliderContainer
