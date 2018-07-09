import React from 'react';
import styles from './knob-styles.scss';

const Knob = ({
  radius,
  percent,
  trackWidth,
  dashArray,
  trackDashOffset,
  progressDashOffset,
  halfDashOffset,
  halfDashArray,
  handleDashOffset,
  handleDashArray,
  getContainer
}) => {
  const dim = 2 * radius + 2 * trackWidth;

  return (
    <svg
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
        strokeWidth={trackWidth}
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
        strokeWidth={trackWidth}
      />
      <circle
        className={styles.half}
        strokeDashoffset={halfDashOffset}
        strokeDasharray={halfDashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeWidth={trackWidth + 4}
      />
      <circle
        className={styles.handle}
        strokeDashoffset={handleDashOffset}
        strokeDasharray={handleDashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeWidth={trackWidth + 10}
      />
      <circle
        ref={getContainer}
        className={styles.surface}
        strokeDashoffset={trackDashOffset}
        strokeDasharray={dashArray}
        cx={dim / 2}
        cy={dim / 2}
        r={radius}
        fill="none"
        strokeLinecap="round"
        strokeWidth={trackWidth + 10}
      />
    </svg>
  );
};

export default Knob;
