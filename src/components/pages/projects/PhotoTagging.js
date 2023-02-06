import React from 'react'
import { NavLink } from "react-router-dom";
import PT from '../../../styles/images/p-t.jpg'
import PT2 from '../../../styles/images/p-t2.jpg'

function PhotoTagging() {
  return (
    <div className='project-page restaurant'>
    <NavLink to="/projects" className='project-description'><p className="project-description">my projects.</p></NavLink>
    <h1 className='project-title restaurantTitle'>Project: Photo Tagging App</h1>
    <p>The Odin Project: Where's Waldo (A Photo Tagging App)</p>
    <div className='imgsDiv'>
        <div className='project-imgs'>
            <img className='img-1' src={PT} alt='main' />
            <h1>Start screen</h1>
        </div>
        <hr></hr>
        <div className='project-imgs second'>
            <h1>Game screen</h1>
            <img className='img-2' src={PT2} alt='menu'/>
        </div>
        <div className='projectLink'>
            <div>
            <p>Visit page: </p>
            <a href="https://photo-tagging-amir.netlify.app/" target='_blank' rel="noreferrer" > 
                <span> Here</span>
            </a> 
            </div>
            <a href="https://github.com/SuljkanovicAmir/photo-tagging" target='_blank' rel="noreferrer" > 
                <span>Checkout Github</span>
            </a> 
        </div>
    </div>
</div>
  )
}

export default PhotoTagging