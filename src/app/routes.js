import { assign } from 'utils'

import Home from 'pages/home'
import Global from 'pages/global'
import Regional from 'pages/regional'
import Local from 'pages/local'
import CesiumMap from 'pages/map'

import Locator from 'components/locator'
import SidebarButton from 'components/sidebar/button.jsx'
// import Sidebar from 'components/sidebar'
import PageBackground from 'components/page-background'
// import Earthometer from 'components/earthometer'
import Header from 'components/header'

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
      component: Header,
      key: 'Header'
    },
    fadeProps
  ),
  assign(
    {
      path: '/(global|regional|local)',
      component: SidebarButton,
      key: 'SidebarButton'
    },
    fadeProps
  ),
  // assign(
  //   {
  //     path: '/(global|regional|local)',
  //     component: Earthometer,
  //     key: 'Earthometer'
  //   },
  //   fadeProps
  // ),
  assign(
    {
      path: '/(global|regional|local)',
      component: Locator,
      key: 'Locator'
    },
    fadeProps
  ),
  // assign(
  //   {
  //     path: '/(global|regional|local)',
  //     component: Sidebar,
  //     key: 'Sidebar'
  //   },
  //   fadeProps
  // ),
  assign(
    {
      path: '/(global|regional|local)',
      component: PageBackground,
      key: 'PageBackground'
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
