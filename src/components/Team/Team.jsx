import React from 'react'
import { SubDept } from './SubDept/SubDept'
import TeamMain from './TeamMain/TeamMain'
import TeamHero from './TeamHero/TeamHero'

export const Team = () => {
  return (
    <>
    <TeamHero/>
    <TeamMain/>
    <SubDept/>
    <SubDept/>
    <SubDept/>
    </>
  )
}
