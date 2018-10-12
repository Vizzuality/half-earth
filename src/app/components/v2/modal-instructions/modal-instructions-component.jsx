import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Modal } from 'he-components';

import chevronIcon from 'assets/icons/icon-chevron.svg';
// instructions svg's
import leftClick from 'assets/gestures/desktop_01.svg';
import rightClick from 'assets/gestures/desktop_02.svg';
import middleClick from 'assets/gestures/desktop_03.svg';
import drag from 'assets/gestures/mobile_01.svg';
import pinch from 'assets/gestures/mobile_02.svg';
import twoFingerDrag from 'assets/gestures/mobile_03.svg';
import rotate from 'assets/gestures/mobile_04.svg';

import styles from './modal-instructions-styles';

const mouseInstructions = [
  { icon: leftClick, title: 'Pan view', text: 'Left click + drag' },
  { icon: rightClick, title: 'Zoom view', text: 'Right click + drag, or Mouse wheel croll' },
  {
    icon: middleClick,
    title: 'Rotate view',
    text: 'Middle click + drag, or CTRL + Left/Right click + drag'
  }
];

const touchInstructions = [
  { icon: drag, title: 'Pan view', text: 'One finger drag' },
  { icon: pinch, title: 'Zoom view', text: 'Two finger pinch' },
  { icon: twoFingerDrag, title: 'tilt view', text: 'Two finger drag, same direction' },
  { icon: rotate, title: 'Rotate view', text: 'Two finger drag, opposite direction' }
];

function instructionCombo(action) {
  const { icon, title, explanation } = action;
  return (
    <div className={styles.isntructionCombo} key={title}>
      <Icon icon={icon} theme={{ icon: styles.gestures }} />
      <p className={styles.mapAction}>{title}</p>
      <p className={styles.actionExplanation}>{explanation}</p>
    </div>
  );
}

function renderInstructions(instructionsArray) {
  return (
    <div className={styles.instructionsContainer}>
      {instructionsArray.map(instructionCombo)}
    </div>
  );
}

class ModalInfoContentComponent extends Component {
  handleNavigateButton = () => {
    const { setModalTutorialParams, setModalInstructionsParams } = this.props;
    setModalTutorialParams({ isOpen: true });
    setModalInstructionsParams({ isOpen: false });
  };

  render() {
    const { isTouchScreen, isOpen, setModalInstructionsParams } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setModalInstructionsParams({ isOpen: false })}
        theme={styles}
      >
        <div className={styles.contentContainer}>
          <p className={styles.subTitle}>{`Instructions - ${isTouchScreen ? 'touch' : 'mouse'}`}</p>
          <h1 className={styles.title}>How to navigate:</h1>
          {renderInstructions(isTouchScreen ? touchInstructions : mouseInstructions)}
          <div className={styles.actionsRow}>
            <Button
              theme={{ button: styles.button }}
              onClick={() => setModalInstructionsParams({ isOpen: false })}
            >
              ok
            </Button>
            <Button theme={{ button: styles.mapTour }} onClick={this.handleNavigateButton}>
              <span className={styles.tourText}>Go back to instructions of the map</span>
              <Icon icon={chevronIcon} theme={{ icon: styles.chevronIcon }} />
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

ModalInfoContentComponent.propTypes = {
  isTouchScreen: PropTypes.bool,
  isOpen: PropTypes.bool,
  setModalInstructionsParams: PropTypes.func.isRequired,
  setModalTutorialParams: PropTypes.func.isRequired
};

ModalInfoContentComponent.defaultProps = { isTouchScreen: false, isOpen: false };

export default ModalInfoContentComponent;
