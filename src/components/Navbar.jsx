import React from 'react'
import cl from '../styles/Navbar.module.css'
import logo from '../assets/baloon.svg'
import searchSvg from '../assets/search.svg'
import profileSvg from '../assets/profile.svg'

const Navbar = () => {
  return (
    <div className={cl.navbar}>
        <div className={cl.left}>
            <a href='/'>
                <img src={logo} alt="Logo" />            
            </a>
            <a href="/" className={cl.link}>About</a>
            <a href="/" className={cl.link}>Out Tours</a>
            <a href="/" className={cl.link}>Explore</a>
            <a href="/" className={cl.link}>Guides</a>
            <a href="/" className={cl.link}>Contacts</a>
        </div>
        <div className={cl.right}>
            <img src={searchSvg} alt="searchSvg" />
            <img src={profileSvg} alt="profileSvg" />            
        </div>
    </div>
  )
}

export default Navbar