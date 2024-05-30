import React from 'react'
import '../contact/contact.css'
import Card from '../../card.js'
import CodingClub from '../../assets/codingclub.png'
import Bytexl from '../../assets/bytexl.png'
import wls from '../../assets/west_london_university.png'
import CSS from '../../assets/cybersmithsecure.png'
function client() {
  return (
    <div  id="clients">

        <h1 className="contacttitle">My Clients</h1>
        <div className="clientimgs grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
            <Card img={CodingClub} subName="Coding Trainer" description='Conducted web development courses and AI/ML workshops.
                    Enhanced student skills and improved their assessment scores.' />
            <Card img={Bytexl} subName="Intern - Content Developer" description="Created educational content, including PPTs and study materials. Assisted in developing curriculum for students." />
            <Card img={wls} subName="Research Intern - Machine Learning" description="Conducted research on machine learning algorithms. Published a paper on ML advancements." />
            <Card img={CSS} subName="Fullstack Developer" description="Developed and maintained the company's website. fullstack solutions to enhance functionality. with API inclusion and security checks..." />

        </div>
    </div>
  )
}

export default client
