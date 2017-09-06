import Home from 'pages/home'
import Other from 'pages/other'
import Country from 'pages/country'

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/other',
    component: Other
  },
  {
    path: '/country/:iso',
    component: Country
  }
]
