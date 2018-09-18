import { createAction } from 'redux-tools';

export const openSidebar = createAction('openSidebar');
export const closeSidebar = createAction('closeSidebar');
export const toggleSidebar = createAction('toggleSidebar', ({ meta, ...payload }) => payload, ({ meta }) => meta);
export const switchMode = createAction('switchMode');
