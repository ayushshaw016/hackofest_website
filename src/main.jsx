import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import Footer from './components/Footer/Footer.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
      <App />
      {/* <Footer/> */}
    
  </React.StrictMode>,
)
