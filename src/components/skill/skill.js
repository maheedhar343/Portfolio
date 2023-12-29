import React from 'react';
import './skill.css';
import uiux from '../../assets/ui-design.png';
import webdev from '../../assets/website-design.png';
import ai_ml from '../../assets/ai_al_web.jpg';

const skill = () => {
  return (
    <section id='skill'>
        <span className='skiltitle'> What I do ?</span>
        <span className="skilldesc">I excel in UI/UX web design, harmonizing creativity with user-centric principles. Additionally, I bring expertise in Artificial Intelligence and Machine Learning, leveraging tools like TensorFlow and PyTorch to create intelligent systems. My skill set uniquely combines aesthetic design with innovative AI/ML solutions, offering a comprehensive approach to digital excellence.</span>
        <div className="skillbar">
        <img className='barimg' src={uiux} alt="uiux design" />
            <div className="skilltext">
                <h2>UI/UX Design</h2>
                <p>Designing intuitive and visually appealing digital interfaces to enhance user experience.
 (HTML, CSS, JavaScript).</p>
            </div>
        </div>
        <div className="skillbar">
        <img className='barimg'src={webdev} alt="web development" />
            <div className="skilltext">
                <h2>web development</h2>
                <p>Developing and managing the server-side logic, databases, and application integration for a seamless web experience.
( Python,Node.js, Java , Express MySQL, MongoDB), and proficiency in API development and integration.</p>
            </div>
        </div>
        <div className="skillbar">
        <img className='barimg' src={ai_ml} alt="ai_ml_web" />
            <div className="skilltext">
                <h2>AI_ML</h2>
                <p>Implementing artificial intelligence and machine learning solutions to analyze and derive insights from data for informed decision-making.
Technologies: Python, TensorFlow, PyTorch, scikit-learn, natural language processing (NLP), computer vision, and familiarity with data preprocessing and feature engineering techniques.</p>
            </div>
        </div>
        
        
       
    </section>
  )
}

export default skill;
