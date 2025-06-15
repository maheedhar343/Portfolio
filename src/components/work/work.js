import React from 'react';
import '../../components/contact/contact.css';
import DataAnalysis from '../../assets/DataAnalysis.png';
import Automation from '../../assets/Automation.png';
import SpeechToText from '../../assets/SpeechToText.png';
import JavaScript from '../../assets/JavaScript.png';
import Card from '../../card.js'
const work = () => {
  return (
    <section id='work'>
        <h2 className='contacttitle animate-pulse m-4'>My Portfolio</h2>
        <div className="text-lg mb-8">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. <br /> I am excited to bring my skills and experience to help businesses achive this goals and create a strong online presence.</div>
        <div className="clientimgs grid gap-4 lg:grid-cols-4 sm:grid-cols-1">
            <Card className="inset-ring-2 inset-ring-blue-500" img={DataAnalysis} subName="Data Analysis"  description="This project involves analyzing data sets to extract meaningful insights and support decision-making." navigate="https://github.com/maheedhar343/DataAnalysis" />
            <Card img={Automation} subName="Automation Project" description="web project that automationly converts the Excel sheets into word documents using Pandas as the main library." navigate="https://github.com/maheedhar343/Automation" />
            <Card img={JavaScript} subName="JavaScript Project" description="this is set of functions that explains the basics of JavaScript programming." navigate="https://github.com/maheedhar343/JavaScript_Basic" />
            <Card img={SpeechToText} subName="Speech to Text" description="This project involves converting spoken language into written text using speech recognition technology." navigate="https://github.com/maheedhar343/speech_text" />



        </div>
        <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><a href="https://github.com/maheedhar343?tab=repositories">See More</a></button>
        </section>

  )
}

export default work
