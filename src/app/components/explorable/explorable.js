import React from 'react'

import first from 'lodash/first'
import find from 'lodash/find'
import lowerCase from 'lodash/lowerCase'
import kebabCase from 'lodash/kebabCase'

import Dropdown from './dropdown'
import dropdownTheme from 'styles/themes/dropdown.scss'

import XToggle from './toggle'
import toggleTheme from 'styles/themes/toggle.scss'

const ns = s => first(s.split(':'))

export const renderToggle = (layers, namespace = '') => toggle => (
  label,
  n,
  disabled = false
) => {
  const name = n || kebabCase(lowerCase(ns(label)))
  return (
    <XToggle
      theme={toggleTheme}
      key={name}
      active={find(layers, { name }) && find(layers, { name }).visible}
      onClick={() => (disabled ? null : toggle({ name }))}
      className={toggleTheme.toggle}
    >
      {label}
    </XToggle>
  )
}

export const renderDropdown = sections => selectOption => (section, name) => {
  if (!sections[section]) return <span>{name}</span>
  const { selections: sel } = sections[section]
  const { options, selected } = sections[section].selectors[name]
  console.log(name, sections[section].selectors)
  return (
    <Dropdown
      options={options}
      className={dropdownTheme.dropdown}
      theme={dropdownTheme}
      onSelect={layerName => selectOption(sel[layerName])}
      selected={selected}
    />
  )
}
