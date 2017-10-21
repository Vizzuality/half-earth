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
          Soaring high up on air thermals, white storks glide alongside millions
          of other birds that make the journey between Europe, Africa and back
          each year. Some of these individuals have been tagged and mapped.
          Passing over Zimbabwe, the birds fan out towards Botswana and South
          Africa, down to the Western Cape. The Cape Region is one of the most
          biologically diverse places on Earth and is characterised by its
          evergreen shrublands and low fynbos, thicket, and forest and
          woodlands, and is home to large number of {d('regional:1', 'birds')}{' '}
          species. Thanks to data from professional and amateur naturalists and
          taxonomists, and aided by remote sensing and scientific models, we are
          able to paint an increasingly detailed picture of where these species
          occur in the landscape. We can predict their diversity at the
          resolution needed to critically assess their conservation, to evaluate
          ongoing and future impacts from human uses or climate change, and to
          support decision-making that is able to benefit both nature and
          society. With this detailed information, we can begin to manage
          landscapes fully aware of implications for biodiversity. And we can
          chart out a carefully developed planetary network of potential areas
          primed to safeguard the world’s heritage of life.
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
            to feed and rest as they fly south, putting them in danger of
            injury, starvation, and death.
          </span>
          <span className={uiStyles.slides}>
            The combined effect of these threats is shrinking the habitats where{' '}
            {d('regional:2', 'anthropogenic')} species live. Protecting the
            places that species like these depend on can save them and others
            that share this habitats.
          </span>
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => updateSections('regional:3')}
        >
          In this region, {earthProtected} percent of the area is covered by
          designated {t('Protected Areas')}, encompassing an area of 60,100 km2.
          Other conservation approaches are also present in this area, including{' '}
          {t('Community-based reserves', true)}, {t('Private reserves', true)}{' '}
          and Indigenous and Community Conserved Areas (ICCAs). Similarly, a
          number of {t('Key Biodiversity Areas')}
          have been identified due to their importance for select threatened and
          geographically restricted species.
        </P>
        <NavFooter from="/local" to="/global" />
      </Scroller>
    </div>
  )
}

export default Regional
