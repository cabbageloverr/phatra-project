import React from 'react'
import './Menubutton.css'

function Menubutton() {
  return (
    <div className='buttonall'>
    <ul className='button-group'>    
    <li><a className="btnab" href="/"><i class="about"></i>About Us</a></li>
    <li><a className="btnaw" href="#"><i class="award"></i>Awards</a></li>
    <li><a className="btn" href="#"><i class="businesses"></i>Our Businesses</a></li>
    <li><a className="btn" href="#"><i class="news"></i>News&Activities</a></li>
    </ul>
    </div>
  )
}

export default Menubutton