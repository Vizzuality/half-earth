import React from 'react';
import { SwitchInput, Sidebar } from 'he-components';

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

  handleSwitchChange = ({ slug, value }) => {
    const { updateQueryParam, query } = this.props;
    updateQueryParam({
      query: { ...query, activeLayers: value ? slug : '' }
    });
  };

  render() {
    const { datasets } = this.props;
    const hasDatasets = datasets && !!datasets.length;
    return (
      <div className={styles.container}>
        <Sidebar
          visible={this.state.sidebarOpen}
          onToggle={this.handleOnToggle}
        >
          {hasDatasets &&
            datasets.map(dataset => {
              const { layers } = dataset;
              const hasLayers = layers && !!layers.length;
              return (
                <div key={dataset.slug} className={styles.dataset}>
                  <p>{dataset.name}</p>
                  <span>{dataset.description}</span>
                  {hasLayers &&
                    layers.map(layer => (
                      <SwitchInput
                        key={layer.slug}
                        id={layer.slug}
                        checked={layer.active}
                        onChange={value =>
                          this.handleSwitchChange({ slug: layer.slug, value })
                        }
                        label={layer.name}
                      />
                    ))}
                </div>
              );
            })}
        </Sidebar>
        <h1>Hola v2</h1>;
      </div>
    );
  }
}

RootPageComponent.defaultProps = {
  datasets: []
};

export default RootPageComponent;
