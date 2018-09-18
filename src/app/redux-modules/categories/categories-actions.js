import { createAction } from 'redux-tools';

export const setCategoriesLoading = createAction('categories/SET_CATEGORIES_LOADING');
export const setCategoriesReady = createAction('categories/SET_CATEGORIES_READY');
export const setCategoriesError = createAction('categories/SET_CATEGORIES_ERROR');
