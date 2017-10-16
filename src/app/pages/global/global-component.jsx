import React, { Component } from 'react'

import Earthometer from 'components/earthometer'
import NavFooter from 'components/nav-footer'
import LineChart from './linechart'
import Shapes from './shapes'
import Spider from './spider'

class Global extends Component {
  render () {
    const { toggleLayer, renderToggle, className } = this.props
    const t = renderToggle(toggleLayer)
    return (
      <div className={className}>
        <Earthometer />
        <p>
          The current extinction rate is estimated to be 1,000 times higher than
          at any time in Earth’s human history. If this trend continues, we
          could wipe out most species by the end of the century and destroy our
          living heritage. Protecting half the earth would preserve the habitats
          needed by these species and stabilise the Earth’s billion-year-old
          environmental support system.
        </p>
        <LineChart />
        <p>
          Scientists and enthusiastic nature-lovers have collected an enormous
          amount of data about life on Earth through recorded observations and
          the use of remote sensing technologies. Thanks to them we now have
          data for a number of vertebrate species known to science, including{' '}
          {t('amphibians')}, {t('birds')} and {t('mammals')}; as well as
          comprehensive records for plant groups, including {t('conifers')} and{' '}
          {t('cacti')}
          species. There are countless more species that haven’t been discovered
          or formally identified, but they are an integral part of the network
          of life and are vulnerable to the same threats as the species we have
          records for.
        </p>
        {/* spider, data in store: graphs.spider1[meeting/global] */}
        <Spider />
        <p>
          Globally, {t('Protected Areas')} have a key role in the conservation
          of nature. Within their boundaries, protected areas harbour 14.7% of
          terrestrial and inland water areas, 4.12% of the global ocean, and
          10.2% of coastal and marine areas. {t('Key Biodiversity Areas')}
          are sites that are globally recognised for their significant
          contribution to the global persistence of biodiversity. Each one meets
          strict criteria and their selection is informed by data.
        </p>
        <Shapes />
        <NavFooter to="/" />
      </div>
    )
  }
}

export default Global
