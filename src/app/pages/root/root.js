import { connect } from 'react-redux';

import MapComponent from './root-component';
import { mapStateToProps } from './root-selectors';

export default connect(mapStateToProps)(MapComponent);
