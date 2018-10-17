import { createStructuredSelector } from 'reselect';
import { selectQueryParams, getIsTerrain } from 'selectors/location-selectors';

export const mapStateToProps = createStructuredSelector({
  query: selectQueryParams,
  isLandscapeView: getIsTerrain
});
