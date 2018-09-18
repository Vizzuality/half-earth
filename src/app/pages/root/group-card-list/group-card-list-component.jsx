import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Loading } from 'he-components';
import AccordionCard from 'components/v2/accordion-card';
import chevronIcon from 'assets/icons/icon-chevron.svg';
import CategoriesList from '../categories-list';

import styles from './group-card-list-styles';

class GroupCardListComponent extends Component {
  render() {
    const { loading, categoriesGroups, openGroups } = this.props;
    if (loading) return <Loading height={300} />;
    return (
      <div className={styles.groupCardListContainer}>
        {
          categoriesGroups && categoriesGroups.map(
              group =>
                group[0].groupSlug !== 'half-earth-view'
                  ? (
                    <AccordionCard
                      key={group[0].groupName}
                      isOpen={openGroups.includes(group[0].groupSlug)}
                      title={group[0].groupName}
                      icon={chevronIcon}
                    >
                      <CategoriesList categories={group} />
                    </AccordionCard>
)
                  : (
                    <div key={group[0].groupName} className={styles.cardContainer}>
                      <div className={styles.headerContainer}>
                        <h2 className={styles.groupTitle}>{group[0].groupName}</h2>
                      </div>
                      <CategoriesList categories={group} />
                    </div>
)
            )
        }
      </div>
    );
  }
}

GroupCardListComponent.propTypes = {
  loading: PropTypes.bool,
  categoriesGroups: PropTypes.array,
  openGroups: PropTypes.array
};

GroupCardListComponent.defaultProps = { loading: false, categoriesGroups: [], openGroups: [] };

export default GroupCardListComponent;
