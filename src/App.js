import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height:'1500px', background:'white'}}>
        <Header/>

        <Element name="featured">
          <Featured/>
        </Element>

        <Element name="venueinfo">
          <VenueInfo/>
        </Element>
        
        <Element name="highlights">
          <Highlights/>
        </Element>
        
        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>

        <Footer/>

      </div>
    );
  }
}

export default App;
