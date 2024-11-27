import './assets/main.css'

import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
)
