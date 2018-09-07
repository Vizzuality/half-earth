import React, { PureComponent } from 'react';
import Tooltip from 'rc-tooltip'; // eslint-disable-line
// already imported in wri-api-components
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SwitchInput, Button, Icon } from 'he-components';

import shareIcon from 'assets/icons/share.svg';
import infoIcon from 'assets/icons/icon-info.svg';
import layersIcon from 'assets/icons/layers.svg';
import globeIcon from 'assets/icons/globe.svg';
import locateIcon from 'assets/icons/locate.svg';

import styles from './toolbar-styles.scss';

const showLocation = 'geolocation' in navigator;

class ToolbarComponent extends PureComponent {
  render() {
    const {
      className,
      onClick,
      handleInfoClick,
      handleShareClick,
      handleGridChange,
      grids
    } = this.props;
    const globeTooltip = (
      <React.Fragment>
        {grids &&
          grids.layers.map((grid) => (
            <SwitchInput
              id={grid.slug}
              key={grid.slug}
              checked={grid.active}
              theme={styles}
              onChange={(value) => handleGridChange(grid, value)}
              label={grid.name}
            />
          ))}
      </React.Fragment>
    );
    return (
      <div className={cx(styles.toolbar, className)}>
        <Button theme={styles} onClick={handleShareClick}>
          <Icon icon={shareIcon} />
        </Button>
        <Button theme={styles} onClick={handleInfoClick}>
          <Icon icon={infoIcon} />
        </Button>
        <Button theme={styles} onClick={onClick}>
          <Icon icon={layersIcon} />
        </Button>
        <Tooltip
          placement="left"
          offset={{ left: 20 }}
          trigger={['click']}
          overlay={globeTooltip}
          overlayClassName="c-rc-tooltip toolbar-tooltip"
        >
          <Button theme={styles}>
            <Icon icon={globeIcon} />
          </Button>
        </Tooltip>
        {showLocation && (
          <Button theme={styles} onClick={onClick}>
            <Icon icon={locateIcon} />
          </Button>
        )}
      </div>
    );
  }
}

ToolbarComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  grid: PropTypes.object
};

ToolbarComponent.defaultProps = {
  className: '',
  grid: {},
  onClick: () => {
    console.info('TODO');
  }
};

export default ToolbarComponent;
