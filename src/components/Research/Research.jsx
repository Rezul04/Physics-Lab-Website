import React from 'react'
import './Research.css'
import { ResearchThemes } from './ResearchThemes/ResearchThemes'
import { ResearchHero } from './ResearchHero/ResearchHero'
export const Research = () => {
  return (
    <>
    <div className="researchMain">
    <ResearchHero/>
    <div className="heading">Research Themes</div>
    <ResearchThemes/>
    </div>
    </>
  )
}
