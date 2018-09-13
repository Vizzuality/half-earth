import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './checkbox-styles.scss';

const Checkbox = props => {
  const { id, label, checked, onChange, theme, checkboxFirst, disabled } = props;
  return (
    <label
      className={cx(
        styles.container,
        { [styles.checkboxFirst]: checkboxFirst, [theme.checkboxFirst]: checkboxFirst },
        theme.container
      )}
      htmlFor={id}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
        className={cx(styles.input, theme.input)}
        disabled={disabled}
      />
      <span className={cx(styles.label, theme.label)}>
        {label}
      </span>
      <div className={cx(styles.checkbox, theme.checkbox)} />
    </label>
  );
};

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  checkboxFirst: PropTypes.bool,
  theme: PropTypes.shape({
    wrapper: PropTypes.string,
    switch: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string,
    checkboxFirst: PropTypes.string,
    checkbox: PropTypes.string
  })
};

Checkbox.defaultProps = {
  id: Math.random().toString(36).substring(2, 15),
  theme: {},
  label: '',
  checked: false,
  disabled: false,
  checkboxFirst: true
};

export default Checkbox;
