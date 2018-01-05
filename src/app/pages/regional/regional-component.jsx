import React from 'react'
import cx from 'classnames'
import { default as PopUp, ImageContent } from 'components/pop-up/pop-up'
import Scroller, { Element as P } from 'components/scroller'
import SidePopup from 'components/side-popup'
import NavFooter from 'components/nav-footer'

import uiStyles from 'app/styles/ui'

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
      <SidePopup onThumbClick={e => openPopup({ background: e })} />
      <PopUp open={regional.popup.open} close={() => closePopup()}>
        <ImageContent content={regional.popup.selected} />
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
          {t('Protected Areas')}, including {t('example protected areas')},
          cover ca. 15% of this region and have been instrumental for the
          conservation of its unique flora and fauna. While the regional
          governments and institutions are dedicated to safeguarding this
          heritage, many key areas remain unprotected.
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => updateSections('regional:3')}
        >
          <span className={uiStyles.innerP}>
            Beyond traditional reserves,{' '}
            {t('Community-based conservation areas')} and{' '}
            {t('private reserves')} take on a particular role in this region,
            especially pressures {t('human pressures')} on land are ongoing and
            growing.
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
        <NavFooter from="/global" to="/" />
      </Scroller>
    </div>
  )
}

export default Regional
