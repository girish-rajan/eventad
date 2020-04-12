import React from 'react';
import './Card.scss';
import Countdown from '../../Components/Countdown/Countdown';
import Hammenu from '../../Components/Hammenu/Hammenu';

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
                <img src="https://lh3.googleusercontent.com/iZFdKQlq_2Bmvx3F9-IGd34WD7r00eBicjjjlTmdz5S1QnhyuJPArw4SaBT6kopu5rBRW6Na0ojLDCsct5k7NzaXRFGZ=w1000" alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src="http://www.timisoaranight.gruzphoto.eu/IMG_8554.jpg" alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg" alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src="//lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg" alt="">
                </img>
                <div className="top-left">
                    <h3 className="ma1 f2 white">The Venue</h3>
                    <h2 className="ma1 f5 white"> Musical event</h2>
                </div>
            </li>
			<li className="carousel__item">
                <img src="//lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg" alt="">
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
