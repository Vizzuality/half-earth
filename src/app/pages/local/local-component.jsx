import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import Button from 'components/button'
import Earthometer from 'components/earthometer'
import styles from './local-styles.scss'
import pageStyles from 'styles/pages.scss'

const Local = ({ toggleLayer, renderToggle }) => {
  const t = renderToggle(toggleLayer)
  return (
    <div className={cx(styles.container, pageStyles.container)}>
      <Earthometer />
      <p className={cx(pageStyles.content)}>
        Swooping over Botswana’s Okavango Delta, the white stork (Ciconia
        ciconia) observes the oasis beneath its wings. The Okavango Delta is an
        important place for {t('migrating birds', false, true)} that stop to
        feed and rest as they travel thousands of miles across Africa and
        beyond. In this place, humans and nature live in synchrony with the
        seasonal rains and flooding. Any change to the natural heartbeat of the
        area is a warning call to all.
      </p>
      <p className={cx(pageStyles.content)}>
        The variety of life in the Okavango Delta is rich and diverse, earning
        itself a place on the UNESCO World Heritage List. A mosaic of protected
        lands that include a game reserve and a number of wildlife management
        areas are managed by private and community groups, and receive legal
        protection from the national government. Together these conservation
        measures ensure thousands of species are protected, along with the
        water, food and resources they, and the people living here, need to
        survive.
      </p>
      <p className={cx(pageStyles.content)}>
        For every species observed, there is a story to tell, for this stalk
        (named 3456) tagged by a set of researchers from Germany as part of a
        larger project to ….
      </p>
      <Link to="regional">
        <Button>Regional</Button>
      </Link>
    </div>
  )
}

export default Local
