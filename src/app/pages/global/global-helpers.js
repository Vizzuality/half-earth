import React, { createElement } from 'react'
import find from 'lodash/find'
import startCase from 'lodash/startCase'
import filter from 'lodash/filter'
import some from 'lodash/some'
import lowerCase from 'lodash/lowerCase'
import kebabCase from 'lodash/kebabCase'

import Dropdown from 'components/dropdown'
import dropdownTheme from 'styles/themes/dropdown.scss'

import XToggle from 'components/explorable/toggle'
import toggleTheme from 'styles/themes/toggle.scss'

export const renderToggle = layers => toggle => (
  label,
  n,
  disabled = false
) => {
  const name = n || kebabCase(lowerCase(label))
  if (disabled) return <span>{label}</span>
  return (
    <XToggle
      theme={toggleTheme}
      key={name}
      active={find(layers, { name }) && find(layers, { name }).visible}
      onClick={() => toggle({ name })}
      className={toggleTheme.toggle}
    >
      {label}
    </XToggle>
  )
}

export const renderDropdown = layers => selectOption => group => {
  const found = filter(layers, l => some(l.groups, v => v === group))
  const foundSelected = find(found, 'visible')
  const options = found.sort((a, b) => b.name - a.name).reduce((ll, l) => {
    ll[l.name] = startCase(l.name)
    return ll
  }, {})

  return createElement(Dropdown, {
    className: dropdownTheme.dropdown,
    theme: dropdownTheme,
    onSelect: name => selectOption({ name }),
    options,
    selected: (foundSelected && foundSelected.name) || 'birds'
  })
}
