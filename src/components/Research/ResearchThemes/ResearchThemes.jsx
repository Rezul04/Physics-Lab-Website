import React from 'react'
import './ResearchThemes.css'
import { Theme } from './Theme'

export const ResearchThemes = (props) => {
    
  return (
    // <div>{props.researchThemes.map((theme)=>{
    //        return (<Theme theme={theme} key={theme.sno}/>)
    // })}</div>
    <>
    <div>
    <Theme/>
    <Theme/>
    <Theme/>
    <Theme/>
    </div>
  
    </>
  )
}
