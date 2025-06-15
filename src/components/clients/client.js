import React from 'react'
import '../contact/contact.css'
import Card from '../../card.js'
import CodingClub from '../../assets/codingclub.png'
import Bytexl from '../../assets/bytexl.png'
import Upskillink from '../../assets/Upskillink.png'
import CSS from '../../assets/cybersmithsecure.png'
function client() {
  return (
    <div  id="clients">

        <h1 className="contacttitle m-8">Companies I worked with</h1>
        <div className="clientimgs grid gap-4 lg:grid-cols-4 sm:grid-cols-1">
            <Card img={CodingClub} subName="Coding Trainer" description='Conducted web development courses and AI/ML workshops.
                    Enhanced student skills and improved their assessment scores.' />
            <Card img={Bytexl} subName="Intern" description="Created educational content, including PPTs and study materials. Assisted in developing curriculum for students." />
            <Card img={Upskillink} subName="API Developer" description="Developed and maintained RESTful APIs for various applications." />
            <Card img={CSS} subName="Fullstack Developer" description="Developed and maintained the company's website. Automation scripts for generating reports and insights." />

        </div>
    </div>
  )
}

export default client
