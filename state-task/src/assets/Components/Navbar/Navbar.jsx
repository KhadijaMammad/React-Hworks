import React from 'react'
import './navbar.css'
import { useState } from 'react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
      console.log("isOpen:", !isOpen);
    };
  return (
   <header>
    <div className="container">
        <div className="header">
            <div className="navbar">
                <div className="heading">
                   <span className='logo'>Start Bootstrap</span>
                </div>
                <div className="search">
                    <input className='search-input' type="text" placeholder='Search here'/>
                </div>
                <div className={`navigation ${isOpen ? 'active' : ''}`}>
                    <ul className='lists'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </div>
                <div className="menu" onClick={toggleMenu}>
              <i class="fa-solid fa-bars fa-2xl" style={{color:"beige"}}></i>
            </div>
            </div>
        </div>
    </div>
   </header>
  )
}
