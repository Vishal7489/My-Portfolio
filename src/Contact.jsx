import React from 'react'
import "./Contact.css";

const Contact = () => {
  return (
    <>
    <div className="paraindex" id="contact">
    <div>
      <h1 id="index">Contact</h1>
      <h2 id="index4">Send me a message</h2>
    </div>

<div className="paraindex2">
    <div>
<input type="text" placeholder="Name" id="index1"/>
    </div>

    <div className="index2" >
    <input type="text" placeholder="Email"id="index2" />     
    </div>

    <div>
    <input type="text" placeholder="Message" id="index8"/>          
    </div>
    </div>
    <div id="but">
    <button>Let's Collaborate</button>
    </div>
    </div>
    </>
  )
}

export default Contact
