import React from 'react'
import './Team.css'
import { SubDept } from './SubDept/SubDept'
import TeamMain from './TeamMain/TeamMain'
import TeamHero from './TeamHero/TeamHero'
import { Profile } from './Profile/Profile'
import { FormerMembers } from './FormerMembers/FormerMembers'
import { Members } from './Members/Members'

export const Team = () => {
  return (
    <>
    {/* <Profile/> */}
    <TeamHero/>
    <TeamMain/>
    <div className="teamHeadings">
      Lab members
    </div>
    <Members/>
    <div className="teamHeadings">
      Former Members
    </div>
    <FormerMembers/>
    </>
  )
}
