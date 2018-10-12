import { connect } from 'react-redux';
import { setModalTutorialParams } from 'components/v2/modal-tutorial/modal-tutorial-actions';
import * as ownActions from './modal-instructions-actions';
import reducers, { initialState } from './modal-instructions-reducers';
import ModalInstructionsComponent from './modal-instructions-component';

const actions = { ...ownActions, setModalTutorialParams };

export const reduxConfig = { actions, reducers, initialState };

const mapStateToProps = ({ modalInstructions, root }) => ({
  isOpen: modalInstructions.isOpen,
  isTouchScreen: root.isTouchScreen
});

export default connect(mapStateToProps, actions)(ModalInstructionsComponent);
