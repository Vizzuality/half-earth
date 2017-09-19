import React from 'react'

const RadialComponent = ({
  progress,
  strokeWidth,
  width,
  background,
  className
}) => {
  // Determine the center of the circle, as that will be both the `cx` and the `cy` attribute.
  const center = width / 2
  // The stroke is applied half inside the circle, so we need to account for it in order to make it appear outside the circle.
  const radius = width / 2 - strokeWidth / 2
  // Set the circumference of the circle as our `stroke-dasharray` and our initial `stroke-dashoffset`
  const strokeDasharray = 2 * radius * Math.PI
  // Express progress as a percentage of stroke-dasharray. The difference between stroke-dasharray and this percentage is the stroke-dashoffset
  const strokeDashoffset =
    progress > 0
      ? strokeDasharray - strokeDasharray / 100 * progress
      : strokeDasharray

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={width}
      viewBox={`0 0 ${width} ${width}`}
      className={className}
      style={{ backgroundImage: background }}
    >
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(270, ${center}, ${center})`}
      />
    </svg>
  )
}

export default RadialComponent
