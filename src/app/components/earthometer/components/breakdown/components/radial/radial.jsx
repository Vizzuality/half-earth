import React, { Component } from 'react'
import { themr } from 'react-css-themr'
import cx from 'classnames'

import styles from './radial-styles.scss'

class RadialComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 10,
      height: 10,
      strokeWidth: 1
    }
  }

  componentDidMount () {
    const strokeWidth = this.circle.getAttribute('stroke-width')
    const { width, height } = this.svg.parentNode.getBoundingClientRect()
    this.setState({ width, height, strokeWidth })
  }

  render () {
    const { progress, background, className, theme } = this.props
    const { width, height, strokeWidth } = this.state
    const center = width / 2

    // The stroke is applied half inside the circle, so we need to account for it in order to make it appear outside the circle.
    const radius = center - strokeWidth / 2
    // Set the circumference of the circle as our `stroke-dasharray` and our initial `stroke-dashoffset`
    const strokeDasharray = 2 * radius * Math.PI
    // Express progress as a percentage of stroke-dasharray. The difference between stroke-dasharray and this percentage is the stroke-dashoffset
    const strokeDashoffset =
      progress > 0
        ? strokeDasharray - strokeDasharray / 100 * progress
        : strokeDasharray

    const pad = 2
    const dpad = pad * 2

    return (
      <div className={cx(theme.container, className)}>
        <svg
          className={theme.svg}
          ref={el => {
            this.svg = el
          }}
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox={`-${pad} -${pad} ${width + dpad} ${height + dpad}`}
          style={{ backgroundImage: background }}
        >
          <circle
            className={theme.circle}
            ref={el => {
              this.circle = el
            }}
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            transform={`rotate(270, ${center}, ${center})`}
          />
        </svg>
      </div>
    )
  }
}

export default themr('RadialComponent', styles)(RadialComponent)
