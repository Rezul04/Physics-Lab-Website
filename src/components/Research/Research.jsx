import React from 'react'
import './Research.css'
import { Header } from '../Navbar/Header'
import { ResearchThemes } from './ResearchThemes/ResearchThemes'


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
    <Header/>
    <div className="heading">Research Themes</div>
    <ResearchThemes researchThemes={researchThemes}/>
    </>
  )
}
