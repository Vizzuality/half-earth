import React from 'react'
import cx from 'classnames'

import Scroller, { Element as P } from 'components/scroller'
import Earthometer from 'components/earthometer'
import Floodmap from 'components/floodmap'
import { default as PopUp, ImageContent } from 'components/pop-up/pop-up'
import NavFooter from 'components/nav-footer'

import styles from './local-styles'
import uiStyles from 'app/styles/ui'

const Local = ({ className, local, closePopUp, setSection }) => {
  return (
    <div className={cx(className)}>
      <PopUp open={local.popUp.open} close={() => closePopUp()}>
        <ImageContent content={local.popUp.selected} />
      </PopUp>
      <Scroller className={styles.playhead}>
        <Earthometer displayOnly />
        <P className={uiStyles.slides}>
          The Okavango Delta is home to unique biodiversity and is a globally
          important overwintering and stopover site for migratory birds like the
          White stork (Ciconia ciconia) as they travel thousands of miles across
          Africa and beyond. In this place, humans and nature live in synchrony
          with seasonal rains and flooding. Any change to the natural heartbeat
          of the area is a warning call to all.
          <Floodmap />
        </P>
        <P className={uiStyles.slides}>
          The variety of life in the Okavango Delta is rich and diverse, earning
          it a place on the UNESCO World Heritage List. Conservation happens
          through a mosaic of protected lands and areas managed by private and
          community groups that receive legal protection from the national
          government. Together, these conservation measures ensure thousands of
          species are protected, along with the water, food and resources they,
          and the people living here, need for their daily lives.
        </P>
        <NavFooter from="/" to="/regional" />
      </Scroller>
    </div>
  )
}

export default Local
