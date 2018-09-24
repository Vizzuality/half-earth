import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'he-components';
import DatasetCombo from 'components/v2/dataset-combo';

import infoIcon from 'assets/icons/icon-info.svg';
import styles from './categories-list-styles';

class CategoriesListComponent extends Component {
  renderInfoButton(category) {
    const { handleMetadataClick } = this.props;
    return (
      <Button circle theme={{ button: styles.metadataBtn }} onClick={() => handleMetadataClick(category)}>
        <Icon icon={infoIcon} />
      </Button>
    );
  }

  renderRegularCategory(category, query) {
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
              dataset={dataset}
              category={category}
              query={query}
              key={dataset.slug}
              className={styles.datasetComboWrapper}
            />
          ))}
        </div>
      </div>
    );
  }

  renderFeaturedCategory(category, query) {
    return (
      <div className={styles.featuredCategory} key={category.slug}>
        <div style={{ backgroundImage: `url(${category.imageUrl})` }} className={styles.featuredImage} />
        <div className={styles.featuredCategoryContentContainer}>
          <div className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            {category.metadata && this.renderInfoButton(category)}
          </div>
          <p className={styles.categoryDescription}>{category.description}</p>
          {category.datasets.map(dataset => (
            <DatasetCombo
              dataset={dataset}
              category={category}
              query={query}
              key={dataset.slug}
              className={styles.datasetComboWrapper}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { categories, query } = this.props;

    const hasCategories = categories && !!categories.length;
    const regularCategories = hasCategories && categories.filter(category => !category.featured);
    const featuredCategories = hasCategories && categories.filter(category => category.featured);

    return (
      <div className={styles.container}>
        {regularCategories.length > 0 && regularCategories.map(category => this.renderRegularCategory(category, query))}
        {
          featuredCategories.length > 0 && (
          <div>
            <p className={styles.featuredTitle}>Featured Maps</p>
            <p className={styles.featuredDescription}>Curated, fine scale species maps.</p>
            {featuredCategories.map(category => this.renderFeaturedCategory(category, query))}
          </div>
            )
        }
      </div>
    );
  }
}

CategoriesListComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  query: PropTypes.object,
  handleMetadataClick: PropTypes.func.isRequired
};

CategoriesListComponent.defaultProps = { query: {} };

export default CategoriesListComponent;
