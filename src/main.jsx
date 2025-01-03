import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import Router from './routes/Router.jsx';
import { AuthProvider } from './Context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <AuthProvider>
    <Router />
  </AuthProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
