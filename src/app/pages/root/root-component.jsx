import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar } from 'he-components';
import cx from 'classnames';
import ModalMetadata from 'components/v2/modal-metadata';

import CategoriesList from './categories-list';
import Map from './map';
import Toolbar from './toolbar';
import Legend from './legend';

import styles from './root-styles';

class RootPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: props.showSidebar };
  }

  handleOnToggle = sidebarOpen => {
    this.setState({ sidebarOpen });
  };

  render() {
    const { sidebarOpen } = this.state;
    const { showSidebar } = this.props;
    return (
      <div className={styles.container}>
        {
          showSidebar && (
              <Sidebar theme={styles} visible={sidebarOpen} onToggle={this.handleOnToggle}>
                <div className={styles.sidebarContainer}>
                  <CategoriesList />
                </div>
              </Sidebar>
            )
        }
        <Map className={cx(styles.mapContainer, { [styles.mapPaddingLeft]: sidebarOpen })} />
        <Toolbar className={styles.toolbar} />
        <Legend />
        <ModalMetadata />
      </div>
    );
  }
}

RootPageComponent.propTypes = { showSidebar: PropTypes.bool, datasets: PropTypes.array };
RootPageComponent.defaultProps = { showSidebar: true, datasets: [] };

export default RootPageComponent;
