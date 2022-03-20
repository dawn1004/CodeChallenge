import React from 'react'
import { ReactComponent as YourSvg } from "../assets/homepage/logo.svg"

const NavBar = () => {
  return (
    <nav>

        <div className='humburger-menu'>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div className="left">
            
            <a href="#"><YourSvg /></a>

            <ul>
                <li>Shop</li>
                <li>Our Story</li>
                <li>Learn</li>
            </ul>
        </div>

        <div className="right">
            <ul>
                <li>Community</li>
                <li>Blog</li>
            </ul>            
        </div>
    </nav>
  )
}

export default NavBar