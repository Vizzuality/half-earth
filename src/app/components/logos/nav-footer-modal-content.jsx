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
  {
    href: 'https://mol.org/',
    image: { src: '/img/partners/partner_image/mol_logo.png', alt: 'Map of Life' }
  },
  {
    href: 'http://coru.oceans.ubc.ca/',
    image: {
      src: '/img/partners/partner_image/changing_ocean.png',
      alt: 'Changing Ocean Research Unit'
    }
  },
  {
    href: 'https://www.gbif.org/',
    image: { src: '/img/partners/partner_image/GBIF-2015.png', alt: 'GBIF' }
  },
  {
    href: 'https://ebird.org/home',
    image: { src: '/img/partners/partner_image/ebird-logo.png', alt: 'eBird' }
  },
  {
    href: 'https://www.iucn.org/',
    image: { src: '/img/partners/partner_image/iucn.png', alt: 'iucn' }
  },
  {
    href: 'http://globalfishingwatch.org/',
    image: {
      src: '/img/partners/partner_image/global_fishing_watch.png',
      alt: 'Global Fishing Watch'
    }
  },
  {
    href: 'https://www.unep-wcmc.org/',
    image: { src: '/img/partners/partner_image/wcmc.png', alt: 'UNEP-WCMC' }
  },
  {
    href: 'https://www.esa-landcover-cci.org/',
    image: { src: '/img/partners/partner_image/esa.png', alt: 'ESA' }
  },
  {
    href: 'https://raisg.socioambiental.org/',
    image: { src: '/img/partners/partner_image/raisg.png', alt: 'RAISG' }
  },
  {
    href: 'http://eol.org/',
    image: { src: '/img/partners/partner_image/eol.png', alt: 'Encyclopedia of Life' }
  },
  {
    href: 'https://carto.com/',
    image: { src: '/img/partners/partner_image/logo_CARTO_solid@1x.png', alt: 'Carto' }
  }
];

const researchPartners = [
  {
    href: 'https://www.yale.edu/',
    image: { src: '/img/partners/partner_image/33.png', alt: 'Yale University' }
  },
  {
    href: 'https://www.ubc.ca/',
    image: { src: '/img/partners/partner_image/ubc.png', alt: 'University of British Columbia' }
  },
  {
    href: 'http://www.ufl.edu/',
    image: { src: '/img/partners/partner_image/uf.png', alt: 'University of Florida' }
  },
  {
    href: 'https://earthengine.google.com/',
    image: { src: '/img/partners/partner_image/35.png', alt: 'Google Earth Engine' }
  },
  {
    href: 'https://cloud.google.com',
    image: { src: '/img/partners/partner_image/google_cloud.png', alt: 'Google Cloud Platform' }
  }
];

const sections = [
  {
    title: 'Half-earth mapping core',
    subtitle: 'The Half-Earth Project is an initiative of the E.O. Wilson Biodiversity Foundation. Map of Life utilizes geospatial species distribution data and analytics to guide where we have the best opportunity to conserve the most species. Vizzuality brings this information to life.',
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
