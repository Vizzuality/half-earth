import React from 'react'
import cx from 'classnames'
import Scroller, { Element as P } from 'components/scroller'
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
  ...props
}) => {
  // const t = renderToggle(toggleRegionalLayer)
  const d = renderDropdown(selectRegionalSelector)
  const updateSections = s => {
    setRegionalSection(s)
    setSection(s)
  }

  return (
    <div className={classname}>
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
          In publishing and graphic design, lorem ipsum is a filler text or
          greeking commonly used to demonstrate the textual elements of a
          graphic document or visual presentation. Replacing meaningful content
          with placeholder text allows designers to design the form of the
          content before the content itself has been produced.
        </P>
        <NavFooter from="/local" to="/global" />
      </Scroller>
    </div>
  )
}

export default Regional
