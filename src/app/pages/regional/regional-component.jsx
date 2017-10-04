import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import Button from 'components/button'
import SpiderChart from 'components/spider-chart'
import Placeholder from 'components/placeholder'
import Earthometer from 'components/earthometer'

import pageStyles from 'styles/pages.scss'
const Regional = ({
  renderDropdown,
  renderToggle,
  selectLayer,
  toggleLayer,
  sidebar
}) => {
  const t = renderToggle(toggleLayer)
  const d = renderDropdown(selectLayer)
  return (
    <div
      className={cx(pageStyles.container, {
        [pageStyles.containerClosed]: !sidebar.open
      })}
    >
      <Earthometer />
      <p>
        Soaring high up upon the air thermals, white storks glide alongside
        millions of other birds that make the journey between Europe, Africa and
        back each year. Many of these species have been observed, tagged and
        mapped. Passing over Zimbabwe, the birds fan out towards Botswana,
        Mozambique, Namibia, Swaziland, Lesotho and South Africa, down to the
        Cape Region. The Cape Regionis is one of the most biologically diverse
        regions on Earth and is characterised by its{' '}
        {t('evergreen shrublands and low fynbos', null, true)},
        {t('thicket', null, true)}, and {t('forest and woodlands', null, true)}{' '}
        areas. x% of all {d(['vertebrates', 'regional'], 'mammals')} species are
        found here.
      </p>
      <Placeholder
        backgroundImage="url(/img/stackedbarchart.png)"
        width="100%"
        height="190px"
      />
      <p>
        Half-Earth integrates historical and current distribution data with the
        analysis of protected area governance and management to inform
        decision-making and provide scientific leadership on which areas must be
        protected. Our map of the Cape Region area highlights where the greatest
        concentration of life can be found and the threats they face.
      </p>
      <SpiderChart />
      <p>
        {t('human activities', null, true)} such as{' '}
        {d(['pressures', 'regional'], 'road-building')} have overtaken some of
        the places white storks and other birds stop to feed and rest at as they
        fly south, putting them in danger of injury, starvation, and death.
        Protecting the places that birds depend on can save both them and the
        other species that share their habitats.
      </p>
      <p>
        In this region, 10.24% percent of the area is covered by designated{' '}
        {t('protected areas')}, encompassing an area of 132,885 km2. Other
        conservation approaches are also present in this area, including
        {t('community-based reserves', null, false)},{' '}
        {t('private reserves', null, false)} and Indigenous and Community
        Conserved Areas (ICCAs).
      </p>
      <p>
        We currently have detailed information for just a fraction of our
        planet, yet it’s within our ability and reach to apply this mapping
        approach to every part of the world. By combining all the knowledge we
        have, we can confidently identify which areas should be protected and
        how.
      </p>
      <Button>
        <Link to="global">Global</Link>
      </Button>
    </div>
  )
}

export default Regional
