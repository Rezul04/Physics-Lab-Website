import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <>
     <div className="nav">
        
        <div id="webtitle">
            DTU Physics Lab
        </div>
        <div>
        
              <ul className="pages">
                <li><a href="#">Research</a></li>
                <li><a href="#">Publications</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">People</a></li>
                <li><a href="#">Alumni</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
        </div>
     </div>
    </>
  )
}
