
import React from "react"
import Home from "./Home"
import About from "./About"
import Header from "./Header"
import Skills from "./Skills"
import Work from "./Work"
import Contact from "./Contact"
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () => {
  return (
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <About/>
      <Skills/>
    <Work/>
    <Contact/>
  </BrowserRouter>
  )
}

export default App
