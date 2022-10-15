import React from 'react'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import { RouteObject } from 'react-router-dom'
import Index1 from '../pages/user/index1'
import Index2 from '../pages/user/index2'
import NotFound from '../pages/notfound/notfound'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/user',
    element: <Home/>,
    children: [
      {
        path: 'index1',
        element: <Index1/>
      },
      {
        path: 'index2',
        element: <Index2/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
]

export default routes
