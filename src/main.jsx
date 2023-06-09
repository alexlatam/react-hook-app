import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

// import HooksApp from './HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWihtCustomHook } from './01-useState/CounterWihtCustomHook.jsx';
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx';
// import { SimpleFormWithCustomHook } from './02-useEffect/SimpleFormWithCustomHook.jsx';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks.jsx';
// import { FocusScreen } from './04-useRef/FocusScreen.jsx';
// import { Layout } from './05-useLayoutEffect/Layout.jsx';
// import { Memorize } from './06-memos/Memorize.jsx';
// import { MemorizeHook } from './06-memos/MemorizeHook.jsx';
// import { CallbackHook } from './06-memos/CallbackHook.jsx';
// import { Padre } from './07-tarea-memo/Padre.jsx';
// import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp.jsx';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWihtCustomHook /> */}
    {/* <SimpleForm /> */}
    {/* <SimpleFormWithCustomHook /> */}
    {/* <MultipleCustomHooks /> */}
    {/* <FocusScreen /> */}
    {/* <Layout /> */}
    {/* <Memorize /> */}
    {/* <MemorizeHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    <TodoApp />
  </React.StrictMode>,
)
