/** @format */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import axios from 'axios'

// axios.defaults.baseURL = 'https://api.securemyair.com/gaes'
axios.defaults.baseURL = 'http://localhost/php/gaes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
