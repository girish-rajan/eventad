import React from 'react';
import './Pricing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Pricing extends React.Component{

    componentDidMount(){
      AOS.init({
        duration : 2500
      })
    }
    render(){
        return <div className="bg-black"> 
        <h1 className="white pt5">  PRICING</h1>
        <div className="priceregion">
        
  <div className="columns" data-aos="zoom-in-left">
  <ul className="price">
    <li className="f1">$100</li>
    <li className="f3">BALCONY</li>
    <li ><hr className="ml3 mr3 mt3 priceline"></hr></li>
    <li className="grey silver">Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
    <li ><a href="notready" className="purchbutton">PURCHASE</a></li>
  </ul>
</div>

<div className="columns" data-aos="zoom-in-down">
  <ul className="price">
    <li className="f1">$150</li>
    <li className="f3">MEDIUM</li>
    <li ><hr className="ml3 mr3 mt3 priceline"></hr></li>
    <li className="grey silver">There are many variations of passages of Lorem Ipsum available</li>
    <li><a href="notready" className="purchbutton">PURCHASE</a></li>
  </ul>
</div>

<div className="columns" data-aos="zoom-in-right">
  <ul className="price">
    <li className="f1">$250</li>
    <li className="f3">STAR</li>
    <li ><hr className="ml3 mr3 mt3 priceline"></hr></li>
    <li className="grey silver">The standard chunk of Lorem Ipsum used since the 1500s is reproduced </li>
    <li ><a href="notready"  className="mt4 purchbutton">PURCHASE</a></li>
  </ul>
</div>
</div>
</div>
    }  
}

export default Pricing;

// className='tc bg-light-green br3 pa3 ma2 bw2 grow shadow-5 '
/*className="top-right"*/