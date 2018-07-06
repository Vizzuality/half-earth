import React from 'react';
import cx from 'classnames';

import styles from './video-content-styles.scss';

const VideoContent = ({ className, content, playing, onClickPlay }) => {
  const { description, background, video } = content;
  return (
    <div
      className={cx([className, styles.videoContent])}
      style={{ backgroundImage: `url(${background})` }}
    >
      {!playing ? (
        <div className={styles.content}>
          <button onClick={onClickPlay} className={styles.play}>
            <svg
              className={styles.triangle}
              xmlns="http://www.w3.org/2000/svg"
              width="768"
              height="768"
              viewBox="0 0 768 768"
            >
              <path d="M672 353.28L134.4 7.68C122.88 0 107.52 0 96 7.68 84.48 11.52 76.8 23.04 76.8 38.4v691.2c0 15.36 7.68 26.88 19.2 34.56 7.68 3.84 11.52 3.84 19.2 3.84s15.36-3.84 19.2-7.68L672 414.72c11.52-7.68 19.2-19.2 19.2-30.72s-7.68-26.88-19.2-30.72zm-518.4 307.2V107.52L583.68 384 153.6 660.48z" />
            </svg>
          </button>
          <p className={styles.description}>{description}</p>
        </div>
      ) : (
        <div className={styles.content}>
          <video src={video} autoPlay={playing} />
        </div>
      )}
    </div>
  );
};
export default VideoContent;
