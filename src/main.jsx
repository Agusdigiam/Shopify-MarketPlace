import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App'
import './index.css'
import Menu from './components/Menu/Menu.jsx' 
import Middle from './components/Middle/Middle.jsx'
import Cards from './components/Cards/Cards.jsx'
import Cat from './components/Category/Cat'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Menu />
    <Middle />
    <Cards />
    <Cat />
  </React.StrictMode>,
)
