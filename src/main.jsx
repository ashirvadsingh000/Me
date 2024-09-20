import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home'
import RootP from './RootP'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootP />
  </React.StrictMode>,
)
