import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon } from 'he-components';
import cx from 'classnames';
import isEmpty from 'lodash/isEmpty';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import styles from './modal-share-styles';

class ModalShareComponent extends Component {
  handleLinkButtonClick = () => {
    const { setModalShareParams, currentLocation } = this.props;
    setModalShareParams({ linkActive: true, urlToCopy: currentLocation });
  };

  handleEmbedButtonClick = () => {
    const { setModalShareParams, currentLocation } = this.props;
    const embed = `<iframe id="map-iframe" src="${currentLocation}" />`;
    setModalShareParams({ linkActive: false, urlToCopy: embed });
  };

  handleModalClose = () => {
    const { setModalShareParams, currentLocation } = this.props;
    setModalShareParams({ isOpen: false, linkActive: true, urlToCopy: currentLocation });
  };

  handleSocialMediaLink = link => {
    window.open(link);
  };

  render() {
    const {
      isOpen,
      linkActive,
      coordinates,
      orientation,
      shareSocialMedia,
      urlToCopy
    } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={this.handleModalClose} theme={styles}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Share this page</h1>
          <div className={styles.copyContainer}>
            <input type="text" value={urlToCopy} readOnly className={styles.inputButton} />
            <CopyToClipboard text={urlToCopy}>
              <Button theme={{ button: cx(styles.button, styles.copyButton) }}>
                copy
              </Button>
            </CopyToClipboard>
          </div>
          <div className={styles.linkEmbedContainer}>
            <Button
              onClick={this.handleLinkButtonClick}
              theme={{
                button: cx(styles.button, styles.linkEmbedButton, {
                  [styles.activeButton]: linkActive
                })
              }}
            >
              link
            </Button>
            <Button
              onClick={this.handleEmbedButtonClick}
              theme={{
                button: cx(styles.button, styles.linkEmbedButton, {
                  [styles.activeButton]: !linkActive
                })
              }}
            >
              embed
            </Button>
          </div>
          {
            coordinates && !isEmpty(coordinates) && (
            <p className={styles.text}>
                  coordinates: [{coordinates.x}, {coordinates.y}, {coordinates.z}]
            </p>
              )
          }
          {
            orientation && orientation.length > 0 && (
            <p className={styles.text}>
              <span>orientation: [</span>
              {orientation.map((value, index) => (
                <span key={value}>
                  {(index ? ', ' : '') + value}
                </span>
                  ))}
              <span>]</span>
            </p>
              )
          }
          <div className={styles.socialMediaWrapper}>
            <div className={styles.socialMediaContainer}>
              {shareSocialMedia.map(socialMedia => (
                <Button
                  onClick={() => this.handleSocialMediaLink(socialMedia.link)}
                  theme={{
                    button: cx(styles.iconBackground, {
                      [styles.facebookIcon]: socialMedia.className === 'facebookIcon',
                      [styles.twitterIcon]: socialMedia.className === 'twitterIcon'
                    })
                  }}
                  key={socialMedia.className}
                >
                  <Icon icon={socialMedia.icon} theme={{ icon: styles.icon }} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalShareComponent.propTypes = {
  isOpen: PropTypes.bool,
  currentLocation: PropTypes.string,
  setModalShareParams: PropTypes.func.isRequired,
  linkActive: PropTypes.bool,
  coordinates: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number, z: PropTypes.number }),
  orientation: PropTypes.array,
  shareSocialMedia: PropTypes.array.isRequired,
  urlToCopy: PropTypes.string.isRequired
};

ModalShareComponent.defaultProps = {
  isOpen: false,
  currentLocation: '',
  linkActive: true,
  coordinates: {},
  orientation: []
};

export default ModalShareComponent;