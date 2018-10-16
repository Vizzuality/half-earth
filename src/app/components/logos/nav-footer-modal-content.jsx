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
  {
    href: 'http://coru.oceans.ubc.ca/',
    image: { src: '/img/partners/mol_logo.png', alt: 'Changing Ocean Research Unit' }
  },
  {
    href: 'https://www.gbif.org/',
    image: { src: '/img/partners/partner_image/7.png', alt: 'GBIF' }
  },
  { href: 'https://ebird.org/home', image: { src: '/img/partners/mol_logo.png', alt: 'eBird' } },
  {
    href: 'https://www.iucn.org/',
    image: { src: '/img/partners/partner_image/11.png', alt: 'iucn' }
  },
  {
    href: 'http://globalfishingwatch.org/',
    image: { src: '/img/partners/partner_image/11.png', alt: 'Global Fishing Watch' }
  },
  {
    href: 'https://www.unep-wcmc.org/',
    image: { src: '/img/partners/partner_image/19.png', alt: 'UNEP-WCMC' }
  },
  {
    href: 'https://www.esa-landcover-cci.org/',
    image: { src: '/img/partners/partner_image/19.png', alt: 'ESA' }
  },
  {
    href: 'https://raisg.socioambiental.org/',
    image: { src: '/img/partners/partner_image/19.png', alt: 'RAISG' }
  },
  {
    href: 'http://eol.org/',
    image: { src: '/img/partners/partner_image/19.png', alt: 'Encyclopedia of Life' }
  }
];

const researchPartners = [
  {
    href: 'https://www.yale.edu/',
    image: { src: '/img/partners/partner_image/33.png', alt: 'Yale University' }
  },
  {
    href: 'https://www.ubc.ca/',
    image: { src: '/img/partners/partner_image/33.png', alt: 'University of British Columbia' }
  },
  {
    href: 'http://www.ufl.edu/',
    image: { src: '/img/partners/partner_image/33.png', alt: 'University of Florida' }
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
