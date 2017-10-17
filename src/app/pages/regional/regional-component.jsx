import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts'

import Scroller, { Element as P } from 'components/scroller'
import Earthometer from 'components/earthometer'
import NavFooter from 'components/nav-footer'

import uiStyles from 'app/styles/ui'
const earthProtected = 100

const Regional = ({
  classname,
  regional: { sections, graphs },
  renderDropdown,
  renderToggle,
  selectSelector,
  toggleLayer,
  sidebar,
  setSection,
  section,
  ...props
}) => {
  const t = renderToggle(toggleLayer)
  const d = renderDropdown(selectSelector)

  const KBAs = 80
  return (
    <div className={classname}>
      <Scroller>
        <Earthometer displayOnly />
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:1')}
        >
          Soaring high up upon the air thermals, white storks glide alongside
          millions of other birds that make the journey between Europe, Africa
          and back each year. Many of these species have been observed, tagged
          and mapped. Passing over Zimbabwe, the birds fan out towards Botswana,
          Mozambique, Namibia, Swaziland, Lesotho and South Africa, down to the
          Cape Region. The Cape Region is one of the most biologically diverse
          regions on Earth and is characterised by its evergreen shrublands and
          low fynbos, thicket, and forest and woodlands, and is home to a large
          number of {d('regional:1', 'birds')} species.
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart data={graphs} className={uiStyles.radarChart}>
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
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:2')}
        >
          <p>
            Human activities such as {t('road building')} and{' '}
            {t('urban development')}
            have overtaken some of the places white storks and other birds stop
            to feed and rest at as they fly south, putting them in danger of
            injury, starvation, and death.
          </p>
          <p>
            The combined effect of these threats is shrinking the habitats where{' '}
            {d('regional:2', 'anthropogenic')} species live. Improving our
            understanding of how these anthropogenic impacts put biodiversity at
            risk can help us identify which species to protect and where.
          </p>
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:3')}
        >
          In this region, {earthProtected} percent of the area is covered by
          designated {t('Protected Areas')}, encompassing an area of 132,885
          km2. A few of these {t('existing reserves')} are characterised by the
          exceptional endemism and the megafauna that they support. Other
          conservation approaches are also present in this area, including{' '}
          {t('Community-based reserves')}, {t('Private reserves')} and
          Indigenous and Community Conserved Areas (ICCAs). Similarly, several
          sites have been proposed as biodiversity {t('corridors')} to support
          habitat connectivity, and {KBAs} {t('Key Biodiversity Areas')}
          sites have been identified due to their importance for conserving
          threatened and geographically restricted biodiversity.
        </P>
        <NavFooter to="/global" />
      </Scroller>
    </div>
  )
}

export default Regional
