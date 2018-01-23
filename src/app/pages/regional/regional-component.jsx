import React from 'react'
import cx from 'classnames'
import lowerCase from 'lodash/lowerCase'
import { assign } from 'utils'
import { default as PopUp, ImageContent } from 'components/pop-up/pop-up'
import Scroller, { Element as P } from 'components/scroller'
import SidePopup from 'components/side-popup'
import Restart from 'components/nav-footer/restart-component'

import uiStyles from 'app/styles/ui'

const filterToLayer = name =>
  ({
    protea: 'protea'
  }[lowerCase(name)] || `${lowerCase(name)}s`)

const Regional = ({
  classname,
  renderDropdown,
  renderToggle,
  setSection,
  setRegionalSection,
  toggleRegionalLayer,
  localProtectedSpeciesSpider,
  sidebar,
  selectRegionalSelector,
  section,
  selectedType,
  setType,
  regional,
  closePopup,
  openPopup,
  resetLayers,
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
      <SidePopup
        onThumbClick={e => {
          openPopup(e)
        }}
        onCloseSidePopup={() => resetLayers()}
        onFilter={name =>
          toggleRegionalLayer({ name: `${filterToLayer(name)}:rarity` })}
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
          className={uiStyles.slides}
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
                onClick={() => setType('richness')}
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
                onClick={() => setType('rarity')}
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
          className={uiStyles.slides}
          onScrollFocus={() => updateSections('regional:2')}
        >
          {t('Protected Areas')}, cover ca. 15% of this region and have been
          instrumental for the conservation of its unique flora and fauna. While
          the regional governments and institutions are dedicated to
          safeguarding this heritage, many key areas remain unprotected.
        </P>
        <P
          className={uiStyles.slides}
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
          className={uiStyles.slides}
          onScrollFocus={() => updateSections('regional:4')}
        >
          In the next 5 years, the EO Wilson foundation, Map of Life and
          Vizzuality along with many partners will create fine scale maps of
          every known species on the planet. Unlocking a new era in data driven
          conservation, the Half Earth Mapping Core will lead the way. Contact
          us to find out more and join the initiative.
        </P>
        <Restart />
      </Scroller>
    </div>
  )
}

export default Regional
