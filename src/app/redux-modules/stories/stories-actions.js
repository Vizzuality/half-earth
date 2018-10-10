import { createAction } from 'redux-tools';

export const setStoriesLoading = createAction('stories/SET_STORIES_LOADING');
export const setStoriesReady = createAction('stories/SET_STORIES_READY');
export const setStoriesError = createAction('stories/SET_STORIES_ERROR');
