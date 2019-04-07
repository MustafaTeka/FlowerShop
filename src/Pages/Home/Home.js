import React, { Component } from 'react'
import './Home.css'
import Carousel from '../../Components/Carousel/Carousel';
import About from '../About/About';
import Services from '../Services/Services';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import ScrollApp from '../../Components/Scroll/Scroll';
export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="welcome wow zoomInUp" data-wow-duration="2s" data-wow-delay="">Welcome</h1>
        <Carousel />
        <About />
        <Services />
        <Products />
        <Contact />
        <ScrollApp />
      </div>
    )
  }
}
