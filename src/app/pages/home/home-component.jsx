import React from 'react';
import styles from './home-styles.scss';
import NavFooter from 'components/nav-footer';
import HomeNavFooter from './home-nav-footer.scss';

const isSafari = /constructor/i.test(window.HTMLElement) || (function(p) {
    return p.toString() === '[object SafariRemoteNotification]';
  })(!window['safari'] || window.safari.pushNotification);
const autoplay = isSafari ? '' : 'autoplay=1&';

const Home = () => (
  <div className={styles.container}>
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>Getting To Half</h1>
    </div>
    <p className={styles.intro}>
      “Unless humanity learns a great deal more about global biodiversity and
      moves quickly to protect it, we will soon lose most of the species
      composing life on Earth.”
    </p>
    <div className={styles.separatorBlock}>
      <div className={styles.separatorContainer}>
        <p className={styles.separator}>E.O. WILSON</p>
      </div>
      <div className={styles.videoContainer}>
        <iframe
          src={`https://player.vimeo.com/video/253291731?${autoplay}title=0&byline=0&portrait=0`}
          width="100%"
          height="100%"
          frameBorder="0"
          webkitallowfullscreen="webkitallowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          allowFullScreen
        />
      </div>
    </div>
    <div className={styles.body}>
      <p className={styles.paragraph}>
        Half-Earth is a call to conserve half our planet’s lands and seas in
        order to reverse the species extinction crisis.
      </p>
      <p className={styles.paragraph}>
        How can we reach the goal of Half-Earth? By mapping the biodiversity of
        our planet, we can identify the best places to conserve to safeguard the
        maximum number of species.
      </p>
      <p className={styles.paragraph}>
        The Half-Earth Project is using the latest science and technology to map
        thousands of species around the world. As a resource for everyone, this
        information is critical to help realize the grand ambition of
        Half-Earth.
      </p>
      <p className={styles.paragraph}>
        Explore the Half-Earth map. Discover the stories of our natural world.
        Stay tuned as we continue to add new fine-scale species maps. Watch as
        we track progress towards the goal of Half-Earth.
      </p>
    </div>
    <h2 className={styles.bottomTitle}>
      Join us as we fill in the map with more detail to help guide future
      conservation.
    </h2>
    <div className={styles.navFooterContainer}>
      <NavFooter to="global" theme={HomeNavFooter} />
      <p className={styles.navFooterCaption}>continue</p>
    </div>
  </div>
);
export default Home;
