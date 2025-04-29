import React from 'react'
import './FormerMembers.css'
import sampleMember from '../../../assets/sampleAlumni.png'
import formerMembers from '../../../../data/members.json'

export const FormerMembers = () => {
  return (
    <div className="memberContainer">
      {formerMembers.members.map((member, index) => (
        <div className="memberCard" key={index}>
          <div
            className="memberImage"
            style={{
              backgroundImage: `url("${member.image_url || sampleMember}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="memberDesc">
            <div className="memberName">{member.name || 'James Watt'}</div>
            <div className="researchArea">
              <b>Research Area:</b> {member.reserach_area || 'Steam engines, Light bulb, Electromagnetics'}
            </div>
            <div className="passout">
              <b>Ph.D:</b> {member.completed_at || 'September 2022'}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
