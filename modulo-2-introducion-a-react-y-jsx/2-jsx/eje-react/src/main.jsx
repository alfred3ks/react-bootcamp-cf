import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Lista } from './App'
import AppSinJSX from './AppSinJSX';
import "../src/css/App.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Lista />
    <AppSinJSX />
  </React.StrictMode>
)
