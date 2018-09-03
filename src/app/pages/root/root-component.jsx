import React from 'react';
import { Sidebar } from 'he-components';
import ModalMetadata from 'components/v2/modal-metadata';
import CategoriesList from './categories-list';
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
    return (
      <div className={styles.container}>
        <Sidebar theme={styles} visible={this.state.sidebarOpen} onToggle={this.handleOnToggle}>
          <div className={styles.sidebarContainer}>
            <CategoriesList />
          </div>
        </Sidebar>
        <h1>Hola v2</h1>
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
