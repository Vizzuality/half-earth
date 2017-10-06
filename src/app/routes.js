import Home from 'pages/home'
import Global from 'pages/global'
import Regional from 'pages/regional'
import Local from 'pages/local'

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
    path: '/local',
    exact: true,
    component: Local
  }
]
