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
  },
  Profile: {
    path: '/profile',
    component: lazy(() => import('../pages/Profile'))
  },
  ParkingArea: {
    path: '/parkingarea',
    component: lazy(() => import('../pages/ParkingArea'))
  },
  Promotion: {
    path: '/promotion',
    component: lazy(() => import('../pages/Promotion'))
  },
  ConfirmOrder: {
    path: '/confirmorder',
    component: lazy(() => import('../pages/ConfirmOrder'))
  },
  Check: {
    path: '/check',
    component: lazy(() => import('../pages/Check'))
  }

}
