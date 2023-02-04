import React from 'react'
import { useState } from 'react'
import logo from '../img/logo.png'
import './Header.css'
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiX } from "react-icons/fi";

function Header() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click); 
    const closeMobilemenu = () => setClick(false); 
    

    
    return (
    <div className = "header">
        <div className="container">
            <ul className ="logo-container">
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                      <FiX className='fix'/>
                    ) : (
                      <FiMenu className='fimenu'/>
                    )}
                </div>
                <li><img src={logo} alt='logo' className='logo'/></li>
                <li><FiSearch className='fisearch'/> </li>
                </ul>
                
        </div>
    </div>
  )
}

export default Header