import { connect } from 'react-redux';
import * as actions from './modal-metadata-actions';
import reducers, { initialState } from './modal-metadata-reducers';

import ModalMetadataComponent from './modal-metadata-component';
import { getMetadataState } from './modal-metadata-selectors';

const mapStateToProps = getMetadataState;

export const reduxConfig = { actions, reducers, initialState };

export default connect(
  mapStateToProps,
  actions
)(ModalMetadataComponent);
