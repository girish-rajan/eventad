import React from 'react';
import './Hammenu.css';

const Hammenu=()=>{

    // const menuIcon=document.querySelector('.hamburgermenu');
    
    
    const hamClick=()=>{
        console.log('gg1');
        const navbar=document.querySelector('.navbar');
        navbar.classList.toggle("change");
    }
    
    return <div className="container">     
    <nav className="navbar">
        <div onClick={hamClick} className="hamburgermenu">
            <div  className="line line1"></div>
            <div  className="line line2"></div>
            <div  className="line line3"></div>
        </div> 
        <ul className="nav-list">
            <li className="nav-item">
                <a href="test" className="nav-link">Event starts in</a>
            </li>
            <li className="nav-item">
                <a href="test" className="nav-link">Venue NFO</a>
            </li>
            <li className="nav-item">
                <a href="test" className="nav-link">Highlights</a>
            </li>
            <li className="nav-item">
                <a href="test" className="nav-link">Location</a>
            </li>
        </ul> 

    </nav>
    </div>

}

export default Hammenu;