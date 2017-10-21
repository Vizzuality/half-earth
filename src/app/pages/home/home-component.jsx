import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home-styles.scss'

const Home = props => (
  <div className={styles.container}>
    <div className={styles.containerScroll}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Getting To Half</h1>
      </div>
      <p className={styles.intro}>
        Half-Earth is a call-to-action to protect half the Earth’s land and sea.
        If we conserve half, we can safeguard the bulk of the planet’s species,
        including ourselves.
      </p>
      <div className={styles.titleSection}>
        <img src="/img/home/iconPlanet.png" />
        <p className={styles.separator}>Which half?</p>
      </div>
      <p className={styles.body}>
        By mapping data at the local, regional, and global scale, we are
        identifying the places with the greatest and rarest diversity of life.
        We are showcasing the species inhabiting these sites and their unique
        roles. And we are providing scientific leadership and decision support
        for how we can best manage these special places to sustain this
        diversity for future generations and reach the goal of Half-Earth.
      </p>
    </div>
    <div className={styles.cto}>
      <Link to="intro">Play</Link>
      <img className={styles.pulseOne} src="img/button_01.svg" />
      <img className={styles.pulseTwo} src="img/button_02.svg" />
    </div>
  </div>
)

export default Home
