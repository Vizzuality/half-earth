import React from 'react';
import { Sidebar } from 'he-components';
import cx from 'classnames';
import ModalMetadata from 'components/v2/modal-metadata';

import CategoriesList from './categories-list';
import Map from './map';
import Legend from './legend';

import styles from './root-styles';

class RootPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
  }

  handleOnToggle = sidebarOpen => {
    this.setState({ sidebarOpen });
  };

  render() {
    const { sidebarOpen } = this.state;
    return (
      <div className={styles.container}>
        <Sidebar theme={styles} visible={sidebarOpen} onToggle={this.handleOnToggle}>
          <div className={styles.sidebarContainer}>
            <CategoriesList />
          </div>
        </Sidebar>
        <Map className={cx(styles.mapContainer, { [styles.mapPaddingLeft]: sidebarOpen })} />
        <Legend />
        <ModalMetadata />
      </div>
    );
  }
}

RootPageComponent.defaultProps = {
  datasets: []
};

export default RootPageComponent;
