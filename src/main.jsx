import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import HooksApp from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
import { CounterWihtCustomHook } from './01-useState/CounterWihtCustomHook.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    <CounterWihtCustomHook />
  </React.StrictMode>,
)