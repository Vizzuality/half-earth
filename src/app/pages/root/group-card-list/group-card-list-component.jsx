import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { groupBy } from 'lodash';
import { Loading, Icon } from 'he-components';
import chevronIcon from 'assets/icons/chevron.svg';
import CategoriesList from '../categories-list';

import styles from './group-card-list-styles';

const GroupCardListComponent = props => {
  const { loading, categories } = props;
  if (loading) return <Loading height={300} />;
  const hasCategories = categories && !!categories.length;
  const groups = hasCategories && Object.values(groupBy(categories, 'groupSlug'));
  return (
    <div>
      {
        groups && groups.map(group => (
          <div
            key={group[0].groupName}
            className={cx(styles.cardContainer, { [styles.customCard]: group[0].groupSlug === 'half-earth-view' })}
          >
            <div className={styles.headerContainer}>
              <h2 className={styles.groupTitle}>{group[0].groupName}</h2>
              <Icon icon={chevronIcon} theme={{ icon: styles.icon }} />
            </div>
            <CategoriesList categories={group} />
          </div>
          ))
      }
    </div>
  );
};

GroupCardListComponent.propTypes = { loading: PropTypes.bool, categories: PropTypes.array };

GroupCardListComponent.defaultProps = { loading: false, categories: [] };

export default GroupCardListComponent;
