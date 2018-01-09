import React from 'react'

import Toggle from '../toggle'
import Opacity from '../opacity'
import Info from '../info'
import styles from './row-styles.scss'

const Row = ({ someValue, toggleValue, opacity, updateOpacity }) => (
  <div className={styles.row}>
    <Toggle
      label="Human Pressures"
      key="Human Pressures"
      isOn={someValue}
      toggle={() => toggleValue('someValue')}
    />
    <Opacity
      enabled={someValue}
      label="opacity"
      key="opacity"
      value={opacity.value}
      options={opacity.options}
      update={updateOpacity}
    />
    <Info />
  </div>
)

export default Row
