import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading, AccordionCard } from 'he-components';
import CategoriesList from '../categories-list';

import styles from './group-card-list-styles';

class GroupCardListComponent extends Component {
  render() {
    const { loading, categoriesGroups } = this.props;
    if (loading) return <Loading height={300} />;
    return (
      <div className={styles.groupCardListContainer}>
        {
          categoriesGroups && categoriesGroups.map(group => (
            <AccordionCard
              key={group.slug}
              isOpen={group.isOpen}
              title={group.title}
              counter={group.layersActive > 0 ? group.layersActive : null}
            >
              <CategoriesList categories={group.categories} />
            </AccordionCard>
            ))
        }
      </div>
    );
  }
}

GroupCardListComponent.propTypes = { loading: PropTypes.bool, categoriesGroups: PropTypes.array };

GroupCardListComponent.defaultProps = { loading: false, categoriesGroups: [] };

export default GroupCardListComponent;
