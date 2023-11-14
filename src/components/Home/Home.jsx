import React from 'react'
import HomeHero from './HomeHero/HomeHero'
import HomeMain from './HomeMain/HomeMain'
import Highlights from './Highlights/Highlights'
import Video from './Video/Video'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeMain/>
      <Highlights/>
      <Video/>
    </div>
  )
}

export default Home
