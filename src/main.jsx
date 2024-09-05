import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

import './styles/index.css'

import {BrowserRouter,Route,Routes} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<Home/>}/>
        <Route index={false} path="About" element={<About/>}/>
        <Route index={false} path="Projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)