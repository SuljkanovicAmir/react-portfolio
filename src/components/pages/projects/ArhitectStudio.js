import React from 'react'
import ExitIcon from  "../../../styles/images/close.svg";
import { Link } from "react-router-dom";

function ArhitectStudio() {
  return (
    <div>
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

export default ArhitectStudio