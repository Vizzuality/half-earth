import React, { Component } from 'react'
import cx from 'classnames'
import Scroller, { Element as P } from 'components/scroller'
import NavFooter from 'components/nav-footer'
import EarthoMeterKnob from 'components/earthometer-knob'
import Barchart from 'components/barchart'
import OldBarchart from './barchart/barchart'
import uiStyles from 'app/styles/ui'

class Global extends Component {
  render () {
    const {
      toggleGlobalLayer,
      renderToggle,
      renderDropdown,
      className,
      setSection,
      setGlobalSection,
      selectGlobalSelector,
      globalScaleBiodiversity,
      globalScaleProtectedAreas,
      globalConservationPrioritization
    } = this.props

    const updateSections = s => {
      setGlobalSection(s)
      setSection(s)
    }

    const t = renderToggle(toggleGlobalLayer)
    const d = renderDropdown(selectGlobalSelector)
    return (
      <div className={className}>
        <Scroller>
          <h2>Biodiversity at the planetary scale.</h2>
          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:1')}
          >
            <span className={uiStyles.innerP}>
              Species are the fundamental level of study that must drive our
              understanding of conservation priorities. Regions that are
              particularly rich in species, or harbor rare species restricted to
              few locations, are priority areas for conservation.
            </span>
            <span>
              Globally, we have amassed a general, coarse-resolution
              understanding of species {t('richness')} and
              {t('rarity')} for {d('global:1', 'birds')}. This information
              allows us to begin to see the areas most important to manage to
              protect the bulk of biodiversity. Watch how the map changes as you
              select different species groups.
            </span>
            <Barchart
              data={globalScaleBiodiversity.data}
              dataKey={globalScaleBiodiversity.key}
              labelKey="taxa"
            />
          </P>

          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:2')}
          >
            This global {t('Protected Areas')} network plays a key role in the
            conservation of nature and safeguarding of species. However, by
            overlaying global species {t('richness')} and
            {t('rarity')} with the protected areas network, we can see that many
            species remain insufficiently protected.
            <OldBarchart
              data={globalScaleProtectedAreas.data}
              dataKey={globalScaleProtectedAreas.key}
              labelKey="taxa"
            />
          </P>

          <P
            className={cx(uiStyles.slides, uiStyles.paragraphAfterChart)}
            onScrollFocus={() => updateSections('global:3')}
          >
            How can we reduce these conservation gaps and include more species
            in an expanded network of conservation areas while accounting for
            the growing constraints from [human press ures], such as road
            building and urban development?
          </P>

          <P
            className={uiStyles.slides}
            onScrollFocus={() => updateSections('global:4')}
          >
            <span className={uiStyles.innerP}>
              The Half-Earth Project is integrating multiple layers of high
              resolution data to identify places where species are
              insufficiently protected and using this information to guide
              prioritization of places for conservation.
            </span>
            <Barchart
              data={globalConservationPrioritization.data}
              dataKey={globalConservationPrioritization.key}
              labelKey="taxa"
            />
            <span className={uiStyles.innerP}>
              By prioritizing conservation efforts in regions that are rich in
              species, or regions that have rare species, we can rapidly
              increase the number of species that have at least minimum
              conservation protection.
            </span>
            <EarthoMeterKnob />
            <span className={uiStyles.innerP}>
              Conservation activities that balance the needs of both humans and
              nature will require more information, in much finer detail, than
              what is seen on this prototype Half-Earth map. The goal of the
              Half-Earth Project is to develop this information, at spatial
              resolutions of 1km and inclusive of a growing number species, to
              support biodiversity discovery and conservation worldwide.
            </span>
          </P>

          <NavFooter from="/regional" to="/" />
        </Scroller>
      </div>
    )
  }
}

export default Global
