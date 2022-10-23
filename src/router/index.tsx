import React from 'react'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import NotFound from '../pages/notfound/notfound'
import user from './modules/user'

const routes: Routes[] = [
  {
    title: '首页',
    path: '/',
    element: <Home/>
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
