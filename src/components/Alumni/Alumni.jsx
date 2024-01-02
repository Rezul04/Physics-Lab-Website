import React from 'react'
import './Alumni.css'
import { AlumniCard } from './AlumniCard/AlumniCard'
import { AlumniHero } from './AlumniHero/alumniHero'

export const Alumni = () => {
  return (
    <>
    <AlumniHero/>
    <div className="alumniMain">
    <div className="alumniTitle">
        Alumni
    </div>
    <div className="cardContainer">
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    <AlumniCard/>
    </div>
    </div>
    </>
  )
}
