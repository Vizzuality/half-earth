import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-styles.scss'
import { default as PopUp, TextContent } from 'components/pop-up'

const dummyContent = {
  type: 'text',
  image: 'img/bird.png',
  details: [
    { label: 'Area', value: '52ha' },
    { label: 'Established', value: '1985' }
  ],
  description:
    'Kenilworth Racecourse Conservation Area (KRCA) is a special protected area and a powerful example of urban conservation success. Bounded by a racecourse, the endangered Cape Flat Sands Fynbos vegetation type found in KRCA supports populations of birds, small mammals, and reptiles. The critically endangered Micro Frog can be found in this urban refugium. Friends of the Kenilworth Racecourse Conservation Area manages this reserve and conducts educational nature walks, weed and invasive species removal, and also collects seeds for the Millennium Seed Bank to ensure the survival of the rare vegetation found here.'
}

const Home = props => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Getting To Half</h1>
    </div>
    <p className={styles.intro}>
      Half-Earth is a call-to-action to protect half the Earth’s land and sea.
      If we conserve half, we can protect 85% or more of species, including
      ourselves. By mapping data at the local, regional, and global scale, we’re
      identifying the places that contain the greatest diversity of life and
      telling the stories of the species that live there.
    </p>
    <div className={styles.cto}>
      <Link to="intro">Play</Link>
    </div>
    <PopUp
      render={() =>
        dummyContent.type === 'text' ? (
          <TextContent content={dummyContent} />
        ) : null}
    />
  </div>
)

export default Home
