
import React from 'react'
import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import routes from './router/index'
import 'nprogress/nprogress.css'

function App (): any {
  const router = createHashRouter(routes)
  return (
    <RouterProvider router={router} />
  )
}

export default App
