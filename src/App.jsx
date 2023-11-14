import React from 'react'
import {Header} from "./components/Navbar/Header"
import './App.css'
import {News} from "./News/News";
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Header/>
    <Home />
    <News/>
    </>
  )
}


export default App
