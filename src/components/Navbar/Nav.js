import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logoo.png';
import contact from '../../assets/contact.png';
import menu from '../../assets/menu.png';
export default function Nav(){
    const [showMenu ,setShowMenu]=useState(false);
    return(
        
            <nav className="navbar">
            <img src={logo} alt="" className="logo" />
               <div className="desktopmenu">
                <Link activeClass='active' to='intro' spy='true' smooth='true' offset={-50} className='linkitem'>Home</Link>
                <Link activeClass='active' to='skill' spy='true' smooth='true' offset={-50} className='linkitem'>About</Link>
                <Link activeClass='active' to='work' spy='true' smooth='true' offset={-50} className='linkitem'>Portfolio</Link>
                <Link activeClass='active' to='clients' spy='true' smooth='true' offset={-50} className='linkitem'>Clients</Link></div> 
                <button className="menubtn" onClick={()=>{
                    document.getElementById('contact').scrollIntoView({behavior:'smooth'})
                }}><img className='manubtnimg' src={contact} alt="@" /> contact me</button>
                <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
               <div className="navmenu" style={{display:showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy='true' smooth='true' offset={-50} className='litem'onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skill' spy='true' smooth='true' offset={-50} className='litem'onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='work' spy='true' smooth='true' offset={-50} className='litem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='clients' spy='true' smooth='true' offset={-50} className='litem'onClick={()=>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy='true' smooth='true' offset={-50} className='litem'onClick={()=>setShowMenu(false)}>Contact</Link>
                </div>
            </nav>
            
       
    )
}
