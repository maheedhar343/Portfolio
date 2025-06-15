import React from 'react';
import './intro.css';
import btnImg from '../../assets/connect.svg';
import bg from '../../assets/my_image.png';
import { Link } from 'react-scroll';
const intro = () => {
  return (
    <section id="intro">
      <div className='par'>
      <div className="introcontent">
      <span className="hello">Hello,</span><br />
      <span id='name'>I'm Maheedhar reddy</span>
       <br />Developer <p className='para'>Frontend Developer | MERN Stack, SEO, Python Automation | Freelancer | Open to New Opportunities</p>
      <Link to="contact"><button className="btn animate-bounce"><img className='btnimg' src={btnImg} alt="Make connection"/>Make connection</button></Link>
      </div>
      <div>
      <img src={bg} alt="my img" className="bg" />
      </div>
      </div>
    </section>
  )
}

export default intro;
