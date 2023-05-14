import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Projects from './routes/Projects'
import './reset.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/" element={<App />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
