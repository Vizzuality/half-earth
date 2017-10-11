import React from 'react'
import { Link } from 'react-router-dom'

import Scroller, { Element as P } from 'components/scroller'
import SpiderChart from 'components/spider-chart'
import Placeholder from 'components/placeholder'
import Earthometer from 'components/earthometer'

// import Dropdown from 'components/dropdown'
// import dropdownTheme from 'styles/themes/dropdown.scss'
import uiStyles from 'app/styles/ui'

const Regional = ({
  classname,
  regional: { sections },
  renderDropdown,
  renderToggle,
  selectLayer,
  toggleLayer,
  sidebar,
  setSection,
  ...props
}) => {
  const t = renderToggle(toggleLayer)
  const d = renderDropdown(name => selectLayer({ name }))
  /**
   Dropdown, {
    className: dropdownTheme.dropdown,
    theme: dropdownTheme,
    onSelect: name => selectOption({ name }),
    options,
    selected:
      (foundSelected && foundSelected.name) || `${defaultLayer}${namespace}`
  }
   */

  return (
    <div className={classname}>
      <Scroller>
        <Earthometer displayOnly />
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:1')}
        >
          Soaring high up upon the air thermals, white storks glide alongside
          millions of other birds that make the journey between Europe, Africa
          and back each year. Many of these species have been observed, tagged
          and mapped. Passing over Zimbabwe, the birds fan out towards Botswana,
          Mozambique, Namibia, Swaziland, Lesotho and South Africa, down to the
          Cape Region. The Cape Regionis is one of the most biologically diverse
          regions on Earth and is characterised by its{' '}
          {t('evergreen shrublands and low fynbos', null, true)},
          {t('thicket', null, true)}, and{' '}
          {t('forest and woodlands', null, true)} areas. x% of all{' '}
          {d('regional:2', 'birds')} species are found here.
          <Placeholder
            backgroundImage="url(/img/stackedbarchart.png)"
            width="100%"
            height="190px"
          />
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:2')}
        >
          Half-Earth integrates historical and current distribution data with
          the analysis of protected area governance and management to inform
          decision-making and provide scientific leadership on which areas must
          be protected. Our map of the Cape Region area highlights where the
          greatest concentration of life can be found and the threats they face.
          <SpiderChart />
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:3')}
        >
          {t('human activities', null, true)} such as{' '}
          {d('regional:3', 'road-building')} have overtaken some of the places
          white storks and other birds stop to feed and rest at as they fly
          south, putting them in danger of injury, starvation, and death.
          Protecting the places that birds depend on can save both them and the
          other species that share their habitats.
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:4')}
        >
          In this region, 10.24% percent of the area is covered by designated{' '}
          {t('protected areas')}, encompassing an area of 132,885 km2. Other
          conservation approaches are also present in this area, including
          {t('community-based reserves', null, false)},{' '}
          {t('private reserves', null, false)} and Indigenous and Community
          Conserved Areas (ICCAs).
        </P>
        <P
          className={uiStyles.slides}
          onScrollFocus={() => setSection('regional:5')}
        >
          We currently have detailed information for just a fraction of our
          planet, yet it’s within our ability and reach to apply this mapping
          approach to every part of the world. By combining all the knowledge we
          have, we can confidently identify which areas should be protected and
          how.
        </P>
        <Link className={uiStyles.button} to="/global">
          Global
        </Link>
      </Scroller>
    </div>
  )
}

export default Regional
