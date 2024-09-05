import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

import './styles/index.css'

import {HashRouter,Route,Routes} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route index={true} path="/" element={<Home/>}/>
        <Route index={false} path="About" element={<About/>}/>
        <Route index={false} path="Projects" element={<Projects/>}/>
      </Routes>
    </HashRouter>
  </StrictMode>,
)