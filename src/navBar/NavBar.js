import React, { useEffect, useState } from 'react'
import "./navBar.css"
import LLogo from "../assets/N.png"
import RLogo from "../assets/R-icon.jpg"


function NavBar() {
  const [ show , setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY > 100){
        setShow(true)
      }else setShow(false)
    });
    // CLEAN-UP
    return ()=>{
      window.removeEventListener("scroll",[])
    };
  },[])

return (
    <div className={`nav ${show && "nav__opacity"}`}>
        <img
        className='nav__logo'
        src={LLogo}
        alt="netflix"
        />
        <img
        className='nav__avatar'
        src={RLogo}
        alt="netflix-logo"
        />
    </div>
  )
}

export default NavBar