import React from 'react'
import cx from 'classnames'
import { assign } from 'utils'
import { default as PopUp, ImageContent } from 'components/pop-up/pop-up'
import Scroller, { Element as P } from 'components/scroller'
import SidePopup from 'components/side-popup'
import Restart from 'components/nav-footer/restart-component'
import { filterToLayer } from './regional-utils'
import uiStyles from 'app/styles/ui'

const Regional = ({
  classname,
  renderDropdown,
  renderToggle,
  setSection,
  setRegionalSectionThunk,
  toggleRegionalLayer,
  localProtectedSpeciesSpider,
  sidebar,
  selectRegionalSelector,
  section: { section },
  selectedType,
  setTypeThunk,
  regional,
  closePopup,
  openPopup,
  hideLayers,
  ...props
}) => {
  const t = renderToggle(toggleRegionalLayer)
  const d = renderDropdown(selectRegionalSelector)
  const updateSections = s => {
    setRegionalSectionThunk(s)
    setSection(s)
  }

  return (
    <div className={classname}>
      <SidePopup
        onThumbClick={e => {
          openPopup(e)
        }}
        onCloseSidePopup={e => hideLayers(e.map(f => filterToLayer(f)))}
      />
      <PopUp open={regional.popup.open} close={() => closePopup()}>
        {regional.popup.selected && (
          <ImageContent
            content={assign(regional.popup.selected, {
              attribution: regional.popup.selected.supplier
            })}
          />
        )}
      </PopUp>
      <Scroller>
        <P
          className={cx(uiStyles.slides, {
            [uiStyles.slidesActive]: section === 'regional:1'
          })}
          onScrollFocus={() => updateSections('regional:1')}
        >
          <span className={uiStyles.innerTitle}>
            What does this look like in action?
          </span>
          <span className={uiStyles.innerP}>
            Here is a first look at the underpinnings of such a detailed map for
            South Africa’s Cape region, a global hotspot of unique and
            threatened biodiversity.
          </span>
          <span className={uiStyles.innerP}>
            Using remote sensing data and models, we have mapped the{' '}
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
            of <wbr />
            {d('regional:1', 'birds')} for every square kilometer in the region.
            Notice the intricate fine-scale variation in biodiversity patterns
            that is missed by the coarser-resolution global map.
          </span>
        </P>
        <P
          className={cx(uiStyles.slides, {
            [uiStyles.slidesActive]: section === 'regional:2'
          })}
          onScrollFocus={() => updateSections('regional:2')}
        >
          {t('Protected Areas')} cover ca. 15% of this region and have been
          instrumental for the conservation of its unique flora and fauna. While
          the regional governments and institutions are dedicated to
          safeguarding this heritage, many key areas remain unprotected.
        </P>
        <P
          className={cx(uiStyles.slides, {
            [uiStyles.slidesActive]: section === 'regional:3'
          })}
          onScrollFocus={() => updateSections('regional:3')}
        >
          <span className={uiStyles.innerP}>
            While traditional reserves, such as these{' '}
            {t('Example Protected Areas')}, play an important role for
            conservation, {t('Community-based conservation areas')} and{' '}
            {t('private reserves')} take on a key role in this region,
            especially safe-guarding against increasing {t('human pressures')}.
          </span>
          <span className={uiStyles.innerP}>
            Highlighting the global significance of sites for biodiversity can
            empower local conservation efforts and encourage regional or global
            support.
          </span>
          <span className={uiStyles.innerP}>
            You can explore the different areas by clicking on the map.
          </span>
        </P>
        <P
          className={cx(uiStyles.slides, {
            [uiStyles.slidesActive]: section === 'regional:4'
          })}
          onScrollFocus={() => updateSections('regional:4')}
        >
          The Half-Earth Mapping Core is unlocking a new era in data-driven
          conservation. Follow us and engage as the E.O. Wilson Biodiversity
          Foundation, Map of Life, Vizzuality and our many partners continue
          these efforts to provide fine-scale biodiversity information to
          people, communities, conservationists and decision-makers everywhere.
        </P>
        <Restart />
      </Scroller>
    </div>
  )
}

export default Regional
