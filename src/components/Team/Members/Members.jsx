import React from 'react';
import './Members.css';
import sampleMember from '../../../assets/sampleAlumni.png';

const membersData = [
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb, Electromagnetics",
    image: sampleMember
  },
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb",
    image: sampleMember
  },
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb",
    image: sampleMember
  },
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb",
    image: sampleMember
  },
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb",
    image: sampleMember
  },
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb",
    image: sampleMember
  },
  {
    name: "James Watt",
    researchArea: "Steam engines, Light bulb",
    image: sampleMember
  }
];

const MemberCard = ({ name, researchArea, image }) => (
  <div className="memberCard">
    <div 
      className="memberImage" 
      style={{ backgroundImage: `url("${image}")`, backgroundSize: 'cover' }}
    />
    <div className="memberDesc">
      <div className="memberName">{name}</div>
      <div className="researchArea">
        <b>Research Area:</b> {researchArea}
      </div>
    </div>
  </div>
);

export const Members = () => {
  return (
    <div className="memberContainer">
      {membersData.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
};
