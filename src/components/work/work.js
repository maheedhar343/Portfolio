import React from 'react';
import './work.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.jpg';
import Portfolio5 from '../../assets/chat.png';
import Card from '../../card.js'
const work = () => {
  return (
    <section id='work'>
        <h2 className='worktitle animate-pulse'>My Portfolio</h2>
        <span className="workdesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achive this goals and create a strong online presence.</span>
        <div className="workimgs">
            <Card img={Portfolio1} subName="To-Do List"  description="This is my first react app that holds the data in Local browser memory make it feel as an app " navigate="https://maheedhar343.github.io/To_do_list/" />
            <Card img={Portfolio5} subName="chat website " description='Website using react and firebase real time update' navigate='' />
            <Card img={Portfolio4} subName="My JavaScript Work" description='my flow of work in JavaScript with code in GitHub' navigate='' />
            <Card img={Portfolio2} subName="Background removing app"  description="This project I made in python removes background of an image" navigate="https://bgremove-mahi.streamlit.app/"/>
            <Card img={Portfolio3} subName="My_website"  description="this is website people can see my work access to my notes" navigate="#" />
            
        </div>
        <button className="workbtn"><a href="https://github.com/maheedhar343">See More</a></button>
        </section>

  )
}

export default work
