import React, { Component } from 'react'
import SpiderChart from 'components/spider-chart'
import cx from 'classnames'
import Scroller, { Element as P } from 'components/scroller'
import Earthometer from 'components/earthometer'
import NavFooter from 'components/nav-footer'
import uiStyles from 'app/styles/ui'
import LineChart from './linechart'
import Shapes from './shapes'

class Global extends Component {
  render () {
    const {
      toggleGlobalLayer,
      renderToggle,
      className,
      global,
      setSection,
      setGlobalSection
    } = this.props
    const updateSections = s => {
      setGlobalSection(s)
      setSection(s)
    }
    const t = renderToggle(toggleGlobalLayer)
    return (
      <div className={className}>
        <Scroller>
          <Earthometer displayOnly />
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:1')}
          >
            The current extinction rate is estimated to be 1,000 times higher
            than at any time in Earth’s human history. If this trend continues,
            we could wipe out most species by the end of the century and destroy
            our living heritage. Protecting half the earth would preserve the
            habitats needed by these species and stabilise the Earth’s
            billion-year-old environmental support system.
            <LineChart />
          </P>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:2')}
          >
            Scientists and enthusiastic nature-lovers have collected an enormous
            amount of data about life on Earth through recorded observations and
            the use of remote sensing technologies. Thanks to them we now have
            data for a number of vertebrate species known to science, including{' '}
            {t('amphibians')}, {t('birds')} and {t('mammals')}; as well as
            comprehensive records for plant groups, including {t('conifers')}{' '}
            and {t('cacti')} species. There are countless more species that
            haven’t been discovered or formally identified, but they are an
            integral part of the network of life and are vulnerable to the same
            threats as the species we have records for.
            <SpiderChart data={global.graphs} />
          </P>
          <P
            className={cx(uiStyles.slides, uiStyles.paragraphAfterChart)}
            onScrollFocus={() => updateSections('global:3')}
          >
            Globally, {t('Protected Areas')} have a key role in the conservation
            of nature. Within their boundaries, protected areas harbour 14.7% of
            terrestrial and inland water areas, 4.12% of the global ocean, and
            10.2% of coastal and marine areas. {t('Key Biodiversity Areas')}
            are sites that are globally recognised for their significant
            contribution to the global persistence of biodiversity. Each one
            meets strict criteria and their selection is informed by data.
            <Shapes />
          </P>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:4')}
          >
            <Earthometer />
            The rapid growth in available data on terrestrial species and
            ecosystems has made it possible to identify where to expand the
            protected areas network globally.
            <SpiderChart data={global.graphs} />
          </P>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:5')}
          >
            Half-Earth aims to continue building upon the data we already have,
            prioritizing and supporting research to understand the identity and
            biology of our planet’s species and utilizing advances in data
            collection and analyses to map the information needed to get to
            Half-Earth and best care for our planet. The Half-Earth Project maps
            will also monitor our progress in getting to Half, inspiring people
            everywhere to participate in actions that will help us achieve the
            Half-Earth goal.
          </P>
          <NavFooter to="/" />
        </Scroller>
      </div>
    )
  }
}

export default Global
