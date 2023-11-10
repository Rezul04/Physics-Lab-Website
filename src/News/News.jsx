import React from 'react'
import { Hero } from './Hero/Hero'
import { NewsCarousel } from "./Carousel/NewsCarousel"
import "./News.css"


export const News = () => {
  return (
    <div className='News'>
        <Hero/>
        <NewsCarousel/>
    </div>
  )
}
