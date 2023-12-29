import React from 'react'
import './AlumniCard.css'
import alumni3 from '../../../assets/sampleAlumni.png'
export const AlumniCard = () => {
  return (
    <>
    <div className="alumniCard" style={{backgroundImage: `url("${alumni3}")`,backgroundSize: 'cover',}}>

        <div className="alumniCardName">
            <p id='alumniName'>Juan Encalada</p>
            <p id='alumniDesc'>POST</p>
        </div>
    </div>
    </>
  )
}
