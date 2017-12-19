import React from 'react'
import styles from './knob-styles.scss'

const Knob = ({
  radius,
  percent,
  width,
  dashArray,
  trackDashOffset,
  progressDashOffset,
  halfDashOffset,
  halfDashArray,
  handleDashOffset,
  handleDashArray,
  getContainer
}) => {
  const dim = 2 * radius + 2 * width

  return (
    <svg
      ref={getContainer}
      width={dim}
      height={dim}
      className={styles.knob}
      viewBox={`0 0 ${dim} ${dim}`}
    >
      <circle
        className={styles.track}
        strokeDashoffset={trackDashOffset}
        strokeDasharray={dashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeLinecap="round"
        strokeWidth={width}
      />
      <circle
        className={styles.progress}
        strokeDashoffset={progressDashOffset}
        strokeDasharray={dashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeLinecap="round"
        strokeWidth={width}
      />
      <circle
        className={styles.half}
        strokeDashoffset={halfDashOffset}
        strokeDasharray={halfDashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeWidth={width + 4}
      />
      <circle
        className={styles.handle}
        strokeDashoffset={handleDashOffset}
        strokeDasharray={handleDashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeWidth={width + 10}
      />
    </svg>
  )
}

export default Knob
