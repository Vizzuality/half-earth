import Home from 'pages/home';
import Global from 'pages/global';
import Regional from 'pages/regional';
import Explore from 'pages/explore';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/global',
    exact: true,
    component: Global
  },
  {
    path: '/regional',
    exact: true,
    component: Regional
  },
  {
    path: '/explore',
    exact: true,
    component: Explore
  }
];
