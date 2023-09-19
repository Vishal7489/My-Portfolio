import React from 'react'
import {HashLink} from "react-router-hash-link";
import "./Header.css"

const Header = () => {
  return (
    <nav className="first" >
    <h1 id="thired">TB</h1>
    <main className="red">
    
<HashLink to={"/#home"}>Home</HashLink>
<HashLink to={"/#about"}>About</HashLink>
<HashLink to={"/#skills"}>Skills</HashLink>
<HashLink to={"/#work"}>Work</HashLink>
<HashLink to={"/#contact"}>Contact</HashLink>
</main>
</nav>
  )
}
export default Header
