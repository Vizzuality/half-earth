import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'he-components';
import cx from 'classnames';
import ModalMetadata from 'components/v2/modal-metadata';
import ModalTutorial from 'components/v2/modal-tutorial';
import ModalInstructions from 'components/v2/modal-instructions';
import ModalShare from 'components/v2/modal-share';
import Logos from 'components/logos';

import GroupCardList from './group-card-list';
import DetailView from './detail-view';
import Map from './map';
import Toolbar from './toolbar';
import Legend from './legend';

import styles from './root-styles';

class RootPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: props.showSidebar };
  }

  componentDidMount() {
    const { setIsTouchScreenState } = this.props;
    // detect touch screens!
    window.addEventListener(
      'touchstart',
      function onFirstTouch() {
        setIsTouchScreenState();
        window.removeEventListener('touchstart', onFirstTouch, false);
      },
      false
    );
  }

  handleOnToggle = sidebarOpen => {
    this.setState({ sidebarOpen });
  };

  render() {
    const { sidebarOpen } = this.state;
    const { showSidebar, showDetailView } = this.props;
    return (
      <div className={styles.container}>
        {
          showSidebar && (
          <Sidebar theme={styles} visible={sidebarOpen} onToggle={this.handleOnToggle}>
            <div className={styles.sidebarContainer}>
              {showDetailView ? <DetailView /> : <GroupCardList />}
            </div>
          </Sidebar>
            )
        }
        <Map
          className={cx(styles.mapContainer, { [styles.mapPaddingLeft]: sidebarOpen })}
          zoomControls
        />
        <Toolbar className={styles.toolbar} />
        <Legend />
        <Logos key="Logos" theme={{ partnerFooter: styles.partnerFooter }} />
        <ModalMetadata />
        <ModalTutorial />
        <ModalInstructions />
        <ModalShare />
      </div>
    );
  }
}

RootPageComponent.propTypes = {
  showSidebar: PropTypes.bool,
  showDetailView: PropTypes.bool,
  setIsTouchScreenState: PropTypes.func.isRequired
};
RootPageComponent.defaultProps = { showSidebar: true, showDetailView: false };

export default RootPageComponent;
