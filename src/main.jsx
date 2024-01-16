import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { store } from './store/store.js'
import { Provider } from 'react-redux'

import { App } from './App.jsx'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)