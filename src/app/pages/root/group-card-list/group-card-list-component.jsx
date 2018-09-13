import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { groupBy } from 'lodash';
import { Loading, Icon, Button } from 'he-components';
import chevronIcon from 'assets/icons/chevron.svg';
import CategoriesList from '../categories-list';

import styles from './group-card-list-styles';

class GroupCardListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { openGroups: [] };
  }

  isGroupOpen(group) {
    return this.state.openGroups.find(g => g === group);
  }

  toogleGroupActive(group) {
    if (this.isGroupOpen(group))
      return this.setState(prevstate => ({ openGroups: prevstate.openGroups.filter(g => g !== group) }));
    return this.setState(prevstate => ({ openGroups: [ ...prevstate.openGroups, group ] }));
  }

  render() {
    const { loading, categories } = this.props;
    if (loading) return <Loading height={300} />;
    const hasCategories = categories && !!categories.length;
    const groups = hasCategories && Object.values(groupBy(categories, 'groupSlug'));
    return (
      <div className={styles.groupCardListontainer}>
        {
          groups && groups.map(group => (
            <div
              key={group[0].groupName}
              className={cx(styles.cardContainer, {
                  [styles.customCard]: group[0].groupSlug === 'half-earth-view',
                  [styles.open]: this.isGroupOpen(group[0].groupSlug)
                })}
            >
              <div className={styles.headerContainer}>
                <h2 className={styles.groupTitle}>{group[0].groupName}</h2>
                <Button
                  onClick={() => this.toogleGroupActive(group[0].groupSlug)}
                  theme={{ button: styles.toggleButton }}
                >
                  <Icon
                    icon={chevronIcon}
                    theme={{ icon: this.isGroupOpen(group[0].groupSlug) ? styles.icon : styles.iconCollapse }}
                  />
                </Button>
              </div>
              <CategoriesList categories={group} />
            </div>
            ))
        }
      </div>
    );
  }
}

GroupCardListComponent.propTypes = { loading: PropTypes.bool, categories: PropTypes.array };

GroupCardListComponent.defaultProps = { loading: false, categories: [] };

export default GroupCardListComponent;
