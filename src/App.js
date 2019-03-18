import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Facerecognition from './components/Facerecognition/Facerecognition.js';
import Clarifai from 'clarifai';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';


const app = new Clarifai.App({apiKey: '2bd1420d3f854515a5d35ba3db53eb0f'});


const particlesOption = {
          "particles": {
          "number": {
              "value": 150
          },
          "size": {
              "value": 5
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      input : 'a',
      link : '',
      array : [],
      state : 'signout',
      box0 : {},
      width:''
    }
  }



  onInputChange = (events) => {
      this.setState({
        input : events.target.value
      });
  }


  onRouteChange = (e, value) => {
      e.preventDefault();
      this.setState({
        state : value
      });
  }

  solveRes = (response) =>{
    const boxes = response.outputs[0].data.regions;
    const box0  = boxes[0].region_info.bounding_box;
    console.log(box0);
    // get size of image 
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);

    console.log("width",width);
    console.log("height",height);

    return({
        bottom : height - box0.bottom_row*height,
        left   : box0.left_col*width,
        right  : width - box0.right_col*width,
        top    : box0.top_row*height
    });
  }

  onClick = () => {
      this.setState({
        link : this.state.input
      });
      console.log(this.state.link);
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input)
        .then(response => {
            this.setState({box0:this.solveRes(response)});
            }
          )
        .catch(err =>  console.log(err));
  }

  render() {
    if(this.state.state==='signout'){
      return(
          <div>
              <Particles className='particles'
                     params= {particlesOption}
                    />
              <Navigation props = {'Register'} onRouteChange = {this.onRouteChange}/>
              <Signin onRouteChange = {this.onRouteChange}/>
          </div>
        )
    }
    else if(this.state.state==='signin'){
        return (
          <div>
             <Particles className='particles'
                   params= {particlesOption}
                  />
            <div className="App">
                <Navigation props = {'Sign Out'} onRouteChange = {this.onRouteChange}/>
                <Logo />
                <Rank />
                <ImageLinkForm onInputChange = {this.onInputChange} onClick={this.onClick} />
                <Facerecognition link = {this.state.link} box0 = {this.state.box0}  array = {this.state.array}/> 
            </div>
          </div>
        )
      }
      else {
        return(
          <div>
              <Particles className='particles'
                     params= {particlesOption}
                    />
              <Navigation props = {'Sign In'} onRouteChange = {this.onRouteChange}/>
              <Register onRouteChange = {this.onRouteChange}/>
          </div>
        )
      }
    }
}
export default App;
