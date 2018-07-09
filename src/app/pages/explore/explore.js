import Explore from './explore-component';
import { withReducers } from 'utils/react';
import * as actions from './explore-actions';
import * as reducers from './explore-reducers';
import initialState from './explore-initial-state';

export default withReducers({ initialState, actions, reducers })(Explore);
