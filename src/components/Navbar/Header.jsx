import React from 'react'
import './Header.css'
import logo from '../../assets/DTUlogo.jpg'


export const Header = () => {
  return (
    <>

<div className="navbar2">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">DTU Physics Lab</h1>
      </div>
      <div className="nav-links">
        <a href="#">Research</a>
        <a href="#">Publications</a>
        <a href="#">News</a>
        <a href="#">People</a>
        <a href="#">Alumni</a>
        <a href="#">Contact</a>
      </div>
    </div>
    </>
  )
}

