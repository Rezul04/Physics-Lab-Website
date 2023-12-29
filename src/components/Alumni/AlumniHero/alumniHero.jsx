import React from 'react'
import "./alumniHero.css"
import alumni1 from "../../../assets/alumni1.png"
import alumni2 from "../../../assets/alumni2.png"

export const AlumniHero = () => {
  return (
    <div>
      <img src={alumni2} alt="" id="bottom-image"/>
    <div className="AlumniHeroContainer">
        <div className="right-section">
            <div className="headingAlumni">Alumni: Where Memories Meet Futures </div>
            <div className="sub-text">At DTU, we take great pride in our vibrant community of alumni who have achieved
                remarkable milestones and contributed significantly to various fields.</div>
        </div>
        <img src={alumni1} alt="" id="top-right"/>
    </div>
    </div>
  )
}
