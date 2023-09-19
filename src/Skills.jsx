import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <main className="skill" id="skills">
    <h1 id="second">Skills</h1>
    <div>
      <p id="para">
        I enjoy dividing into and learning new things.Here's a list of technologies I've worked with
      </p>  
    </div>
    <div className="star">
  <div className="items">HTML</div>
  <div className="items">CSS</div>
  <div className="items">JAVASCRIPT</div>
  <div className="items">React</div>
</div>

<div className="star">
  <div className="items">GITHHUB</div>
  <div className="items">NODE JS</div>
  <div className="items">MONGO DB</div>
  <div className="items">AWS</div>
</div>

<div className="star">
  <div className="items">DANGO</div>
  <div className="items">SASS</div>
  <div className="items">MONGOdb</div>
  <div className="items">GraphQl</div>
</div>


    </main>
  )
}

export default Skills
