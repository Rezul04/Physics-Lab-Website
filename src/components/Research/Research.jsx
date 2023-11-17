import React from 'react'
import './Research.css'
import { ResearchThemes } from './ResearchThemes/ResearchThemes'
import { ResearchHero } from './ResearchHero/ResearchHero'
export const Research = () => {
    const researchThemes=[{
        sno:1,
        title: "theme1",
        description: "description"
    },
    {
        sno:2,
        title: "theme2",
        description: "description"
    }
]
  return (
    <>
    <ResearchHero/>
    <div className="heading">Research Themes</div>
    <ResearchThemes researchThemes={researchThemes}/>

    </>
  )
}
