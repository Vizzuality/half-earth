import React, { Component } from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

import Earthometer from 'components/earthometer'
import NavFooter from 'components/nav-footer'
import uiStyles from 'app/styles/ui'
import LineChart from './linechart'
import Shapes from './shapes'

class Global extends Component {
  render () {
    const { toggleLayer, renderToggle, className, graph } = this.props
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
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={graph.graphs} className={uiStyles.radarChart}>
              <Radar
                name="Total Species in the Region"
                dataKey="Regional"
                stroke="#0664f6"
                fill="#0664f6"
                fillOpacity={0.2}
              />
              <Radar
                name="Total Species Globally"
                dataKey="Global"
                stroke="#8366e4"
                fill="#8366e4"
                fillOpacity={0.2}
              />
              <PolarGrid
                gridType="circle"
                stroke="#2b4d68"
                stroke-dasharray="15"
              />
              <Legend />
              <PolarRadiusAxis
                angle={0}
                domain={['auto', 'auto']}
                tick={false}
                tickCount={5}
                stroke="#2b4d68"
                strokeDasharray="15"
              />
              <PolarAngleAxis dataKey="subject" fill="#fff" />
            </RadarChart>
          </ResponsiveContainer>
        </p>
        <p className={uiStyles.paragraphAfterChart}>
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
