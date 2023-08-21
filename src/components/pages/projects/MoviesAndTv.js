import React from 'react'
import { NavLink } from "react-router-dom";
import MovieImg from '../../../styles/images/movies.jpg'
import TvImg from '../../../styles/images/tvshow.jpg'

function MoviesAndTv() {
  return (
    <div className='project-page restaurant'>
    <NavLink to="/projects" className='project-description'><p className="project-description">my projects.</p></NavLink>
    <h1 className='project-title restaurantTitle'>Project: Movies and TV</h1>
    <p>Nextjs, The Movie Database - (Still in progress)</p>
    <div className='imgsDiv'>
        <div className='project-imgs'>
            <img className='img-1' src={MovieImg} alt='main' />
            <h1>Landing page</h1>
        </div>
        <hr></hr>
        <div className='project-imgs second'>
            <h1>TV Show page</h1>
            <img className='img-2' src={TvImg} alt='menu'/>
        </div>
        <div className='projectLink'>
            <div>
            <p>Visit page: </p>
            <a href="https://moviesdatabase-nextjs.vercel.app/" target='_blank' rel="noreferrer" > 
                <span> Movies and Tv</span>
            </a> 
            </div>
            <a href="https://github.com/SuljkanovicAmir/moviesdatabase-nextjs" target='_blank' rel="noreferrer" > 
                <span>Checkout Github</span>
            </a> 
        </div>
    </div>
</div>
  )
}

export default MoviesAndTv