import CONTENTFUL from 'app/services/contentful';
import { setStoriesLoading, setStoriesReady, setStoriesError } from './stories-actions';

export async function fetchStoriesThunk(dispatch, getState) {
  const { data } = getState().stories;
  if (!data) {
    dispatch(setStoriesLoading());
    try {
      const stories = await CONTENTFUL.getStories();
      dispatch(setStoriesReady(stories));
    } catch (e) {
      console.warn(e);
      dispatch(setStoriesError(e));
    }
  }
}
