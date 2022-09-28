import React from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import App from '../App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Restaurant from './pages/projects/Restaurant';
import Weather from './pages/projects/Weather';
import Shopping from './pages/projects/Shopping';
import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes() {
    const location = useLocation();

    return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<App />}/>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects/restaurant" element={<Restaurant />}/>
        <Route path="/projects/weather" element={<Weather />}/>
        <Route path="/projects/shopping" element={<Shopping />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes