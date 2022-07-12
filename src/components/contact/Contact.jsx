import React, { useState } from 'react'
import "./contact.scss"
export default function Contact() {
  const [Message,setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefauult();
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="docs/Handshake.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form >
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message &&<span>Thanks for contacting me!Will reply soon</span>}
        </form>
      </div>
    </div>
  )
}
