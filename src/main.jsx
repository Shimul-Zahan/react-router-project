import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRouter from './Router/Router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={myRouter} />
)
