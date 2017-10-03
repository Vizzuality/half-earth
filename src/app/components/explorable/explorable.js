import React, { createElement } from 'react'

import first from 'lodash/first'
import find from 'lodash/find'
import isArray from 'lodash/isArray'
import startCase from 'lodash/startCase'
import filter from 'lodash/filter'
import difference from 'lodash/difference'
import lowerCase from 'lodash/lowerCase'
import kebabCase from 'lodash/kebabCase'

import Dropdown from 'components/dropdown'
import dropdownTheme from 'styles/themes/dropdown.scss'

import XToggle from 'components/explorable/toggle'
import toggleTheme from 'styles/themes/toggle.scss'

const ns = s => first(s.split(':'))

export const renderToggle = (layers, namespace = '') => toggle => (
  label,
  n,
  disabled = false
) => {
  const name = n || kebabCase(lowerCase(ns(label)))
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

export const renderDropdown = (layers, namespace = '') => selectOption => (
  group,
  defaultLayer = 'birds'
) => {
  const groups = isArray(group) ? group : group.split()
  const found = filter(layers, l => {
    return l.groups.length
      ? difference(l.groups, groups).length === 0 &&
        l.groups.length === groups.length
      : false
  })

  const foundSelected = find(found, 'visible')
  const options = found.sort((a, b) => b.name - a.name).reduce((ll, l) => {
    ll[l.name] = startCase(ns(l.name))
    return ll
  }, {})

  return createElement(Dropdown, {
    className: dropdownTheme.dropdown,
    theme: dropdownTheme,
    onSelect: name => selectOption({ name }),
    options,
    selected:
      (foundSelected && foundSelected.name) || `${defaultLayer}${namespace}`
  })
}
