import React from 'react'
import CartTab from '../../../styles/images/ShoppingApp/carttab.jpg'
import Products from '../../../styles/images/ShoppingApp/shopingtab.jpg'
import Landing from '../../../styles/images/ShoppingApp/shopping.jpg'
import { NavLink } from "react-router-dom";
import ExitIcon from  "../../../styles/images/close.svg";
import { Link } from "react-router-dom";



function Shopping() {
  return (
        <div className='project-page shopping'>
        <NavLink to="/projects" className='project-description'><p className="project-description">my projects.</p></NavLink>
        <h1 className='project-title'>Project: Shopping App</h1>
        <p>Shopping App [React]</p>
        <div className='imgsDiv'>
            <div className='project-imgs'>
                <img className='img-1' src={Landing} alt='main' />
                <h1>Landing page</h1>
            </div>
            <hr></hr>
            <div className='project-imgs second'>
                <h1>Products page</h1>
                <img className='img-2' src={Products} alt='menu'/>
            </div>
            <hr></hr>
            <div className='project-imgs'>
                <img className='img-3' src={CartTab} alt='menu'/>
                <h1>Cart tab</h1>
            </div>
            <div className='projectLink'>
                <div>
                <p>Visit page: </p>
                <a href="https://shop-amir.netlify.app/" target='_blank' rel="noreferrer" > 
                    <span> Shopping Website</span>
                </a> 
                </div>
                <a href="https://github.com/SuljkanovicAmir/shopping-app" target='_blank' rel="noreferrer" > 
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

export default Shopping