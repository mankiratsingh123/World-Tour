import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

 
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us 
            </p>
        <ul>
            <li>Contact mankiratmanchanda24@gmail.com</li>
            <li>+91 123456789</li>
            <li>New Delhi,India</li>
        </ul>
        </div>
        <div className="contact-col">
  
          <form>
            <label htmlFor="">Your Name</label>
            <input type='text' name='name' id='name' required/><br></br>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Your Phone Number' required/><br></br>
            <label>Write your message here</label>
            <textarea name='message' rows={6} placeholder='Type your message...'></textarea><br></br>
            <button type='submit' className='btn dark'>Submit</button>


        </form>
        </div>
      
    </div>
  )
}

export default Contact
