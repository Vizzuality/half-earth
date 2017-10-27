import React, { Component } from 'react'
import SpiderChart from 'components/spider-chart'
import cx from 'classnames'
import { Link } from 'react-router-dom'
import Scroller, { Element as P } from 'components/scroller'
import Earthometer from 'components/earthometer'
import NavFooter from 'components/nav-footer'
import Barchart from './barchart'

import styles from './global-styles.scss'
import uiStyles from 'app/styles/ui'
import Shapes from './shapes'

class Global extends Component {
  render () {
    const {
      toggleGlobalLayer,
      renderToggle,
      renderDropdown,
      className,
      protectedAnimalsSpider,
      setSection,
      setGlobalSection,
      selectGlobalSelector,
      whereToProtectSpider,
      section
    } = this.props

    const updateSections = s => {
      setGlobalSection(s)
      setSection(s)
    }
    const { data, dimensions } = whereToProtectSpider
    const dimension = dimensions[0]

    const t = renderToggle(toggleGlobalLayer)
    const d = renderDropdown(selectGlobalSelector)
    return (
      <div className={className}>
        <Scroller>
          <Earthometer
            displayOnly={section !== 'global:4' && section !== 'global:5'}
          />
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:1')}
          >
            The current extinction rate is many times higher than at any time in
            Earth’s human history. Without dedicated action that is informed by
            rigorous evidence, we could incur irreversible loss of species and
            destroy our living heritage. Smartly managing half the earth for
            these species will preserve biodiversity and stabilize the Earth’s
            billion-year-old environmental support system.
          </P>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:2')}
          >
            Globally, we are able to map species diversity, at least in broad
            brushes, for an increasing number of {d('global:2', 'birds')}. This
            allows us to pinpoint important candidate regions for conservation.
            There are countless more species that haven’t been discovered or
            formally identified, but they are an integral part of the network of
            life and are vulnerable to the same threats as the species we have
            records for.
            <div className={uiStyles.chartContainer}>
              <SpiderChart {...protectedAnimalsSpider} />
              <div className={uiStyles.spiderLegendContainer}>
                <span className={cx(uiStyles.legend, uiStyles.legendBlue)}>
                  Percent of species adequately protected
                </span>
              </div>
            </div>
          </P>
          <P
            className={cx(uiStyles.slides, uiStyles.paragraphAfterChart)}
            onScrollFocus={() => updateSections('global:3')}
          >
            {t('Protected Areas')} help to maintain the natural balance in the
            world, and ensure the flow of the many services that ecosystems
            provide to people, including water, food and raw materials. They
            play a key role in the conservation of nature and have helped to
            reduce the current rate of species extinctions. Thanks to global
            conservation efforts , protected areas have been established in
            about 15% of the terrestrial landmass. While reserve coverage has
            been gradually increasing, this trend still falls short from the
            level required to sustain the world's diversity of life.
            <Shapes />
          </P>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:4')}
          >
            With basic species maps in hand that can populate a simplified
            global grid, we can begin to identify conservation gaps and pinpoint
            the most critical regions to close them. The current reserve system
            appears to meet minimum conservation targets for about half of the
            species for the groups analyzed. But this varies among groups, and
            especially amphibians and cacti are poorly covered. Here, we mimic
            putative conservation progress by selecting grid cells globally in a
            sequence that is optimized for meeting conservation targets, and
            assuming that up to three quarters of a cell could see
            conservation-focused management.
            <Barchart data={data} dimension={dimension} />
            <div className={uiStyles.spiderLegendContainer}>
              <span className={cx(uiStyles.legend, uiStyles.legendPurple)}>
                Percent of species meeting conservation target
              </span>
            </div>
          </P>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:5')}
          >
            This simple exercise illustrates the potential for rapid
            conservation gains through spatial conservation prioritization. It
            also highlights the importance of including more biodiversity in
            such planning and illustrates the obvious need for such planning to
            ultimately happen at a kilometer resolution or finer — as
            illustrated for{' '}
            <Link className={styles.link} to="/regional">
              Southern Africa.
            </Link>{' '}
            Half-Earth sets out to help provide the science, tools, and
            leadership to achieve this vision of a world that consciously
            safeguards its biodiversity heritage.
          </P>
          <NavFooter from="/regional" to="/" />
        </Scroller>
      </div>
    )
  }
}

export default Global
