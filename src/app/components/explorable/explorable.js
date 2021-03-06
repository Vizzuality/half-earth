import React from 'react';

import find from 'lodash/find';
import lowerCase from 'lodash/lowerCase';
import kebabCase from 'lodash/kebabCase';
import shortid from 'shortid';

import Dropdown from 'components/dropdown';
import dropdownTheme from 'styles/themes/dropdown.scss';

import XToggle from './toggle';
import toggleTheme from 'styles/themes/toggle.scss';

export const renderToggle = layers => toggle => (
  label,
  disabled,
  n,
  enabled = true
) => {
  const name = n || kebabCase(lowerCase(label));
  return (
    <XToggle
      theme={toggleTheme}
      key={`name-${shortid.generate()}`}
      active={find(layers, { name }) && find(layers, { name }).visible}
      disabled={disabled}
      onClick={() => (enabled ? toggle({ name }) : null)}
      className={toggleTheme.toggle}
    >
      {label}
    </XToggle>
  );
};

export const renderDropdown = sections => selectOption => (section, name) => {
  if (!sections[section]) return <span>{name}</span>;
  const { selections: sel } = sections[section];
  const { options, selected } = sections[section].selectors[name];
  return (
    <Dropdown
      options={options}
      className={dropdownTheme.dropdown}
      theme={dropdownTheme}
      onSelect={layerName =>
        selectOption({
          selection: layerName,
          layers: sel[layerName],
          section,
          selector: name
        })
      }
      selected={selected}
    />
  );
};
