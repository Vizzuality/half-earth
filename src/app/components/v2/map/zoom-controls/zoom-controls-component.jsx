import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';

import plusIcon from 'assets/icons/plus.svg';
import minusIcon from 'assets/icons/minus.svg';

import styles from './zoom-controls-styles.scss';

const ZoomControlsComponent = props => {
  const { className, handleZoomOut, handleZoomIn } = props;
  return (
    <div className={cx(styles.zoomContainer, className)}>
      <Button theme={styles} onClick={handleZoomIn}>
        <Icon icon={plusIcon} />
      </Button>
      <Button theme={styles} onClick={handleZoomOut}>
        <Icon icon={minusIcon} />
      </Button>
    </div>
  );
};

ZoomControlsComponent.propTypes = {
  className: PropTypes.string,
  handleZoomOut: PropTypes.func.isRequired,
  handleZoomIn: PropTypes.func.isRequired
};

ZoomControlsComponent.defaultProps = { className: {} };

export default ZoomControlsComponent;
