import { connect } from 'react-redux';
import * as popUpActions from 'components/pop-up/pop-up-actions';
import LogosComponent from './logos-component';

const mapStateToProps = ({ navFooter }) => ({ popUp: navFooter.popUp });

export default connect(mapStateToProps, popUpActions)(LogosComponent);
