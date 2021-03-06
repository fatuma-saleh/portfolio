import React, { useState } from 'react'
import "./contact.scss"
import HandshakeIcon from '@mui/icons-material/Handshake';
export default function Contact() {
  const [message,setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      <div className="left">
        {/* <img src="docs/Handshake.jpeg" alt="" /> */}
        < HandshakeIcon className="hicon" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message &&<span>Thanks for contacting me!Will reply soon!</span>}
        </form>
      </div>
    </div>
  )
}
