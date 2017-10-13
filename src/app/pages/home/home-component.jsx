import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-styles.scss'
import PopUp from 'components/pop-up'

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
    <PopUp />
  </div>
)

export default Home
