import React, { Suspense, lazy} from 'react'
import {Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import App from '../App'
import Home from './pages/Home'
import Projects from './pages/Projects'
import {AnimatePresence} from 'framer-motion'
import Loading from './pages/Loading';
import MoviesAndTv from './pages/projects/MoviesAndTv';

const Restaurant = lazy(() => import('./pages/projects/Restaurant'));
const Weather = lazy(() => import('./pages/projects/Weather'));
const Shopping = lazy(() => import('./pages/projects/Shopping'));
const PhotoTagging = lazy(() => import('./pages/projects/PhotoTagging'));
const ArhitectStudio = lazy(() => import('./pages/projects/ArhitectStudio'));



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
          <Route path="/projects/moviesandtv" element={ 
              <Suspense fallback={<Loading />}>
                <MoviesAndTv />
              </Suspense>}
            />
          <Route path="/projects/restaurant" element={
           <Suspense fallback={<Loading />}>
              <Restaurant />
            </Suspense>}
          />
          <Route path="/projects/weather" element={
           <Suspense fallback={<Loading />}>
              <Weather />
            </Suspense>}
          />
            <Route path="/projects/arhitectstudio" element={ 
            <Suspense fallback={<Loading />}>
              <ArhitectStudio />
            </Suspense>}
          />
          <Route path="/projects/shopping" element={ 
            <Suspense fallback={<Loading />}>
              <Shopping />
            </Suspense>}
          />
          <Route path="/projects/photo-tagging" element={ 
            <Suspense fallback={<Loading />}>
              <PhotoTagging />
            </Suspense>}
          />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes