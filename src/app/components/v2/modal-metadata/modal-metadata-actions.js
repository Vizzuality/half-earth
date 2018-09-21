import { createAction, createThunkAction } from 'redux-tools';
import CONTENTFUL from 'app/services/contentful';

export const setModalMetadataParams = createAction('setModalMetadataParams');

// Requires payload params:
// slug: slug to fetch
export const setModalMetadata = createThunkAction('setModalMetadata', payload => dispatch => {
  dispatch(setModalMetadataParams(payload));
  if (payload.slug) {
    dispatch(fetchModalMetaData(payload.slug));
  }
});

export const fetchModalMetaDataInit = createAction('fetchModalMetaDataInit');
export const fetchModalMetaDataFail = createAction('fetchModalMetaDataFail');
export const fetchModalMetaDataReady = createAction('fetchModalMetaDataReady');

export const fetchModalMetaData = createThunkAction('fetchModalMetaDataData', slug => async dispatch => {
  try {
    const data = await CONTENTFUL.getMetadata(slug);
    dispatch(fetchModalMetaDataReady({ slug, data }));
  } catch (e) {
    console.warn(e);
    dispatch(fetchModalMetaDataFail(e));
  }
});
