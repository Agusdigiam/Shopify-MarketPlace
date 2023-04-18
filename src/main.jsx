import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App'
import './index.css'
import '../src/Media-Querys.css'
import Menu from './components/Menu/Menu.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>,
)
