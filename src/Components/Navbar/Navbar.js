import React , {Component} from 'react';
import {NavbarBrand ,NavbarToggler,Collapse,Navbar,Nav,NavLink} from 'reactstrap';
import{}from'react-router-dom';

import  './Navbar.css';
export default class Navbar1 extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="fixed-top">
        <Navbar  color="" light expand="md">
          <NavbarBrand  href="/" >Flower Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <ul>
                <NavLink className="Link" href="/" >Home</NavLink>
  
                <NavLink className="Link" href="#about" >About</NavLink>
      
                <NavLink className="Link" href="#services" >Services</NavLink>
                
                <NavLink className="Link" href="#products" >Products</NavLink>
      
                <NavLink className="Link"  href="#contact" >Contact</NavLink>
              </ul>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}