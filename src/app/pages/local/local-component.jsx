import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import Button from 'components/button'
import Earthometer from 'components/earthometer'
import Floodmap from 'components/floodmap'
import Placeholder from 'components/placeholder'

const Local = ({ className, toggleLayer, renderToggle, sidebar, ...props }) => {
  const t = renderToggle(toggleLayer)
  return (
    <div className={cx(className)}>
      <Earthometer />
      <p>
        Swooping over Botswana’s Okavango Delta, the white stork (Ciconia
        ciconia) observes the oasis beneath its wings. The Okavango Delta is an
        important place for {t('migrating birds', false, true)} that stop to
        feed and rest as they travel thousands of miles across Africa and
        beyond. In this place, humans and nature live in synchrony with the
        seasonal rains and flooding. Any change to the natural heartbeat of the
        area is a warning call to all.
      </p>
      <Floodmap />
      <p>
        The variety of life in the Okavango Delta is rich and diverse, earning
        itself a place on the UNESCO World Heritage List. A mosaic of{' '}
        {t('protected areas')} that include a game reserve and a number of
        wildlife management areas are managed by private and community groups,
        and receive legal protection from the national government. Together
        these conservation measures ensure thousands of species are protected,
        along with the water, food and resources they, and the people living
        here, need to survive.
      </p>
      <p>
        For every species observed there is a story to tell. This stork, named{' '}
        {t('91397A', false, true)}, was tagged by a group of German researchers
        as they set out to track and map the migration patterns of White Storks
        between Africa and Europe. 91397A belongs to a small White Storks
        population breeding in South Africa.
      </p>
      <Placeholder
        backgroundImage="url(/img/paharo.png"
        width="30%"
        height="200px"
      />

      <Button>
        <Link to="regional">Regional</Link>
      </Button>
    </div>
  )
}

export default Local
