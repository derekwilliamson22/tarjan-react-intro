import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// If this were node.....
//const PictureGallery = require('./PictureGallery')

// But on client side we do
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn'

// React Component Incantation
class App extends Component {

  state = {
    whatDayIsIt: 'Taco Day',
    feeling: 'Happy',
    //Clickalus Cage Day
  }

  onFeelingChange = (event) => {
    this.setState({
      feeling: event.target.value
    });
  }

  onDayChange = (event) => {
    this.setState({
      whatDayIsIt: event.target.value
    });
  }

  clickalicious = () => {
    this.setState({
      feeling: 'Clickalus',
      whatDayIsIt: 'Cage Day'
    }); // end setState
  } // end clickalicious

  render() {
    
    
    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>

        <input type='text' placeholder='Feeling' onChange={this.onFeelingChange} />
        <input type='text' placeholder='What Day Is It' onChange={this.onDayChange} />
        <button onClick={this.clickalicious}>Clickalicious</button>

        <h3>Things to learn about React:</h3>
        <ThingsToLearn />

        <h3>Check out my picture gallery:</h3>
        <PictureGallery />

        <h3>Check out another picture gallery:</h3>
        <PictureGallery />
      </div>
    );
  }


}

export default App;
