import {React} from 'react';
import {Header} from "./components/Navbar/Header"
import './App.css'
import {News} from "./News/News";
import Home from './components/Home/Home';
import Publications from './components/Publications/Publications';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Research } from './components/Research/Research';
import { Team } from './components/Team/Team';
import { Alumni } from './components/Alumni/Alumni';
import { Contact } from './components/Contact/Contact';
function App() {
  return (
    <>
    <Router>
        <Header/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/news' element={<News/>}/>
          <Route exact path='/team' element={<Team/>}/>
          <Route exact path='/research' element={<Research/>}/>
          <Route exact path='/publications' element={<Publications/>}/>
          <Route exact path='/alumni' element={<Alumni/>}/>
          <Route exact path='/contact' element={<Contact/>}/>

        </Routes>
        {/* <Footer /> */}
    </Router>
    </>
  )
}


export default App
