import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'components/button'
import Earthometer from 'components/earthometer'
import pageStyles from 'styles/pages.scss'

const Regional = ({ renderDropdown, selectLayer }) => {
  const d = renderDropdown(selectLayer)
  return (
    <div className={pageStyles.container}>
      <Earthometer />
      <p>
        Soaring high up upon the air thermals, white storks glide alongside
        millions of other birds that make the journey between Europe, Africa and
        back each year. Many of these species have been observed, tagged and
        mapped. Passing over Zimbabwe, the birds fan out towards Botswana,
        Mozambique, Namibia, Swaziland, Lesotho and South Africa, down to the
        Cape Region. The Cape Regionis is one of the most biologically diverse
        regions on Earth and is characterised by its *evergreen shrublands and
        low fynbos*, *thicket*, and *forest and woodlands* areas. x% of all{' '}
        {d(['vertebrates', 'regional'])} species are found here.
      </p>
      <p>
        Half-Earth integrates historical and current distribution data with the
        analysis of protected area governance and management to inform
        decision-making and provide scientific leadership on which areas must be
        protected. Our map of the Cape Region area highlights where the greatest
        concentration of life can be found and the threats they face.
      </p>
      <p>
        *Human activities* such as *road building and urban development* have
        overtaken some of the places white storks and other birds stop to feed
        and rest at as they fly south, putting them in danger of injury,
        starvation, and death. Protecting the places that birds depend on can
        save both them and the other species that share their habitats.
      </p>
      <p>
        In this region, 10.24% percent of the area is covered by designated
        *Protected Areas*, encompassing an area of 132,885 km2. Other
        conservation approaches are also present in this area, including
        *Community-based conservation reserves* , *Private reserves* and
        Indigenous and Community Conserved Areas (ICCAs).
      </p>
      <p>
        We currently have detailed information for just a fraction of our
        planet, yet it’s within our ability and reach to apply this mapping
        approach to every part of the world. By combining all the knowledge we
        have, we can confidently identify which areas should be protected and
        how.
      </p>
      <Link to="global">
        <Button>Global</Button>
      </Link>
    </div>
  )
}

export default Regional
