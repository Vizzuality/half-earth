import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import cx from 'classnames';
import { SwitchInput, Button, Icon } from 'he-components';

import shareIcon from 'assets/icons/share-icon.svg';
import gaficasIcon from 'assets/icons/icon-binoculars.svg';
import helpIcon from 'assets/icons/help-icon.svg';
import gridIcon from 'assets/icons/globe.svg';
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
      handleBordersLayerClick,
      showLocation
    } = this.props;
    const infoTooltipText = {
      share: 'Click to obtain a share link, embed code, and share on social networks',
      info: 'Introduction to key features of navigation and the map',
      borders: 'Add country borders and labels to the map',
      halfEarth: 'The view from Half-Earth',
      location: 'Focus the map on your current location'
    };
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
        <Tooltip
          placement="left"
          offset={{ left: 20 }}
          overlay={<div>{infoTooltipText.share}</div>}
          overlayClassName="c-rc-tooltip toolbar-info-tooltip"
        >
          <button className={styles.button} type="button" onClick={handleShareClick}>
            <Icon icon={shareIcon} />
          </button>
        </Tooltip>
        <Tooltip
          placement="left"
          offset={{ left: 20 }}
          overlay={<div>{infoTooltipText.info}</div>}
          overlayClassName="c-rc-tooltip toolbar-info-tooltip"
        >
          <button className={styles.button} type="button" onClick={handleInfoClick}>
            <Icon icon={helpIcon} />
          </button>
        </Tooltip>
        <Tooltip
          placement="left"
          offset={{ left: 20 }}
          overlay={<div>{infoTooltipText.borders}</div>}
          overlayClassName="c-rc-tooltip toolbar-info-tooltip"
        >
          <button className={styles.button} type="button" onClick={handleBordersLayerClick}>
            <Icon icon={gridIcon} />
          </button>
        </Tooltip>
        <Tooltip
          placement="left"
          offset={{ left: 20 }}
          overlay={<div>{infoTooltipText.halfEarth}</div>}
          overlayClassName="c-rc-tooltip toolbar-info-tooltip"
        >
          <div>
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
          </div>
        </Tooltip>
        {
          showLocation && (
          <Tooltip
            placement="left"
            offset={{ left: 20 }}
            overlay={<div>{infoTooltipText.location}</div>}
            overlayClassName="c-rc-tooltip toolbar-info-tooltip"
          >
            <button className={styles.button} type="button" onClick={handleCenterLocationClick}>
              <Icon icon={locateIcon} />
            </button>
          </Tooltip>
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
  handleCenterLocationClick: PropTypes.func.isRequired,
  handleBordersLayerClick: PropTypes.func.isRequired
};

ToolbarComponent.defaultProps = { halfEarthDatasets: null, showLocation: false, className: '' };

export default ToolbarComponent;
