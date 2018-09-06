/*
  This is a fork of [React slider](https://github.com/whoisandie/react-rangeslider)
  modified for better customization.
*/

import React from 'react';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { themr, themeable } from 'react-css-themr';

import defaultTheme from './slider-theme.scss';
import styles from './slider-styles.scss';

const SliderComponent = props => {
  const {
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
  } = props;
  const fillStyle = { [dimension]: `${coords.fill}px` };
  const handleStyle = { [direction]: `${coords.handle}px` };

  const thm = themeable(isEmpty(theme) ? defaultTheme : theme, styles);

  return (
    <div
      ref={sliderRef}
      className={cx(className, thm.range, thm[`slider-${orientation}`], {
        [thm['slider-reverse']]: reverse,
        [thm[className]]: className,
        [thm.disabled]: disabled
      })}
      onMouseDown={handleStart}
      onMouseMove={handleDrag}
      onMouseUp={handleEnd}
      onTouchStart={handleDrag}
      onTouchMove={handleDrag}
      onTouchEnd={handleEnd}
    >
      <div className={thm.progress} style={fillStyle} />
      <div ref={handleRef} className={thm.handle} style={handleStyle} />
      {children}
    </div>
  );
};

export default themr('slider')(SliderComponent);
