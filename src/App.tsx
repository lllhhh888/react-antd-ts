
import './App.css'
import { useRoutes } from 'react-router-dom'
import routes from './router/index'

function App (): any {
  return useRoutes(routes)
}

export default App
