import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-styles.scss'

const Home = props => (
  <div className={styles.container}>
    <h1 className={styles.title}>Half-Earth Project Map</h1>
    <p className={styles.intro}>
      Half-Earth is a call-to-action to protect half the Earth’s land and sea.
      If we conserve half, we can protect 85% or more of species, including
      ourselves. By mapping data at the local, regional, and global scale, we’re
      identifying the places that contain the greatest diversity of life and
      telling the stories of the species that live there.
    </p>
    <button className={styles.cto}>
      <Link to="local">Go</Link>
    </button>
  </div>
)

export default Home
