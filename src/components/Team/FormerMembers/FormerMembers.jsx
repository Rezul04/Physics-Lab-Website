import React from 'react'
import './FormerMembers.css'
import sampleMember from '../../../assets/sampleAlumni.png'

const formerMembers = [
  {
    name: 'James Watt',
    research: 'Steam engines, Light bulb, Electromagnetics',
    passout: 'September 2022',
    image: sampleMember,
  },
  // Duplicate the object or use real data if available
  // Just cloning it 8 times for now
  {}, {}, {}, {}, {}, {}, {}
].map((member, i) => ({
  ...member,
  key: i,
}));

export const FormerMembers = () => {
  return (
    <div className="memberContainer">
      {formerMembers.map((member, index) => (
        <div className="memberCard" key={index}>
          <div
            className="memberImage"
            style={{
              backgroundImage: `url("${member.image || sampleMember}")`,
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="memberDesc">
            <div className="memberName">{member.name || 'James Watt'}</div>
            <div className="researchArea">
              <b>Research Area:</b> {member.research || 'Steam engines, Light bulb, Electromagnetics'}
            </div>
            <div className="passout">
              <b>Ph.D:</b> {member.passout || 'September 2022'}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
