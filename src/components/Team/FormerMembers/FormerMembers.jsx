import React from 'react'
import './FormerMembers.css'
import sampleMember from '../../../assets/sampleAlumni.png'
import allMembers from '../../../../data/members.json'

export const FormerMembers = () => {
  return (
    <div className="memberContainer">
      {allMembers.formerMembers.map((member, index) => (
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
            <div className="memberName">{member.name || ''}</div>
            <div className="researchArea">
              <b>Research Area:</b> {member.reserach_area || ''}
            </div>
            <div className="passout">
              <b>Ph.D:</b> {member.completed_at || ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
