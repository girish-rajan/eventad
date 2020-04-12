import React from 'react';
import './EventDetails.css';
import calendaricon from './calendar.png';
import locationicon from './location.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

class EventDetails extends React.Component{

  componentDidMount(){
    AOS.init({
      duration : 2500
    })
  }
  render(){
    return <div className="mainbody">
     
      
    <div className="outerblock" data-aos="zoom-in-down">
        <div className="diamond">
        <img alt="eventimage"  className = "eventimage" src={calendaricon} ></img> 
        </div>
      <div className="content">
        <ul>
        <li><strong></strong> </li>
          <li><strong>Event Date & Time</strong> </li>
          <li><strong>4 May 2020 </strong></li>
          <li><strong> @10.00pm</strong></li>
        </ul>
    </div>
    
    </div>
    <div className="outerblock" data-aos="zoom-in-up" >
    
    <div className="diamondorange">
    <img alt="eventimage" className = "eventimage" src={locationicon} ></img> 
    </div>
  <div className="content">
    <ul>
    <li><strong></strong> </li>
      <li><strong>Event Location</strong> </li>
      <li><strong>345 Speer Street  </strong></li>
      <li><strong>Oakland, CA 9835</strong></li>
    </ul>
  </div>
  </div>
</div>
  }
}

export default EventDetails;

