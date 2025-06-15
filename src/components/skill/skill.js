import React from 'react';
import './skill.css';
import uiux from '../../assets/ui-design.png';
import webdev from '../../assets/website-design.png';
import ai_ml from '../../assets/ai_al_web.jpg';

const skill = () => {
  return (
    <section id='skill'>
        <span className='skiltitle'> What I do ?</span>
        <span className="skilldesc">I excel in UI/UX web design, blending creativity with user-centric principles, and bring expertise in AI/ML using TensorFlow and PyTorch for innovative solutions. As a transitioning freelancer after Cybersmithsecure, I’m eager to merge my design and tech skills in new projects.</span>
        <div className="skillbar">
        <img className='barimg' src={uiux} alt="uiux design" />
            <div className="skilltext">
                <h2>UI/UX Design</h2>
                <p>Creating engaging, user-friendly digital interfaces that prioritize accessibility and visual harmony.  </p>
                <p>Interface prototyping, responsive layouts, interactive design</p>
            </div>
        </div>
        <div className="skillbar">
        <img className='barimg'src={webdev} alt="web development" />
            <div className="skilltext">
                <h2>web development</h2>
                <p>Building dynamic, high-performance web interfaces with a strong emphasis on collaborative integration. </p> 
                <p>Component-based architecture, API synchronization, cross-browser compatibility</p>
            </div>
        </div>
        <div className="skillbar">
        <img className='barimg' src={ai_ml} alt="ai_ml_web" />
            <div className="skilltext">
                <h2>Automation Scripts & Data Analysis</h2>
                <p>Designing automated workflows to enhance productivity and streamline data handling, analytical frameworks to uncover meaningful patterns and support informed decision-making. </p>
            <p> Script development, process optimization, data interpretation, dataset refinement</p>
            </div>
        </div>


    </section>
  )
}

export default skill;
