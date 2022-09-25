import { NavLink } from "react-router-dom";
import { useState } from "react";

import Burger from '../../styles/images/burger.png'
import Close from '../../styles/images/close.svg'
import Socials from "./Socials";




function Navigation() {
  const [isActive, setIsActive] = useState(false);
    
  const handleClick = event => {
    setIsActive(current => !current);
  };

    return (
      <div className="navContainer">
          <NavLink className={"logoText"} to="/">as</NavLink>
          <div className="nav-div">
            <nav>
              <ul className={isActive ? 'ul-nav show' : 'ul-nav'}>
                <button className={isActive ? 'burger2 show' : 'burger2'} onClick={handleClick}>
                <img className="closeImg" src={Close} alt='close nav' />
                </button>
                <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/">Home</NavLink>
                <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/about">About</NavLink>
                <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/projects">Projects</NavLink>
                <NavLink activeclassname="active" onClick={handleClick} className={"tab"} to="/contact">Contact</NavLink>
              </ul>
              <button className="burger" onClick={handleClick}>
                <img src={Burger} alt='burger menu' />
              </button>
            </nav>
          </div>
          <Socials />
      </div>
    );
  }
  
  export default Navigation;
  