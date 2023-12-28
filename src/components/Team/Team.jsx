import React from 'react'
import { SubDept } from './SubDept/SubDept'
import TeamMain from './TeamMain/TeamMain'
import TeamHero from './TeamHero/TeamHero'
import { Profile } from './Profile/Profile'

export const Team = () => {
  return (
    <>
    {/* <Profile/> */}
    <TeamHero/>
    <TeamMain/>
    <SubDept/>
    <SubDept/>
    <SubDept/>
    </>
  )
}
