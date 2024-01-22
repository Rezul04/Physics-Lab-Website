import React from 'react'
import './Header.css'
import logo from '../../assets/DTU-logo.png'
import { Link } from "react-router-dom";
// import HamburgerIcon from '../../assets/hamburger.png';
import { useState, useEffect, useRef } from 'react';


export const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  useEffect(() => { 
    // Close the menu by default when the component mounts
    setShowMenu(true);
    document.body.classList.remove('showMenu'); // Remove 'showMenu' class
  }, []);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }

   

    return () => {
      document.removeEventListener('click', closeMenu);
    }
  }, [])
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    document.body.classList.toggle('showMenu', showMenu);
  }

  
  return (
    <>

<div className="navbar2">
      <div className="logo-container">
      <Link to='/' className='homeLink'>
        <img src={logo} alt="Logo" className="logo" /></Link>
        <h1 className="title">DTU Physics Lab</h1>
      </div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to="/news">Events</Link>
        <Link to="/research">Research</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </div>



      <div className="hamburger" onClick={toggleMenu} ref={menuRef}>
        {/* <img src={HamburgerIcon} alt="Hamburger icon" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
  <path d="M2.33496 21.461H32.7595M2.33496 12.0638H32.7595M2.33496 2.66664H16.5331H32.7595" stroke="#E4F9F5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        <div className={` ${showMenu?'showMobMenu':'myMobMenu'} `}>
          {/* this is mobile view navbar */}
          <Link onClick={toggleMenu} to="/" activeClass='active' className="mobItem"><span className='navLink'>Home</span></Link>
          <Link onClick={toggleMenu} to="/news"  activeClass='active' className="mobItem">News</Link>
          <Link onClick={toggleMenu} to="/research" activeClass='active'  className="mobItem">Research</Link>
          <Link onClick={toggleMenu} to="/publications" activeClass='active'  className="mobItem">Publications</Link>
          <Link onClick={toggleMenu} to="/team" activeClass='active' className="mobItem">Team</Link>
          <Link onClick={toggleMenu} to="/contact" activeClass='active'  className="mobItem">Contact</Link>
        </div>
      </div>


    </div>
    </>
  )
}

