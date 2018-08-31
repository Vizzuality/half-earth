import { connect } from 'react-redux';
import * as ownActions from './categories-list-actions';
import { setModalMetadataParams } from 'components/v2/modal-metadata/modal-metadata-actions';

import { getCategoriesState } from './categories-list-selectors';
import Component from './categories-list-component';

const actions = { ...ownActions, setModalMetadataParams };

const mapStateToProps = getCategoriesState;

export default connect(
  mapStateToProps,
  actions
)(Component);
