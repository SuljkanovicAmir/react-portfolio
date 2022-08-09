import React from 'react'
import MainImg from '../../../styles/images/Main.jpg'
import MenuImg from '../../../styles/images/Menu.jpg'

function Restaurant() {
  return (
    <div className='restaurant'>
        <h1 className="description">my projects.</h1>
        <h1 className='restaurantTitle'>Project: Restaurant</h1>
        <p>The Odin Project: Restaurant Webpage</p>
        <div className='imgsDiv'>
            <div className='restaurantImgs'>
                <img src={MainImg} alt='main' />
                <h1>Landing page</h1>
            </div>
            <hr></hr>
            <div className='restaurantImgs'>
                <h1>Menu page</h1>
                <img src={MenuImg} alt='menu'/>
            </div>
            <div className='projectLink'>
                <p>Visit page:</p>
                <a href="https://amirrestaurant.netlify.app/" target='_blank' rel="noreferrer" > 
                    <span>Restaurant Website</span>
                </a> 
            </div>
        </div>
    </div>
  )
}

export default Restaurant