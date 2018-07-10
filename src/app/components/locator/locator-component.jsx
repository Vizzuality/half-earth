import React from 'react';
import cx from 'classnames';
import styles from './locator-styles';
import Dropdown from 'components/dropdown';
import dropdownTheme from './locator-dropdown-theme.scss';

const Locator = ({ className, route, onSelect, options }) => {
  return (
    <div className={cx(className, styles.container)}>
      <Dropdown
        options={options}
        className={dropdownTheme.dropdown}
        theme={dropdownTheme}
        onSelect={onSelect}
        selected={route}
        sort={false}
      />
    </div>
  );
};

export default Locator;
