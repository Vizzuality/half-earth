import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  setModalInstructionsParams
} from 'components/v2/modal-instructions/modal-instructions-actions';
import * as ownActions from './modal-tutorial-actions';
import reducers, { initialState } from './modal-tutorial-reducers';
import Component from './modal-tutorial-component';

const setCookies = () => {
  const cookies = new Cookies();
  const oneYearInSeconds = 31536000;
  cookies.set('visited', true, { maxAge: oneYearInSeconds });
};

const actions = { ...ownActions, setModalInstructionsParams };

export const reduxConfig = { actions, reducers, initialState };

const mapStateToProps = ({ modalTutorial, root }) => ({
  isOpen: modalTutorial.isOpen,
  isTouchScreen: root.isTouchScreen,
  setCookies
});

export default connect(mapStateToProps, actions)(Component);
