import React from 'react'

import Toggle from './components/toggle'
import Opacity from './components/opacity'
import Info from './components/info'
import Expand from './components/expand'
import Row from './components/row'
import rowStyles from './components/row/row-styles'

const openInfo = console.log.bind(console)

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
        <Row>
          <Toggle
            label="Human Pressures"
            isOn={someValue}
            toggle={() => toggleValue('someValue')}
          />
          <div className={rowStyles.buttons}>
            <Opacity
              disabled={!someValue}
              label="opacity"
              value={opacity.value}
              options={opacity.options}
              update={value =>
                updateOpacity({ path: ['opacity', 'value'], value })}
            />
            <Info onClick={() => openInfo('Human Pressures')} />
          </div>
        </Row>
      </Expand>
    </div>
  </div>
)

export default Explore
