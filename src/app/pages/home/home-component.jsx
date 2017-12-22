import React from 'react'
import styles from './home-styles.scss'
import NavFooter from 'components/nav-footer'
import HomeNavFooter from './home-nav-footer.scss'

const Home = ({ onClick }) => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Getting To Half</h1>
    </div>
    <p className={styles.intro}>
      "Unless we move quickly to protect global biodiversity we will lose most
      of the species composing life on Earth"
    </p>
    <div className={styles.separatorBlock}>
      <div className={styles.separatorContainer}>
        <p className={styles.separator}>E.O. WILSON</p>
      </div>
      <div className={styles.videoContainer}>
        <span className={styles.playButton} />
        <video
          poster="/img/home-video-placeholder.png"
          className={styles.video}
        />
      </div>
    </div>
    <div className={styles.body}>
      <p className={styles.paragraph}>
        Half-Earth is a call to conserve half our planet’s lands and seas in
        order to reverse the species extinction crisis. As E.O. Wilson says in
        the book, Half-Earth, “Unless humanity learns a great deal more about
        global biodiversity and moves quickly to protect it, we will soon lose
        most of the species composing life on Earth.”
      </p>
      <p className={styles.paragraph}>
        How can we reach the goal of Half-Earth? One important part is by
        mapping the biodiversity of our planet to help discover where we should
        conserve. This will safeguard the maximum number of species.
      </p>
      <p className={styles.paragraph}>
        The Half-Earth map uses the latest science and technology to map
        thousands of species across the planet. An information source for
        everyone, this is critical to help realize the grand ambition of
        Half-Earth.
      </p>
      <p className={styles.paragraph}>
        Now go explore the Half-Earth map. Discover the stories of our natural
        world. Stay-tuned as we continue to add new fine-scale species maps.
        Watch as we track progress towards the goal of Half-Earth.
      </p>
    </div>
    <h2 className={styles.bottomTitle}>
      Follow us, as we fill in the map with more detail to help guide future
      conservation..
    </h2>
    <div className={styles.navFooterContainer}>
      <NavFooter to={'/local'} theme={HomeNavFooter} />
      <p className={styles.navFooterCaption}>continue</p>
    </div>
  </div>
)

export default Home
