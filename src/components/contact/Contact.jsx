import React, { useState, useRef } from 'react'
import "./contact.scss"
import HandshakeIcon from '@mui/icons-material/Handshake';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [message,setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
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
        <input type="text" placeholder='Full Name' />
          <input type="text" placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button type='submit'>Send</button>
          {message &&<span>Thanks for contacting me!Will reply soon!</span>}
        </form>
      </div>
    </div>
  )
}
