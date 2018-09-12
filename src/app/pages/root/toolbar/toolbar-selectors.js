import { createStructuredSelector } from 'reselect';
import { getGridDataset } from 'selectors/datasets-selectors';
import { selectQueryParams } from 'selectors/location-selectors';

export const mapStateToProps = createStructuredSelector({ grids: getGridDataset, query: selectQueryParams });
