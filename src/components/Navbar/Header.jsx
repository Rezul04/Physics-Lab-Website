import React from 'react'
import './Header.css'
import logo from '../../assets/DTUlogo.jpg'
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>

<div className="navbar2">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">DTU Physics Lab</h1>
      </div>
      <div className="nav-links">
        <Link to='/'>Home</Link>
        <Link to="/news">News</Link>
        <Link to="/research">Research</Link>
        <Link to="/publications">Publications</Link>
        <Link to="/team">Team</Link>
        <Link to="/alumni">Alumni</Link>
        <Link to="/contact">Contact</Link>
        {/* <a href="/alumni">Alumni</a>
        <a href="/p">Publications</a>
        <a href="#">News</a>
        <a href="#">People</a>
        <a href="#">Alumni</a>
        <a href="#">Contact</a> */}
      </div>
    </div>
    </>
  )
}

