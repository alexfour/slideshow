import logo from './logo.svg';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Carousel 
          autoPlay="true"
          interval="3000"
          infiniteLoop="true"
          width="700px"
          height="100px">
                <div style={{"height" : "800px"}}>
                    <img src={require('./assets/kuva1.PNG')} alt="Haapasalo" height="100%"/>
                    <p className="legend">Haapasalo 1</p>
                </div>
                <div style={{"height" : "800px"}}>
                    <video autoplay="autoplay" loop="true" controls muted><source src={require('./assets/video1.mp4')} type="video/mp4" height="100%"/>  </video>
                    <p className="legend">Haapasalo 2</p>
                </div> 
                <div style={{"height" : "800px"}}>
                    <img src={require('./assets/kuva2.PNG')} alt="Haapasalo" height="100%"/>
                    <p className="legend">Haapasalo 3</p>
                </div>
                <div style={{"height" : "800px"}}>
                    <video autoplay="autoplay" loop="true" controls muted><source src={require('./assets/video2.mp4')} type="video/mp4" height="100%"/>  </video>
                    <p className="legend">Haapasalo 4</p>
                </div>    
                <div style={{"height" : "800px"}}>
                    <img src={require('./assets/orava.PNG')} alt="Haapasalo" height="100%"/>
                    <p className="legend">Eskalaatio orava</p>
                </div>                       
      </Carousel>
      </header>
    </div>
  );
}

export default App;
