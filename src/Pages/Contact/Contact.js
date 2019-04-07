import React, { Component } from 'react'
import './Contact.css';
export default class Contact extends Component {
  render() {
    return (
      <footer id="contact" className="text-center">
        <p className="myname wow zoomInUp " data-wow-duration="4s" data-wow-delay="1s">Mustafa Teka</p>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
      </footer>
    )
  }
}
