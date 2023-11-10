import React from 'react'
import { Hero } from './Hero/Hero'
import { NewsCarousel } from "./Carousel/NewsCarousel"
import { Highlights } from './Highlights/Highlights'
import "./News.css"
import { Vacancies } from './Vacancies/Vacancies'


export const News = () => {
  return (
    <div className='News'>
        <Hero/>
        <NewsCarousel/>
        <Highlights/>
        <Vacancies/>
    </div>
  )
}
