import React from 'react'
import './Alumni.css'
import { AlumniCard } from './AlumniCard/AlumniCard'

export const Alumni = () => {
  return (
    <>
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
