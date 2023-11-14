import React from 'react'
<<<<<<< HEAD
import { Header } from '../Navbar/Header'
import { Hero } from './Hero/Hero'

export const Home = () => {
  return (
    <>
    <Header/>
    <Hero/>
    </>
  )
}
=======
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
>>>>>>> 008c115d7251db011b4ed208c940f161cc5078ed
