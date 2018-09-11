import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { SwitchInput, Button, Icon } from 'he-components';

import infoIcon from 'assets/icons/icon-info.svg';
import styles from './categories-list-styles';

class CategoriesListComponent extends Component {
  render() {
    const { categories, handleMetadataClick, handleSwitchChange, handleMultiLayerClick, handleLayerClick } = this.props;

    const hasCategories = categories && !!categories.length;

    return (
      <div className={styles.container}>
        {
          hasCategories && categories.map(category => (
            <div
              className={cx(styles.category, { [styles.featuredCategory]: category.featured })}
              key={category.slug}
            >
              {
                  category.featured &&
                    <div style={{ backgroundImage: `url(${category.imageUrl})` }} className={styles.featuredImage} />
                }
              <div className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category.name}</h2>
              </div>
              <div className={styles.categorySection}>
                <p className={styles.categoryDescription}>{category.description}</p>
                {
                    category.metadata && (
                    <Button
                      circle
                      theme={{ button: styles.metadataBtn }}
                      onClick={() => handleMetadataClick(category)}
                    >
                      <Icon icon={infoIcon} />
                    </Button>
                      )
                  }
              </div>
              {category.datasets.map(dataset => {
                  const { layers, active, slug, name } = dataset;
                  const layersLength = layers && layers.length;
                  if (!layersLength) return null;
                  return (
                    <div key={slug} className={cx(styles.dataset, { [styles.datasetMultiLayer]: dataset.multilayer })}>
                      <SwitchInput
                        key={slug}
                        id={slug}
                        checked={active}
                        onChange={value => handleSwitchChange(category, dataset, value)}
                        label={name}
                      />
                      {
                        active && layersLength > 1 && (
                        <div className={cx({ [styles.multiLayerWrapper]: dataset.multilayer })}>
                          {layers.map(layer => {
                                const buttonsMulti = (
                                  <SwitchInput
                                    key={layer.slug}
                                    id={layer.slug}
                                    theme={{ switch: styles.subLayerSwitch }}
                                    label={layer.name}
                                    checked={layer.active}
                                    onChange={() => handleMultiLayerClick(layer)}
                                  />
                                );

                                const buttonTheme = { button: layer.active ? styles.buttonActive : styles.button };
                                const buttonsUnique = (
                                  <Button
                                    key={layer.slug}
                                    theme={buttonTheme}
                                    onClick={() => handleLayerClick(dataset, layer)}
                                  >
                                    {layer.name}
                                  </Button>
                                );
                                return dataset.multilayer ? buttonsMulti : buttonsUnique;
                              })}
                        </div>
                          )
                      }
                    </div>
                  );
                })}
            </div>
            ))
        }
      </div>
    );
  }
}

CategoriesListComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  handleMetadataClick: PropTypes.func.isRequired,
  handleSwitchChange: PropTypes.func.isRequired,
  handleMultiLayerClick: PropTypes.func.isRequired,
  handleLayerClick: PropTypes.func.isRequired
};

export default CategoriesListComponent;
