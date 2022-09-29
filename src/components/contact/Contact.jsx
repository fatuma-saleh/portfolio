import React, { useState, useRef } from 'react'
import "./contact.scss"
import HandshakeIcon from '@mui/icons-material/Handshake';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [message,setMessage] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_tmjblio', 'template_0z0ei5f', form.current, 'YOUR_PUBLIC_KEY')
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
        <form ref={form} onSubmit={handleSubmit}>
        <input type="text" placeholder='Full Name' name="user_name" />
          <input type="text" placeholder='Email'name="user_email" />
          <textarea placeholder='Message' name="message"></textarea>
          <button type='submit' value="send">Send</button>
          {message &&<span>Thanks for contacting me!Will reply soon!</span>}
        </form>
      </div>
    </div>
  )
}
