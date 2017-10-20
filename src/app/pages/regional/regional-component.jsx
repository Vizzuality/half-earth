import React from 'react'
import cx from 'classnames'
import Scroller, { Element as P } from 'components/scroller'
import Earthometer from 'components/earthometer'
import NavFooter from 'components/nav-footer'
import SpiderChart from 'components/spider-chart'

import uiStyles from 'app/styles/ui'
const earthProtected = 100

const Regional = ({
  classname,
  regional: { sections, graphs },
  renderDropdown,
  renderToggle,
  setSection,
  setRegionalSection,
  toggleRegionalLayer,
  sidebar,
  selectRegionalSelector,
  section,
  ...props
}) => {
  const t = renderToggle(toggleRegionalLayer)
  const d = renderDropdown(selectRegionalSelector)
  const KBAs = 80
  const updateSections = s => {
    setRegionalSection(s)
    setSection(s)
  }

  return (
    <div className={classname}>
      <Scroller>
        <Earthometer displayOnly />
        <P
          className={uiStyles.slides}
          onScrollFocus={() => updateSections('regional:1')}
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
          <SpiderChart {...graphs} />
          <div className={uiStyles.spiderLegendContainer}>
            <span className={cx(uiStyles.legend, uiStyles.legendBlue)}>
              Percent of local species adequately protected
            </span>
          </div>
        </P>
        <P
          className={cx(uiStyles.slides, uiStyles.paragraphAfterChart)}
          onScrollFocus={() => updateSections('regional:2')}
        >
          <span className={uiStyles.slides}>
            Human activities such as {t('road building')} and{' '}
            {t('urban development')}
            have overtaken some of the places white storks and other birds stop
            to feed and rest at as they fly south, putting them in danger of
            injury, starvation, and death.
          </span>
          <span className={uiStyles.slides}>
            The combined effect of these threats is shrinking the habitats where{' '}
            {d('regional:2', 'anthropogenic')} species live. Improving our
            understanding of how these anthropogenic impacts put biodiversity at
            risk can help us identify which species to protect and where.
          </span>
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => updateSections('regional:3')}
        >
          In this region, {earthProtected} percent of the area is covered by
          designated {t('Protected Areas')}, encompassing an area of 132,885
          km2. A few of these {t('existing reserves', true)} are characterised
          by the exceptional endemism and the megafauna that they support. Other
          conservation approaches are also present in this area, including{' '}
          {t('Community-based reserves', true)}, {t('Private reserves', true)}{' '}
          and Indigenous and Community Conserved Areas (ICCAs). Similarly,
          several sites have been proposed as biodiversity{' '}
          {t('corridors', true)} to support habitat connectivity, and {KBAs}{' '}
          {t('Key Biodiversity Areas')}
          sites have been identified due to their importance for conserving
          threatened and geographically restricted biodiversity.
        </P>
        <NavFooter from="/local" to="/global" />
      </Scroller>
    </div>
  )
}

export default Regional
