import React from 'react'
import GH from '../../styles/images/gh.svg'
import LinkedIn from '../../styles/images/linkd.svg'
import line from '../../styles/images/line.png'


function Socials() {
  return (
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
  )
}

export default Socials