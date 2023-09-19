import React from 'react'
import "./Home.css";
import img  from  "./assests/1.jpg.png";

const Home = () => {
  return (
<>
<div className="home1" id="home">
  <div className="home">
    <h1>
      I,m a Frontened
      <br/>
      Web
      <br/>
      Developer
    </h1>
      
      <h4>Lorem ipsum dolor sit amet,
      <br/>
      consectetur adipiscing elit,
      <br/>
      based diam nonummy nibh eu
      </h4>
    <button>About Me</button> 
    </div>   
<img src={img} alt="Graphics"/>
</div>

</>

  )
}

export default Home
