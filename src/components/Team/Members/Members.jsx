import React from 'react';
import './Members.css';
import allMembers from '../../../../data/members.json'

const MemberCard = ({ name, reserach_area, image_url, designation }) => (
  <div className="memberCard">
    <div 
      className="memberImage" 
      style={{ backgroundImage: `url("${image_url}")`, backgroundSize: 'cover' }}
    />
    <div className="memberDesc">
      <div className="memberName">{name}</div>
      <div className="researchArea">
        <p className='member-additional-details'><b>Research Area:</b> {reserach_area}</p>
        <p className='member-additional-details'><b>Designation:</b> {designation}</p>
      </div>
    </div>
  </div>
);

export const Members = () => {
  return (
    <div className="memberContainer">
      {allMembers.currentMembers.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
};
