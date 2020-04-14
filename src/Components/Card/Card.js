import React from 'react';
import './Card.scss';
import Countdown from '../../Components/Countdown/Countdown';
import Hammenu from '../../Components/Hammenu/Hammenu';
import first from './first.jpg';
import second from './second.jpeg';
import third from './third.jpg';
import fourth from './fourth.jpg';
import fifth from './fifth.jpg';


const Card=()=>{
    return <div >

<div className="container">
	<div className="carousel">
		<input type="radio" id="carousel-1" name="carousel[]" defaultChecked={true}></input>
		<input type="radio" id="carousel-2" name="carousel[]"></input>
     <input type="radio" id="carousel-3" name="carousel[]"></input>
		<input type="radio" id="carousel-4" name="carousel[]"></input>
		<input type="radio" id="carousel-5" name="carousel[]"></input>
		<ul className="carousel__items">
			<li className="carousel__item">
                <img src={first} alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src={second} alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src={third} alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src={fourth} alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src={fifth} alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>

		</ul>
     <div className="carousel__prev">
     	<label htmlFor="carousel-1"></label>
     	<label htmlFor="carousel-2"></label>
     	<label htmlFor="carousel-3"></label>
     	<label htmlFor="carousel-4"></label>
     	<label htmlFor="carousel-5"></label>
     </div>
     <div className="carousel__next">
       <label htmlFor="carousel-1"></label>
       <label htmlFor="carousel-2"></label>
       <label htmlFor="carousel-3"></label>
       <label htmlFor="carousel-4"></label>
       <label htmlFor="carousel-5"></label>
     </div>
     <div className="carousel__nav">
       <label htmlFor="carousel-1"></label>
       <label htmlFor="carousel-2"></label>
       <label htmlFor="carousel-3"></label>
       <label htmlFor="carousel-4"></label>
       <label htmlFor="carousel-5"></label>
       <div className="top-right">   
            <Hammenu />
        </div>
        <div className="bot-left">
            
            <Countdown date={new Date(2020, 4,4)}/>
        </div>
     </div>


   </div>
   
 </div>
        </div>

}

export default Card;
