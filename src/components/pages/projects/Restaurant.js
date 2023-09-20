import React from 'react'
import MainImg from '../../../styles/images/Main.jpg'
import MenuImg from '../../../styles/images/Menu.jpg'
import { NavLink } from "react-router-dom";
import ExitIcon from  "../../../styles/images/close.svg";
import { Link } from "react-router-dom";


function Restaurant() {
  return (
    <div className='project-page restaurant'>
        <NavLink to="/projects" className='project-description'><p className="project-description">my projects.</p></NavLink>
        <h1 className='project-title restaurantTitle'>Project: Restaurant</h1>
        <p>The Odin Project: Restaurant Webpage</p>
        <div className='imgsDiv'>
            <div className='project-imgs'>
                <img className='img-1' src={MainImg} alt='main' />
                <h1>Landing page</h1>
            </div>
            <hr></hr>
            <div className='project-imgs second'>
                <h1>Menu page</h1>
                <img className='img-2' src={MenuImg} alt='menu'/>
            </div>
            <div className='projectLink'>
                <div>
                <p>Visit page: </p>
                <a href="https://amirrestaurant.netlify.app/" target='_blank' rel="noreferrer" > 
                    <span> Restaurant Website</span>
                </a> 
                </div>
                <a href="https://github.com/SuljkanovicAmir/restaurant-page" target='_blank' rel="noreferrer" > 
                    <span>Checkout Github</span>
                </a> 
            </div>
        </div>
        <div className="exit-project">
      <Link to='/projects'>
        <img src={ExitIcon} alt="exit"/>
      </Link>
    </div>
    <div className='not-available'>
        <h1>Site Updates in Progress - Thank You for Your Patience!</h1>
    </div>
    </div>
  )
}

export default Restaurant