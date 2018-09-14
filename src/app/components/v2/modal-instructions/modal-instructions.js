import { connect } from 'react-redux';
import * as actions from './modal-instructions-actions';
import reducers, { initialState } from './modal-instructions-reducers';
import ModalInstructionsComponent from './modal-instructions-component';

export const reduxConfig = { actions, reducers, initialState };

const mapStateToProps = ({ modalInstructions }) => ({ isOpen: modalInstructions.isOpen });

export default connect(mapStateToProps, actions)(ModalInstructionsComponent);
