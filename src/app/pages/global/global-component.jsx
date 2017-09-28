import React, { Component } from 'react'

import SpiderChart from 'components/spider-chart'
import pageStyles from 'styles/pages.scss'

class Global extends Component {
  render () {
    const { toggleLayer, renderToggle } = this.props
    const t = renderToggle(toggleLayer)
    return (
      <div className={pageStyles.container}>
        <p>
          Scientists and enthusiastic nature-lovers have collected an enormous
          amount of data about life on Earth through recorded observations and
          the use of remote sensing technology. The efforts of these dedicated
          people are what makes these maps possible.
        </p>
        <p>
          Thanks to them we now have data for all of the vertebrate species
          known to science, including {t('amphibians')}, {t('reptiles')},{' '}
          {t('birds')} and {t('mammals')}; as well as the major groups of{' '}
          {t('invertebrates', false)}, including {t('Butterflies')},{' '}
          {t('Dragonflies')}, {t('Moths')} and {t('Bumblebees')}. We also have
          comprehensive records for plant species in the {t('Conifers')},{' '}
          {t('Palms')} and {t('Cacti')} families. There are countless more
          species that haven’t been discovered or formally identified, but they
          are an integral part of the network of life and are vulnerable to the
          same threats as the species we have records for.
        </p>
        <p>
          {t('Protected Areas')} have a key role in the conservation of this
          network of life. Within their boundaries, protected areas harbour
          14.7% of terrestrial and inland water areas, 4.12% of the global
          ocean, and 10.2% of coastal and marine areas.
        </p>
        <SpiderChart />
        <p>
          The rate of extinction today is at least 1,000 times higher than at
          any time in Earth’s history but conservation efforts can reduce that
          rate. With the information we already have, plus the influx of data
          that will accompany advances in data collection and analyses, we’ll
          have the details we need to scale up our conservation efforts to a
          global level that encompasses half of the Earth.
        </p>
      </div>
    )
  }
}

export default Global
