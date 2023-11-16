import React from 'react'
import './teamHero.css'

const TeamHero = () => {
  return (
    <div className='teamHero'>
      <div className="heading">
      Meet Our Team
        </div>
        <div className="statsHolder">
        <div className="item">
            <h1>200+</h1>
            <h4>Awards</h4>
        </div>
        <div className="item">
            <h1>40+</h1>
            <h4>Publications</h4>
        </div>
        <div className="item">
            <h1>4000+</h1>
            <h4>Researchers</h4>
        </div>
        <div className="item">
            <h1>10+</h1>
            <h4>Scholars</h4>
        </div>
        </div>
    </div>
  )
}

export default TeamHero
