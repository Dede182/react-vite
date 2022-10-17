import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import App from './App'
import 'antd/dist/antd.css'
import  store  from './App/store/store'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />

    </Provider>
  </Router>

)
