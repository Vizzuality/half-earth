import { createStructuredSelector } from 'reselect';
import { getHEDatasets } from 'selectors/datasets-selectors';
import { selectQueryParams } from 'selectors/location-selectors';

export const mapStateToProps = createStructuredSelector({
  datasets: getHEDatasets,
  query: selectQueryParams
});
