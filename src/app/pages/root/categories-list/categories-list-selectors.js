import { createStructuredSelector } from 'reselect';
import { selectQueryParams } from 'selectors/location-selectors';

export const mapStateToProps = createStructuredSelector({ query: selectQueryParams });
