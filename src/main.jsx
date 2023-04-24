import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import HooksApp from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWihtCustomHook } from './01-useState/CounterWihtCustomHook.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook.jsx';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './04-useRef/FocusScreen.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWihtCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <SimpleFormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    <FocusScreen />
  </React.StrictMode>,
)
