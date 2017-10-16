import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-styles.scss'

const Home = props => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Getting To Half</h1>
    </div>
    <p className={styles.intro}>
      Half-Earth is a call-to-action to protect half the Earth’s land and sea.
      If we conserve half, we can protect 85% or more of species, including
      ourselves.
    </p>
    <p className={styles.separator}>Which half?</p>
    <p className={styles.body}>
      By mapping data at the local, regional, and global scale, we’re
      identifying the places that contain the greatest diversity of life and
      showcasing how the species protected in these habitats can best be managed
      to sustain biodiversity. We’re analyzing protected places, along with
      their governance and management, and integrating data about the historical
      distribution and current status of biodiversity to help drive
      decision-making and provide scientific leadership regarding what areas
      must be protected to reach the goal of Half-Earth.
    </p>
    <div className={styles.cto}>
      <Link to="intro">Play</Link>
    </div>
  </div>
)

export default Home
