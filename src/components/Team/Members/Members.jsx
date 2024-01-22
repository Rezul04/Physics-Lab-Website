import React from 'react'
import './Members.css'
import sampleMember from '../../../assets/sampleAlumni.png'

export const Members = () => {
  return (
    <div className="memberContainer">
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb,electromagnetics
                </div>
            </div>
        </div>
       
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb
                </div>
            </div>
        </div>
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb
                </div>
            </div>
        </div>
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb
                </div>
            </div>
        </div>
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb
                </div>
            </div>
        </div>
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb
                </div>
            </div>
        </div>
        <div className="memberCard">
            <div className="memberImage" style={{ backgroundImage: `url("${sampleMember}")`, backgroundSize: 'cover', }}></div>
            <div className="memberDesc">
                <div id="MemberName">
                    James watt
                </div>
                <div id="researchArea">
                    <b>Research Area:</b> Steam engines,Light bulb
                </div>
            </div>
        </div>
    </div>
  )
}
