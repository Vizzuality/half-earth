import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './logos-styles.scss';

const partners = [
  { href: 'https://mol.org/', image: { src: '/img/partners/mol_logo.png', alt: 'Map of Life' } },
  {
    href: 'https://eowilsonfoundation.org/',
    image: {
      src: '/img/partners/wilson.png',
      alt: 'Wilson Biodiversity Foundation',
      className: styles.eoImageModal
    }
  },
  {
    href: 'http://www.vizzuality.com/',
    className: styles.vizzLogo,
    image: { src: '/img/partners/logo_vizz.png', alt: 'vizzuality' }
  }
];

const dataPartners = [
  { href: 'https://mol.org/', image: { src: '/img/partners/mol_logo.png', alt: 'Map of Life' } },
  // {
  //   href: 'http://www.amphibians.org/',
  //   image: { src: '/img/partners/partner_image/1.png', alt: 'amphibians' }
  // },
  // {
  //   href: 'http://www.birdlife.org/',
  //   image: { src: '/img/partners/partner_image/2.png', alt: 'BirdLife International' }
  // },
  // {
  //   href: 'https://www.rspb.org.uk/',
  //   image: { src: '/img/partners/partner_image/3.png', alt: 'rspb' }
  // },
  // {
  //   href: 'http://www.cambridgeconservation.org/',
  //   image: { src: '/img/partners/partner_image/4.png', alt: 'Cambridge conservation initiative' }
  // },
  // {
  //   href: 'https://www.conservation.org/',
  //   image: { src: '/img/partners/partner_image/5.png', alt: 'conservation international' }
  // },
  // {
  //   href: 'http://www.dlr.de/dlr/en/desktopdefault.aspx/tabid-10002/',
  //   image: { src: '/img/partners/partner_image/6.png', alt: 'dlr' }
  // },
  {
    href: 'https://www.gbif.org/',
    image: { src: '/img/partners/partner_image/7.png', alt: 'gbif' }
  },
  // {
  //   href: 'https://www.thegef.org/',
  //   image: { src: '/img/partners/partner_image/8.png', alt: 'gef' }
  // },
  // {
  //   href: 'https://www.globalwildlife.org/',
  //   image: { src: '/img/partners/partner_image/9.png', alt: 'global wildlife conservation' }
  // },
  // {
  //   href: 'https://www.islandconservation.org/',
  //   image: { src: '/img/partners/partner_image/10.png', alt: 'island conservation' }
  // },
  {
    href: 'https://www.iucn.org/',
    image: { src: '/img/partners/partner_image/11.png', alt: 'iucn' }
  },
  // {
  //   href: 'http://luchoffmanninstitute.org/',
  //   image: { src: '/img/partners/partner_image/12.png', alt: 'luc hoffmann institute' }
  // },
  // {
  //   href: 'http://www.nhm.ac.uk/',
  //   image: { src: '/img/partners/partner_image/15.png', alt: 'natural history museum' }
  // },
  // {
  //   href: 'http://www.natureserve.org/',
  //   image: { src: '/img/partners/partner_image/16.png', alt: 'nature serve' }
  // },
  // {
  //   href: 'https://www.nature.org/',
  //   image: { src: '/img/partners/partner_image/17.png', alt: 'the nature conservancy' }
  // },
  // { href: 'https://www.wcs.org', image: { src: '/img/partners/partner_image/21.png', alt: 'wcs' } },
  // {
  //   href: 'https://www.worldwildlife.org/',
  //   image: { src: '/img/partners/partner_image/22.png', alt: 'wwf' }
  // }
  {
    href: 'https://www.unep-wcmc.org/',
    image: { src: '/img/partners/partner_image/19.png', alt: 'unep-wcmc' }
  }
];

const researchPartners = [
  // {
  //   href: 'https://www.amnh.org/',
  //   image: { src: '/img/partners/partner_image/23.png', alt: 'American Museum of Natural History' }
  // },
  // {
  //   href: 'https://www.calacademy.org/',
  //   image: { src: '/img/partners/partner_image/24.png', alt: 'California academy of sciences' }
  // },
  // {
  //   href: 'http://www.mcz.harvard.edu',
  //   image: { src: '/img/partners/partner_image/26.png', alt: 'missouri botanical garden' }
  // },
  // {
  //   href: 'http://www.mncn.csic.es',
  //   image: { src: '/img/partners/partner_image/27.png', alt: 'museum of comparative zoology' }
  // },
  // {
  //   href: 'https://www.nybg.org',
  //   image: { src: '/img/partners/partner_image/28.png', alt: 'mncn' }
  // },
  // {
  //   href: 'http://www.missouribotanicalgarden.org/',
  //   image: { src: '/img/partners/partner_image/25.png', alt: 'nybg' }
  // },
  // { href: 'http://www.esf.org/', image: { src: '/img/partners/partner_image/29.png', alt: 'esf' } },
  // { href: 'http://dlia.org/', image: { src: '/img/partners/partner_image/30.png', alt: 'DLiA' } },
  {
    href: 'https://www.yale.edu/',
    image: { src: '/img/partners/partner_image/33.png', alt: 'Yale University' }
  },
  {
    href: 'https://cloud.google.com',
    image: { src: '/img/partners/partner_image/34.png', alt: 'Google Cloud Platform' }
  },
  {
    href: 'https://earthengine.google.com/',
    image: { src: '/img/partners/partner_image/35.png', alt: 'Google Earth Engine' }
  }
];

const sections = [
  {
    title: 'Half-earth mapping core',
    subtitle: 'The Half-Earth Project is a program of the E.O. Wilson Biodiversity Foundation. Map of Life mobilizes, integrates and analyzes data on species and their environment to provide information, tools and services in support of global biodiversity monitoring, research, decision-making, and education. Vizzuality brings this information to life.',
    content: partners
  },
  { title: 'Sponsors', subtitle: 'Jeff and Laurie Ubben' },
  { title: 'Data Partners', content: dataPartners },
  { title: 'Research Partners', content: researchPartners }
];

const ModalContent = () => (
  <div className={styles.footerModal}>
    <div className={styles.contain}>
      {sections.map(({ title, subtitle, content }) => [
        <h1 className={subtitle ? styles.smallerBottomMargin : ''} key={title}>{title}</h1>,
        (
          <div key={`${title}content`} className={content ? styles.containImages : ''}>
            {content && content.map(logo => <ModalLogo key={logo.href} {...logo} className />)}
          </div>
        ),
        <p className={styles.subtitle} key={subtitle}>{subtitle}</p>
      ])}
    </div>
  </div>
);

const ModalLogo = ({ href, image, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={cx(styles.imageContainer, className)}
  >
    <img src={image.src} alt={image.alt} className={image.className} />
  </a>
);

ModalLogo.propTypes = {
  href: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  className: PropTypes.string
};

ModalLogo.defaultProps = { className: '' };

export default ModalContent;
