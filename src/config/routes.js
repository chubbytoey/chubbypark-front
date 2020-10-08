import { lazy } from 'react'

export default {
  Home: {
    path: '/',
    exact: true,
    component: lazy(() => import('../pages/Home'))
  },
  Signin: {
    path: '/signin',
    component:lazy(() => import('../pages/Signin'))
  }
}
