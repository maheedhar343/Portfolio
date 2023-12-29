import React, { useRef } from 'react';
import './contact.css';
import Facebook from '../../assets/facebook-icon.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.jpg';
import Twitter from '../../assets/twitter.png';
import emailjs from '@emailjs/browser';
export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ug8tzkb', 'template_34lz34a', e.target, 'LgRdQGMbgyrq6UP6p')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("you sent Email successfully !! ...");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id='contactpage'>
        <div id="clients">
        <h1 className="contacttitle">My Clients</h1>
        <p className="cliedesc"> I have had the opporrtunity to work a diverse group of companies. Some of the notable companies I have worked with includes</p>
        <div className="clientimgs">
            <img src="" alt="" className="clientimg" />
        </div>
        </div>
        <div id="contact">
        <h1 className="contacttitle">Contact Me</h1>
        <span className='contactdesc'>Please fill out the form below to discuss any work opporrtunities</span>
        <form className="contactform" ref={form} onSubmit={sendEmail}>

            <input type="text" className="name"  placeholder='Your Name' name='name' />
            <input type="email" className="email" placeholder='Email Address' name='email' />
            <textarea name="message" rows="5" className="message" placeholder='Message...'></textarea>
            <button type="submit" value='Send' className="sendbtn">Submit</button>
            <div className="links">
                <img src={Facebook} alt="Facebook" className="link" />
                <img src={Instagram} alt="Instagram" className="link" />
                <img src={Linkedin} alt="Linkedin" className="link" />
                <img src={Twitter} alt="Twitter" className="link" /> 
            </div>
        </form>
        </div>
    </section>
  )
};


