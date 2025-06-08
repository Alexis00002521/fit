import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
//import Login from './rutes/login'
import AdminPage from './rutes/AdminPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AdminPage/>
  </StrictMode>
)