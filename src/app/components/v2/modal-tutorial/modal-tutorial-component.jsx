import React, { Component } from 'react';
import PropTypes from 'prop-types';
import chevronIcon from 'assets/icons/icon-chevron.svg';
import { Modal, Button, Icon } from 'he-components';

import styles from './modal-tutorial-styles';

class ModalTutorialComponent extends Component {
  handleModalClose = () => {
    const { setModalTutorialParams, setCookies } = this.props;
    setModalTutorialParams({ isOpen: false });
    setCookies();
  };

  handleNavigateButton = () => {
    const { setModalTutorialParams, setModalInstructionsParams, setCookies } = this.props;
    setModalTutorialParams({ isOpen: false });
    setModalInstructionsParams({ isOpen: true });
    setCookies();
  };

  render() {
    const { isOpen, isTouchScreen } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={this.handleModalClose} theme={styles}>
        <div className={styles.contentContainer}>
          <p className={styles.subTitle}>Instructions - map</p>
          <h1 className={styles.title}>Global to landscape view:</h1>
          <p className={styles.text}>
            View data on the map in globe mode, or in landscape mode. Globe mode enables you to view datasets at a global scale, while the landscape mode shows fine detail at local scale.
          </p>
          <div className={styles.row}>
            <div className={styles.column}>
              <div className={styles.columnText}>
                1. To get to landscape mode double-click a point on the globe to zoom and selectable cells will appear, or zoom manually until cells appear.
              </div>
              <img className={styles.image} src="/img/globe.png" alt="Globe" />
            </div>
            <div className={styles.column}>
              <div className={styles.columnText}>
                2. Clicking one of the cells takes you into landscape mode.
              </div>
              <img className={styles.image} src="/img/landscape.png" alt="Globe" />
            </div>
          </div>
          <Button theme={{ button: styles.navigationTour }} onClick={this.handleNavigateButton}>
            <span className={styles.tourText}>
              How to navigate - {isTouchScreen ? 'touch' : 'mouse'}
            </span>
            <Icon icon={chevronIcon} theme={{ icon: styles.chevronIcon }} />
          </Button>
        </div>
      </Modal>
    );
  }
}

ModalTutorialComponent.propTypes = {
  isOpen: PropTypes.bool,
  isTouchScreen: PropTypes.bool,
  setModalTutorialParams: PropTypes.func.isRequired,
  setModalInstructionsParams: PropTypes.func.isRequired,
  setCookies: PropTypes.func.isRequired
};

ModalTutorialComponent.defaultProps = { isOpen: false, isTouchScreen: false };

export default ModalTutorialComponent;
