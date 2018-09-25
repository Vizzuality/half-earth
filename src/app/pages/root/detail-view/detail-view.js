import { connect } from 'react-redux';

import { mapStateToProps } from './detail-view-selectors';
import GroupCardComponent from './detail-view-component';

export default connect(mapStateToProps)(GroupCardComponent);
