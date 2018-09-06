import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'he-components';

class ModalMetadata extends PureComponent {
  render() {
    const { isOpen, title, setModalMetadataParams, metadata } = this.props;
    return (
      <Modal
        onRequestClose={() => setModalMetadataParams({ isOpen: false })}
        isOpen={isOpen}
      >
        <h2>{title}</h2>
        {metadata}
      </Modal>
    );
  }
}

ModalMetadata.propTypes = {
  title: PropTypes.string,
  metadata: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  setModalMetadataParams: PropTypes.func.isRequired
};

ModalMetadata.defaultProps = { title: '', data: [], loading: false };

export default ModalMetadata;
