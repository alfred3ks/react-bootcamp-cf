import React from 'react'
import ReactDOM from 'react-dom/client'
import AppContext from './AppContext'
import AppContextUno from './AppContextUno'
import AppContextDos from './AppContextDos'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContext />
    <AppContextUno />
    <AppContextDos />
  </React.StrictMode>
)
