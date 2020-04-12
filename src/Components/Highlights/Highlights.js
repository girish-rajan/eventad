import React from 'react';
import './Highlights.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

class Highlights extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0
          }
        //   this.props.navigation.addListener('willFocus', () => {
        //     alert('focused A!');
        //     console.log('focused');
        //   })
    }
 
    // handleScroll = () => {
      
    //    const speed=200;
    //     const id  = setInterval(() => 
    //     {
    //         (this.state.counter<30) ? this.setState({counter:this.state.counter+1}) : clearInterval(id);
           
    //     }, speed);

    //     this.setState({counter:0});
    //   };
       
    componentDidMount(){
        console.log('gg2 hello');
       
        this.interval = setInterval(() => {
            (this.state.counter<30) ? this.setState({counter:this.state.counter+1}) : clearInterval(this.interval);
       }, 100);
       AOS.init({
        duration : 2500
      })
    }

 
    // handleScroll = function () {
    //     const scrollTop = window.pageYOffset;
    //     const windowHeight = window.innerHeight;

    //     $elements.forEach((el, i) => {
    //       setState(el, windowHeight + scrollTop, once);
    //     });
    //   };

    render(){
        return <div className="highlightbody"  onScroll={this.handleScroll} >    
            <h1>
                HIGHLIGHTS
            </h1>
            <div id="content">
            <p>
                This is <strong>Serious Face</strong>, a two column CSS template by
                nodethirtythree with photos from 
                It's released (for free) under the
                Creative Commons Attribution 3.0 license
                so feel free to use it for any personal or commercial work, just keep our footer credit links intact.
                Hit up our for more awesomely
                cool free templates, and follow us on
                    for updates, announcements, and other
                mildly interesting ramblings.
            </p>
        </div>

        <div id="content" >
            <div className="left">
            
            <h2 className="discountnumber"> 
                {this.state.counter}%
            </h2>
            <p className="f3 black">OFF</p>
            </div>
            <div data-aos="fade-left" >
            <h3 className="pb3"> Purchase tickets before 20th JUNE</h3>
            <p>
                This is <strong>Serious Face</strong>, a two column CSS template by
                nodethirtythree with photos from 
                It's released (for free) under the
                Creative Commons Attribution 3.0 license
                so feel free to use it for any personal or commercial work, just keep our footer credit links intact.
                Hit up our for more awesomely
                cool free templates, and follow us on
                    for updates, announcements, and other
                mildly interesting ramblings.
            </p>
            <button className="mt3 br2 pl2 pr2 shadow-4 pt1 pb1 b bg-orange white-90">PURCHASE TICKETS</button>
            </div>
        </div>
    
     </div>
    }
}


export default Highlights;