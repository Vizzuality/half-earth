import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';
import DatasetCombo from 'components/v2/dataset-combo';

import infoIcon from 'assets/icons/icon-info.svg';
import styles from './categories-list-styles';

class CategoriesListComponent extends Component {
  renderInfoButton(category) {
    return (
      <Button circle theme={{ button: styles.metadataBtn }} onClick={() => this.handleMetadataClick(category)}>
        <Icon icon={infoIcon} />
      </Button>
    );
  }

  renderRegularCategory(category) {
    return (
      <div className={styles.category} key={category.slug}>
        <div>
          <div className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            {category.metadata && this.renderInfoButton(category)}
          </div>
          <p className={styles.categoryDescription}>{category.description}</p>
          {category.datasets.map(dataset => (
            <DatasetCombo
              {...this.props}
              {...dataset}
              category={category}
              key={dataset.slug}
              className={styles.datasetComboWrapper}
            />
          ))}
        </div>
      </div>
    );
  }

  renderFeaturedCategory(category) {
    return (
      <div className={styles.featuredCategory} key={category.slug}>
        <div style={{ backgroundImage: `url(${category.imageUrl})` }} className={styles.featuredImage} />
        <div className={styles.featuredCategoryContentContainer}>
          <div className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            {category.metadata && this.renderInfoButton(category)}
          </div>
          {category.datasets.map(dataset => (
            <DatasetCombo
              {...this.props}
              {...dataset}
              category={category}
              key={dataset.slug}
              className={styles.datasetComboWrapper}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { categories } = this.props;

    const hasCategories = categories && !!categories.length;
    const regularCategories = hasCategories && categories.filter(category => !category.featured);
    const featuredCategories = hasCategories && categories.filter(category => category.featured);

    return (
      <div className={styles.container}>
        {regularCategories.length > 0 && regularCategories.map(category => this.renderRegularCategory(category))}
        {
          featuredCategories.length > 0 && (
          <div>
            <p>Featured Maps</p>
            <p>Curated, fine scale species maps.</p>
            {featuredCategories.map(category => this.renderFeaturedCategory(category))}
          </div>
            )
        }
      </div>
    );
  }
}

CategoriesListComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  handleMetadataClick: PropTypes.func.isRequired
};

export default CategoriesListComponent;
