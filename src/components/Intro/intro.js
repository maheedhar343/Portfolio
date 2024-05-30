import React from 'react';
import './intro.css';
import btnImg from '../../assets/hireme.png';
import bg from '../../assets/bgimg1.jpg';
import { Link } from 'react-scroll';
const intro = () => {
  return (
    <section id="intro">
      <div className='par'>
      <div className="introcontent">
      <span className="hello">Hello,</span><br />
      I'am<span id='name'> Maheedhar </span><br />Website Designer <p className='para'>i am a skilled web developer with experience in cereating websites</p>
      <Link to="contact"><button className="btn animate-bounce"><img className='btnimg' src={btnImg} alt="Hire me" />Hire Me</button></Link>
      </div>
      <div>
      <img src={bg} alt="my img" className="bg" />
      </div>
      </div>
    </section>
  )
}

export default intro;
