import { createStructuredSelector } from 'reselect';
import { getGridDataset } from 'selectors/datasets-selectors';

export const mapStateToProps = createStructuredSelector({ grids: getGridDataset });
