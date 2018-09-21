import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Loading } from 'he-components';

class ModalMetadata extends PureComponent {
  render() {
    const { isOpen, loading, title, setModalMetadataParams, metadata } = this.props;
    return (
      <Modal onRequestClose={() => setModalMetadataParams({ isOpen: false })} isOpen={isOpen}>
        <h2>{title}</h2>
        {loading && <Loading />}
        {
          metadata && metadata.length > 0 && (
          <dl>
            {metadata.map(meta => (
              <React.Fragment>
                <dt><strong>{meta[0]}:</strong></dt>
                <dd>{meta[1]}</dd>
              </React.Fragment>
                ))}
          </dl>
            )
        }
      </Modal>
    );
  }
}

ModalMetadata.propTypes = {
  title: PropTypes.string,
  loading: PropTypes.bool,
  metadata: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  setModalMetadataParams: PropTypes.func.isRequired
};

ModalMetadata.defaultProps = { title: '', loading: false, metadata: null };

export default ModalMetadata;
