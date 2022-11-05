import React from 'react'
import './App.css'
import { createHashRouter, RouteObject, RouterProvider } from 'react-router-dom'
import routes from './router/index'
import Authorize from './router/Authorize'
import { NprogressComm } from 'components/nprogress/NprogressComm'
import 'nprogress/nprogress.css'
import './assets/scss/comn.scss'

function App (): any {
  const router = createHashRouter(formatRoutes(routes))
  return (
    <RouterProvider router={router} />
  )
}

function formatRoutes (routes: Routes[]): RouteObject[] {
  return routes.map(item => {
    const ele = item.auth === true ? <Authorize>{item.element}</Authorize> : item.element
    return {
      path: item.path,
      element: <NprogressComm>{ele}</NprogressComm>,
      children: item.children !== undefined ? formatRoutes(item.children) : []
    }
  })
}

export default App
