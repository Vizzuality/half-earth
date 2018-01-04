import Home from 'pages/home'
// import Intro from 'pages/intro'
import Global from 'pages/global'
import Regional from 'pages/regional'

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
  }
]
