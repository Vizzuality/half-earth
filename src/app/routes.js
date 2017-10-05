import Home from 'pages/home'
import Global from 'pages/global'
import Regional from 'pages/regional'
import Local from 'pages/local'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/global',
    component: Global,
    exact: true
  },
  {
    path: '/regional',
    component: Regional,
    exact: true
  },
  {
    path: '/local',
    component: Local,
    exact: true
  }
]
