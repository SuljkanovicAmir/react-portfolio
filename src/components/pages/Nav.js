import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import Burger from '../../styles/images/burger.svg'
import Close from '../../styles/images/close.svg'
import Socials from "./Socials";




function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const [activeTransition, setActiveTransition] =  useState()

  useEffect(() => {
    if(activeTransition === true) {
      setTimeout(() => {
        setActiveTransition(false);
    }, 1500)
    }
  },[activeTransition])


  const handleClick = event => {
    setIsActive(current => !current);
    setActiveTransition(current => !current)
  };

    return (
      <div className="navContainer">
          <div className={activeTransition ? 'transition anim-trans' : 'transition'}></div>
          <NavLink className={"logoText"} onClick={() => {setIsActive(false); setActiveTransition(current => !current)}} to="/">[a]</NavLink>
          <div className="nav-div">
            <nav>
              <ul className={isActive ? 'ul-nav show' : 'ul-nav'}>
                <button className={isActive ? 'burger2 show' : 'burger2'} onClick={handleClick}>
                <img className="closeImg" src={Close} alt='close nav' />
                </button>
                <div>
                  <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/">Home</NavLink>
                  <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/about">About</NavLink>
                  <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/projects">Projects</NavLink>
                  <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/contact">Contact</NavLink>
                </div>
              </ul>
              <button className={isActive ? 'burger ' : 'burger hidden'} onClick={handleClick}>
                <img src={Burger} alt='burger menu' />
              </button>
            </nav>
          </div>
          <Socials />
      </div>
    );
  }
  
  export default Navigation;
  