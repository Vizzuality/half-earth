import { connect } from 'react-redux';

import { mapStateToProps } from './group-card-list-selectors';
import GroupCardComponent from './group-card-list-component';

export default connect(mapStateToProps)(GroupCardComponent);
