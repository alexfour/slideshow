import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React, { useState } from 'react';

function App() {

  const [interval, setInterval] = useState(2500);
  const [controls, setControls] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        autoFocus={true}
        interval={interval}
        showArrows={controls}
        showStatus={controls}
        showIndicators={controls}
        showThumbs={controls}
        width="700px"
        height="100px">

        <div style={{"height" : "800px"}}>
          <img src={require('./assets/kuva1.PNG')} alt="Haapasalo" height="100%"/>
          <p className="legend" style={{"opacity": "0"}}>Haapasalo 1</p>
        </div>
        <div style={{"height" : "800px"}}> 
          <video id="video" autoPlay="autoplay" loop={true} controls muted><source src={require('./assets/video1.mp4')} type="video/mp4" height="100%"/>  </video>
          <p className="legend" style={{"width": "0%","bottom": "-63px"}}>Haapasalo 1</p>
        </div> 
        <div style={{"height" : "800px"}}>
          <img src={require('./assets/kuva2.PNG')} alt="Haapasalo" height="100%"/>
        </div>
        <div style={{"height" : "800px"}}>
          <video autoPlay="autoplay" loop={true} controls muted><source src={require('./assets/video2.mp4')} type="video/mp4" height="100%"/>  </video>
          <p className="legend" style={{"width": "0%","bottom": "-63px"}}>Haapasalo 1</p>
        </div>    
        <div style={{"height" : "800px"}}>
          <img src={require('./assets/orava.PNG')} alt="Haapasalo" height="100%"/>
        </div>                       
      </Carousel>

      <label>
        Interval<br/>
        <input
          type="text"
          value={interval}
          onChange={event => setInterval(event.target.value)}
        />
      </label>
      <label>
        Controls<br/>
        <input
          type="checkbox"
          defaultChecked={controls}
          value={controls}
          onChange={_event => setControls(!controls)}
        />
      </label>
      </header>
    </div>
  );
}

export default App;
