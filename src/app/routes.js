import Home from 'sections/home'
import Global from 'sections/global'
import Regional from 'sections/regional'
import Local from 'sections/local'
import CesiumMap from 'sections/map'
import Sidebar from 'sections/sidebar'

const { assign } = Object

const fadeProps = {
  animated: true,
  atEnter: { opacity: 0 },
  atLeave: { opacity: 0 },
  atActive: { opacity: 1 }
}

export default [
  {
    path: '/*',
    component: CesiumMap
  },
  assign(
    {
      path: '/(global|regional|local)',
      component: Sidebar
    },
    fadeProps
  ),
  assign(
    {
      path: '/',
      component: Home,
      exact: true
    },
    fadeProps
  ),
  assign(
    {
      path: '/global',
      component: Global
    },
    fadeProps
  ),
  assign(
    {
      path: '/regional',
      component: Regional
    },
    fadeProps
  ),
  assign(
    {
      path: '/local',
      component: Local
    },
    fadeProps
  )
]
