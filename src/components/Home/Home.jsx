import React from 'react'
import {Hero} from './Hero/Hero'
import HomeMain from './HomeMain/HomeMain'
import Highlights from './Highlights/Highlights'
import Video from './Video/Video'

const Home = () => {
  return (
    <div>
      <Hero/>
      <HomeMain/>
      <Highlights/>
      <Video/>
    </div>
  )
}

export default Home
