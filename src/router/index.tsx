import Test from 'pages/test/test'
import Test2 from 'pages/test2/test2'
import React from 'react'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import NotFound from '../pages/notfound/notfound'
import user from './modules/user'

const routes: Routes[] = [
  {
    title: '首页',
    path: '/',
    auth: true,
    element: <Home/>
  },
  {
    path: '/test',
    hidden: true,
    element: <Test/>
  },
  {
    path: '/test2',
    hidden: true,
    element: <Test2/>
  },
  user,
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
