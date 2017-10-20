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
          The Okavango Delta is an important place for migrating birds that stop
          to feed and rest as they travel thousands of miles across Africa and
          beyond. In this place, humans and nature live in synchrony with the
          seasonal rains and flooding. Any change to the natural heartbeat of
          the area is a warning call to all.
          <Floodmap />
        </P>
        <P className={uiStyles.slides}>
          The variety of life in the Okavango Delta is rich and diverse, earning
          itself aplace on the UNESCO World Heritage List. A mosaic of protected
          lands that include a game reserve and a number of wildlife management
          areas are managed by private and community groups, and receive legal
          protection from the national government. Together these conservation
          measures ensure thousands of species are protected, along with the
          water, food and resources they, and the people living here, need to
          survive.
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('local:3')}
        >
          For every species observed there is a story to tell. This stork, named
          Prinzesschen (40534B), was tagged by a group of German researchers as
          they set out to track and map the migration patterns of White Storks
          between Africa and Europe. Prinzesschen belongs to a small population
          of white storks breeding in South Africa.
        </P>
        <NavFooter from="/" to="/regional" />
      </Scroller>
    </div>
  )
}

export default Local
