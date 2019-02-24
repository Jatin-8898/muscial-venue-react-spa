import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlights from './components/highlights';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:'1500px', background:'white'}}>
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlights/>
      </div>
    );
  }
}

export default App;
