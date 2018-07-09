import React, { Component } from 'react';
import cx from 'classnames';
import Scroller, { Element as P } from 'components/scroller';
import NavFooter from 'components/nav-footer';
import EarthoMeter from 'components/earthometer-multi';
import Barchart from './barchart';
import uiStyles from 'app/styles/ui';

class Global extends Component {
  updateSections = s => {
    const { sidebarOpen, setSection, setGlobalSectionThunk } = this.props;
    if (sidebarOpen) {
      setGlobalSectionThunk(s);
      setSection(s);
    }
  };

  render () {
    const {
      toggleGlobalLayer,
      renderToggle,
      renderDropdown,
      className,
      selectGlobalSelector,
      globalScaleBiodiversity,
      globalScaleProtectedAreas,
      globalConservationPrioritization,
      setTypeThunk,
      selectedType,
      section
      // landSaved,
      // oceanSaved
    } = this.props;

    const t = renderToggle(toggleGlobalLayer);
    const d = renderDropdown(selectGlobalSelector);
    return (
      <div className={className}>
        <Scroller>
          <P
            className={cx(uiStyles.slides, {
              [uiStyles.slidesActive]: section === 'global:1'
            })}
            onScrollFocus={() => this.updateSections('global:1')}
          >
            <span className={uiStyles.innerTitle}>
              Biodiversity at the planetary scale.
            </span>
            <span className={uiStyles.innerP}>
              Species are the fundamental level of study that must drive our
              understanding of conservation priorities. Regions that are
              particularly rich in species, or harbor rare species restricted to
              few locations, are priority areas for conservation.
            </span>
            <span>
              Globally, we have amassed a general, coarse-resolution
              understanding of species{' '}
              {
                <button
                  onClick={() => setTypeThunk('richness')}
                  className={cx(uiStyles.toggle, {
                    [uiStyles.toggleActive]: selectedType === 'richness'
                  })}
                >
                  richness
                </button>
              }{' '}
              and{' '}
              {
                <button
                  onClick={() => setTypeThunk('rarity')}
                  className={cx(uiStyles.toggle, {
                    [uiStyles.toggleActive]: selectedType === 'rarity'
                  })}
                >
                  rarity
                </button>
              }{' '}
              for {d('global:1', 'birds')}. This information allows us to begin
              to see the areas most important to manage to protect the bulk of
              biodiversity. Watch how the map changes as you select different
              species groups.
            </span>
            <Barchart
              labelKey="taxa"
              color={globalScaleBiodiversity.color}
              data={globalScaleBiodiversity.data}
              dataKey={globalScaleBiodiversity.key}
              legend={globalScaleBiodiversity.legend}
            />
          </P>

          <P
            className={cx(uiStyles.slides, {
              [uiStyles.slidesActive]: section === 'global:2'
            })}
            onScrollFocus={() => this.updateSections('global:2')}
          >
            This global {t('Protected Areas')} network plays a key role in the
            conservation of nature and safeguarding of species. However, by
            overlaying global species{' '}
            {
              <button
                onClick={() => setTypeThunk('richness')}
                className={cx(uiStyles.toggle, {
                  [uiStyles.toggleActive]: selectedType === 'richness'
                })}
              >
                richness
              </button>
            }{' '}
            and{' '}
            {
              <button
                onClick={() => setTypeThunk('rarity')}
                className={cx(uiStyles.toggle, {
                  [uiStyles.toggleActive]: selectedType === 'rarity'
                })}
              >
                rarity
              </button>
            }{' '}
            with the protected areas network, we can see that many species
            remain insufficiently protected.
            {globalScaleProtectedAreas.data.length > 0 && (
              <Barchart
                labelKey="taxa"
                domain={globalScaleProtectedAreas.domain}
                color={globalScaleProtectedAreas.color}
                data={globalScaleProtectedAreas.data}
                dataKey={globalScaleProtectedAreas.key}
                legend={globalScaleProtectedAreas.legend}
              />
            )}
          </P>

          <P
            className={cx(uiStyles.slides, uiStyles.paragraphAfterChart, {
              [uiStyles.slidesActive]: section === 'global:3'
            })}
            onScrollFocus={() => this.updateSections('global:3')}
          >
            How can we reduce these conservation gaps and include more species
            in an expanded network of{' '}
            {t('conservation areas', false, 'protected-areas')} while accounting
            for the growing constraints from {t('human pressures')}, such as
            logging, agriculture and urban development?
          </P>

          <P
            className={cx(uiStyles.slides, {
              [uiStyles.slidesActive]: section === 'global:4'
            })}
            onScrollFocus={() => this.updateSections('global:4')}
          >
            <span className={uiStyles.innerP}>
              The Half-Earth Project is integrating high-resolution data
              worldwide to identify places where species are insufficiently
              protected and using this information to guide conservation
              priorities. Use the Half-Earth progress meter below to explore how
              this geographically optimized approach could rapidly increase the
              number of species with sufficient protection.
            </span>
            <EarthoMeter />
            <Barchart
              labelKey="taxa"
              domain={globalConservationPrioritization.domain}
              color={globalConservationPrioritization.color}
              data={globalConservationPrioritization.data}
              dataKey={globalConservationPrioritization.key}
              legend={globalConservationPrioritization.legend}
            />
            <span className={uiStyles.innerP}>
              Conservation activities that balance the needs of both humans and
              nature will require more information, in much finer detail, than
              what is seen on this prototype Half-Earth map. The goal of the
              Half-Earth Project is to develop this information, at spatial
              resolutions of 1km and inclusive of a growing number species, to
              support biodiversity discovery and conservation worldwide.
            </span>
          </P>

          <NavFooter from="/" to="/regional" />
        </Scroller>
      </div>
    );
  }
}

export default Global;
