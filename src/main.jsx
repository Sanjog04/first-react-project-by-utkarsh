import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h2>Utkarsh</h2>
    <h1>Added new message for dev branch.</h1>
  </StrictMode>,
)
