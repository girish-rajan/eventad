import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import EventDetails from './Components/EventDetails/EventDetails';
import Highlights from './Components/Highlights/Highlights';
import Pricing from './Components/Pricing/Pricing';
import Maps from './Components/Maps/Maps';


function App() {
  return (
    <div className="App">
      <Card/>
       <EventDetails/>
      <Highlights/>
      <Pricing/>
      {/* <Maps/>  */}
    </div>
  );
}

export default App;
