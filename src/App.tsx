
import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router/index'

function App (): any {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default App
