import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import cx from 'classnames';
import { SwitchInput, Button, Icon } from 'he-components';

import shareIcon from 'assets/icons/share-icon.svg';
import gaficasIcon from 'assets/icons/icon-binoculars.svg';
import helpIcon from 'assets/icons/help-icon.svg';
import locateIcon from 'assets/icons/locate.svg';

import styles from './toolbar-styles.scss';

class ToolbarComponent extends PureComponent {
  render() {
    const {
      className,
      halfEarthDatasets,
      handleInfoClick,
      handleDatasetChange,
      handleShareClick,
      handleCenterLocationClick,
      showLocation
    } = this.props;
    const datasetsTooltip = (
      <div className={styles.tooltipContainer}>
        <h4 className={styles.tooltipTitle}>The View from Half-Earth</h4>
        {
          halfEarthDatasets &&
            halfEarthDatasets.map(
              dataset =>
                dataset.layers.map(layer => (
                  <SwitchInput
                    id={layer.slug}
                    key={layer.slug}
                    checked={layer.active}
                    theme={styles}
                    onChange={value => handleDatasetChange(layer, value)}
                    label={dataset.name}
                  />
                ))
            )
        }
      </div>
    );
    return (
      <div className={cx(styles.toolbar, className)}>
        <Button theme={styles} onClick={handleShareClick}>
          <Icon icon={shareIcon} />
        </Button>
        <Button theme={styles} onClick={handleInfoClick}>
          <Icon icon={helpIcon} />
        </Button>
        <Tooltip
          placement="left"
          offset={{ left: 20 }}
          trigger={[ 'click' ]}
          overlay={datasetsTooltip}
          overlayClassName="c-rc-tooltip toolbar-tooltip"
        >
          <Button theme={styles}>
            <Icon icon={gaficasIcon} />
          </Button>
        </Tooltip>
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
  halfEarthDatasets: PropTypes.array,
  showLocation: PropTypes.bool,
  className: PropTypes.string,
  handleInfoClick: PropTypes.func.isRequired,
  handleShareClick: PropTypes.func.isRequired,
  handleDatasetChange: PropTypes.func.isRequired,
  handleCenterLocationClick: PropTypes.func.isRequired
};

ToolbarComponent.defaultProps = { halfEarthDatasets: null, showLocation: false, className: '' };

export default ToolbarComponent;
