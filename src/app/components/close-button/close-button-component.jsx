import React from 'react';
import cx from 'classnames';
import { themr } from 'react-css-themr';

import styles from './close-button-styles.scss';

const CloseButton = ({ className, close, theme }) => (
  <button className={cx(theme.close, className)} onClick={close} />
);
export default themr('CloseButton', styles)(CloseButton);
