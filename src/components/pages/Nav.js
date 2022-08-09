import { NavLink } from "react-router-dom";
import { useState } from "react";
import GH from '../../styles/images/gh.svg'
import LinkedIn from '../../styles/images/linkd.svg'
import line from '../../styles/images/line.png'
import Burger from '../../styles/images/burger.png'
import Close from '../../styles/images/close.svg'





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
          <div className="socials ">
            <a href="https://www.linkedin.com/in/amir-suljkanovic/" target='_blank' rel="noreferrer">
              <img src={LinkedIn} alt="Linkedin" className="socicon"/>
            </a>
            <a href="https://github.com/SuljkanovicAmir" target='_blank' rel="noreferrer">
              <img  src={GH} alt="Github" className="socicon"/>
            </a>
            <a href='.'>
              <img  className="line" src={line} alt="line" />
            </a>
          </div>
      </div>
    );
  }
  
  export default Navigation;
  