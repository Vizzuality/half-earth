import React from 'react';

import PaneToggle from './components/pane-toggle';
import Toggle from './components/toggle';
import Opacity from './components/opacity';
import Expand from './components/expand';
import Row from './components/row';
import rowStyles from './components/row/row-styles';

const Explore = ({
  landCoverFold,
  someValue,
  opacity,
  toggleFold,
  toggleValue,
  updateOpacity,
  screenMode,
  switchScreenMode,
  ...props
}) => (
  <div>
    <PaneToggle
      options={screenMode.options}
      selected={screenMode.selected}
      onSwitch={switchScreenMode}
    />
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
              updateOpacity({ path: ['opacity', 'value'], value })
            }
          />
        </div>
      </Row>
    </Expand>
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
              updateOpacity({ path: ['opacity', 'value'], value })
            }
          />
        </div>
      </Row>
    </Expand>
  </div>
);

export default Explore;
