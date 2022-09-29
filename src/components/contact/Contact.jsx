import React, { useState, useRef } from 'react'
import "./contact.scss"
import HandshakeIcon from '@mui/icons-material/Handshake';
import emailjs from '@emailjs/browser';
export default function Contact() {
  const [message,setMessage] = useState(false)
  const form = useRef();
  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true)
    emailjs.sendForm('service_tmjblio', 'template_0z0ei5f', form.current, 'p_TaevDwCZI_7UZBB')
    .then((result) => {
        console.log(result.text);
        console.log("Message Sent")
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
        <input type="text" placeholder='Full Name' name="from_name" />
          <input type="text" placeholder='Email'name="from_name" />
          <textarea placeholder='Message' name="message"></textarea>
          <button type='submit' value="send">Send</button>
          {message &&<span>Thanks for contacting me!Will reply soon!</span>}
        </form>
      </div>
    </div>
  )
}
