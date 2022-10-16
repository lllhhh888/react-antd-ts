import React from 'react'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import { RouteObject } from 'react-router-dom'
import NotFound from '../pages/notfound/notfound'
import Authorize from './Authorize'
import { NprogressComm } from '../comm/nprogress/NprogressComm'

const routes: RouteObject[] = [

  {
    path: '/',
    element: <NprogressComm>
      <Authorize>
        <Home/>
      </Authorize>
    </NprogressComm>
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
