import React from 'react'
import Expand from './components/expand'
import Toggle from './components/toggle'
import Opacity from './components/opacity'

const Explore = ({
  landCoverFold,
  someValue,
  opacity,
  toggleFold,
  toggleValue,
  updateOpacity,
  ...props
}) => (
  <div>
    Explore
    <div>
      <Expand
        {...{
          isOpen: landCoverFold.isOpen,
          expand: () => toggleFold('landCoverFold'),
          label: 'Land Cover'
        }}
      >
        <Toggle
          label="Human Pressures"
          isOn={someValue}
          toggle={() => toggleValue('someValue')}
        />
        <Opacity
          label="opacity"
          value={opacity.value}
          options={opacity.options}
          update={value => updateOpacity({ path: ['opacity', 'value'], value })}
        />
      </Expand>
    </div>
  </div>
)

export default Explore
