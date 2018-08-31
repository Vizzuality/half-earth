import React from 'react';
import { SwitchInput, Button, Icon, Loading } from 'he-components';

import infoIcon from 'assets/icons/info.svg';
import styles from './categories-list-styles';

class CategoriesListComponent extends React.Component {
  handleLayerClick = ({ slug, active }) => {
    const { updateQueryParam, query } = this.props;
    updateQueryParam({
      query: { ...query, activeLayers: slug }
    });
  };

  handleSwitchChange = ({ layers, active }) => {
    const { updateQueryParam, query } = this.props;
    const activeLayers = active ? '' : layers[0].slug;
    updateQueryParam({
      query: { ...query, activeLayers }
    });
  };

  handleMetadataClick = ({ slug }) => {
    const { setModalMetadataParams } = this.props;
    setModalMetadataParams({ slug, title: 'Category metadata', isOpen: true });
  };

  render() {
    const { categories, loading } = this.props;

    if (loading) return <Loading height={300} />;
    const hasCategories = categories && !!categories.length;

    return (
      <div className={styles.container}>
        {hasCategories &&
          categories.map(category => (
            <div className={styles.category}>
              <div className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category.name}</h2>
              </div>
              <div className={styles.categorySection}>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
                {category.metadata && (
                  <Button
                    circle
                    theme={{ button: styles.metadataBtn }}
                    onClick={() => this.handleMetadataClick(category)}
                  >
                    <Icon icon={infoIcon} />
                  </Button>
                )}
              </div>
              {category.datasets.map(dataset => {
                const { layers, active } = dataset;
                const layersLength = layers && layers.length;
                if (!layersLength) return;
                return (
                  <div key={dataset.slug} className={styles.dataset}>
                    <SwitchInput
                      key={dataset.slug}
                      id={dataset.slug}
                      checked={dataset.active}
                      onChange={value => this.handleSwitchChange(dataset)}
                      label={dataset.name}
                    />
                    {active &&
                      layersLength > 1 && (
                      <div>
                        {layers.map(layer => {
                          const buttonTheme = {
                            button: layer.active
                              ? styles.buttonActive
                              : styles.button
                          };
                          return (
                            <Button
                              theme={buttonTheme}
                              onClick={() => this.handleLayerClick(layer)}
                            >
                              {layer.name}
                            </Button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
      </div>
    );
  }
}

CategoriesListComponent.defaultProps = {
  categories: []
};

export default CategoriesListComponent;
