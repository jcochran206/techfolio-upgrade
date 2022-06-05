import React, {useState} from 'react';

import {images} from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import {client} from '../../client';


import './Footer.scss';

const Footer = () => {
const [formData, setFormData] = useState({name: "", email: '', message: ''});
const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setloading] = useState(false);

const { name, email, message }  = formData; //deconstruct 

const handleChangeInput = (e) => {
  const {name, value} = e.target;
  setFormData({...formData, [name]:value })
}

const handleSubmit = () => {
  setloading(true);

  const contact = {
    _type: 'contact',
    name: name,
    email: email,
    message: message,
  }

  client.create(contact)
  .then(() => {
    setloading(false);
    setIsFormSubmitted(true);
  })
}
 
return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jonathan.o.cochran@codingmajor.com" className='p-text'>jonathan.o.cochran@codingmajor.com</a>
        </div>

        
      </div>
      {!isFormSubmitted ? 
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className='p-text' name='name' placeholder='Your Name' value={name} onChange={handleChangeInput}/>
        </div>

        <div className="app__flex">
          <input type="text" className='p-text' name='email' placeholder='Your email' value={email} onChange={handleChangeInput}/>
        </div>

        <div>
          <textarea 
            name="message" 
            className="p-text" 
            value={message} 
            onChange={handleChangeInput}
            cols="10" rows="5"
            placeholder='your message'
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'), 
  'footer',
  'app__whitebg',
)