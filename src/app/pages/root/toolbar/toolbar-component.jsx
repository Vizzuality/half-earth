import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon } from 'he-components';

import shareIcon from 'assets/icons/share.svg';
import infoIcon from 'assets/icons/icon-info.svg';
import locateIcon from 'assets/icons/locate.svg';

import styles from './toolbar-styles.scss';

class ToolbarComponent extends PureComponent {
  render() {
    const { className, handleInfoClick, handleShareClick, handleCenterLocationClick, showLocation } = this.props;
    return (
      <div className={cx(styles.toolbar, className)}>
        <Button theme={styles} onClick={handleShareClick}>
          <Icon icon={shareIcon} />
        </Button>
        <Button theme={styles} onClick={handleInfoClick}>
          <Icon icon={infoIcon} />
        </Button>
        {
          showLocation && (
            <Button theme={styles} onClick={handleCenterLocationClick}>
              <Icon icon={locateIcon} />
            </Button>
          )
        }
      </div>
    );
  }
}

ToolbarComponent.propTypes = {
  showLocation: PropTypes.bool,
  className: PropTypes.string,
  handleInfoClick: PropTypes.func.isRequired,
  handleShareClick: PropTypes.func.isRequired,
  handleCenterLocationClick: PropTypes.func.isRequired
};

ToolbarComponent.defaultProps = { showLocation: false, className: '' };

export default ToolbarComponent;
