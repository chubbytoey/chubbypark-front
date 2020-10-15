import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Signin: {
    path: '/signin',
    component: lazy(() => import('../pages/Signin'))
  },
  Signup: {
    path: '/signup',
    component: lazy(() => import('../pages/Signup'))
  },
  Faq: {
    path: '/faq',
    component: lazy(() => import('../pages/Faq'))
  }
  // ,
  // ParkingArea: {
  //   path: '/parkingarea',
  //   component: lazy(() => import('../pages/ParkingArea'))
  // }
}
