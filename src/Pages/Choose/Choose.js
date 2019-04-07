import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import WOW from 'wowjs';
import './Choose.css';
export default class Choose extends Component {
  componentDidMount(){
    new WOW.WOW().init();
    }
  render() {
    return (
    <section className="choose">
      <div className="container">
        <Row>
          <Col className="wow rotateInDownLeft" data-wow-duration="2s" xs="6" sm="4">
            <i className="fab fa-pagelines"></i>
            <div className="part">
                <h2>About Us</h2>
                <p>We are happy because we helped you</p>
            </div>
          </Col>
          <Col className="wow rotateIn" data-wow-duration="2s" data-wow-delay="1s" xs="6" sm="4">
            <i className="fas fa-thumbs-up"></i>
            <div className="part">
                <h2>What we do</h2>
                <p>We are happy because we helped you</p>
            </div>
           </Col>
          <Col className="wow rotateInDownRight" data-wow-duration="2s" data-wow-delay="1.5s" sm="4">
            <i className="fa fa-shopping-cart"></i>
            <div className="part">
                <h2>Why choose Us</h2>
                <p>We are happy because we helped you</p>
            </div>
        </Col>
        </Row>
      </div>
    </section>
    )
  }
}
