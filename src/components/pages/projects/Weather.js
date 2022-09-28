import React from 'react'
import WeatherDay from '../../../styles/images/weather.jpg'
import WeatherNight from '../../../styles/images/weathernight.jpg'
import { NavLink } from "react-router-dom";



function Weather() {
  return (
    <div className='project-page weather'>
    <NavLink to="/projects" className='project-description'><p className="project-description">my projects.</p></NavLink>
    <h1 className='project-title restaurantTitle'>Project: Weather App</h1>
    <p>The Odin Project: The Weather App</p>
    <div className='imgsDiv'>
        <div className='project-imgs'>
            <img className='img-1' src={WeatherDay} alt='main' />
            <h1>Landing page</h1>
        </div>
        <hr></hr>
        <div className='project-imgs second'>
            <h1>Landing page (Night)</h1>
            <img className='img-2' src={WeatherNight} alt='menu'/>
        </div>
        <div className='projectLink'>
            <div>
                <p>Visit page: </p>
                <a href="https://suljkanovicamir.github.io/weather/" target='_blank' rel="noreferrer" > 
                    <span> Shopping Website</span>
                </a> 
                </div>
                <a href="https://github.com/SuljkanovicAmir/weather" target='_blank' rel="noreferrer" > 
                    <span>Checkout Github</span>
                </a> 
        </div>
    </div>
  </div>
  )
}

export default Weather


