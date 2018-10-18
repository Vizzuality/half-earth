import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Loading } from 'he-components';
import styles from './modal-metadata-styles.scss';

class ModalMetadata extends PureComponent {
  render() {
    const { isOpen, loading, title, setModalMetadataParams, metadata = {} } = this.props;
    return (
      <Modal
        onRequestClose={() => setModalMetadataParams({ isOpen: false })}
        isOpen={isOpen}
        theme={styles}
      >
        <h2>{title}</h2>
        {
          loading ? <Loading height={200} /> : (
            <React.Fragment>
              {
                metadata &&
                  metadata.description &&
                  <p className={styles.metadataDescription}>{metadata.description}</p>
              }
              <dl className={styles.metadataList}>
                {
                  metadata && metadata.category && (
                  <React.Fragment>
                    <dt>Category:</dt>
                    <dd>{metadata.category}</dd>
                    <br />
                  </React.Fragment>
                    )
                }
                {
                  metadata && metadata.dataset && (
                  <React.Fragment>
                    <dt>Dataset:</dt>
                    <dd>{metadata.dataset}</dd>
                    <br />
                  </React.Fragment>
                    )
                }
                {
                  metadata && metadata.layer && (
                  <React.Fragment>
                    <dt>Layer:</dt>
                    <dd>{metadata.layer}</dd>
                    <br />
                  </React.Fragment>
                    )
                }
              </dl>
              {
                metadata && metadata.source && (
                <p className={styles.metadataSource}>
                      Source:{' '}
                  {metadata.source}
                  {' '}
                  {
                        metadata.sourceUrl && (
                        <a href={metadata.sourceUrl} target="_blank" rel="noopener noreferrer">
                          {metadata.sourceUrl}
                        </a>
                          )
                      }
                </p>
                  )
              }
              {
                metadata && metadata.molLogo && (
                <div className={styles.logoContainer}>
                  <a href="https://mol.org/" target="_blank" rel="noopener noreferrer">
                    <img
                      className={styles.logoImg}
                      src="/img/partners/mol-logo.png"
                      alt="Mol logo"
                    />
                  </a>
                </div>
                  )
              }
            </React.Fragment>
)
        }
      </Modal>
    );
  }
}

ModalMetadata.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  metadata: PropTypes.object,
  isOpen: PropTypes.bool.isRequired,
  setModalMetadataParams: PropTypes.func.isRequired
};

ModalMetadata.defaultProps = { title: '', loading: false, metadata: undefined };

export default ModalMetadata;
