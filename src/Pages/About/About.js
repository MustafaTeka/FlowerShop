/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import './About.css'
export default class About extends Component {
  render() {
    return (
      <section id="about" className="about">
        <div className="container">
          <div className="shop wow bounceIn" data-wow-duration="1.5s">
            <h1>Welcome To Shop</h1>
            <p className="lead">
            We simply can’t get enough floral photography, but we also love to read beautiful poetry and prose about flowers and nature.<br></br> In just a few powerful words, our mind creates its own image and invigorates our senses, whisking us away to that endless<br></br> flower field or basking in the sun with our hands in the garden.<br></br>

There’s just something so intimate about letting our imaginations run freely after diving into a poem,<br></br> so we wanted to share our favorite flower poetry with you.<br></br> Hopefully these beautiful words inspire your own imaginations and possibly a poem of your own!
            </p>
          </div>
          <Row >
            <Col className="wow bounceInLeft" data-wow-duration="2s" xs="6">
              <div className="img">
                <p>“This old world that we’re livin’ in Is might hard to beat. You get a thorn with every Rose But – ain’t the roses sweet?”
                <br></br>
                <br></br>
                <span>Frank Stanton</span>
                </p>
              </div>
            </Col>

            <Col className="wow bounceInRight " data-wow-duration="2s" xs="6">
              <Row>
                <Col xs="6"><img src= "https://images.pexels.com/photos/2060987/pexels-photo-2060987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></Col>
                <Col xs="6">
                  <p className="from">Vassilis Comporozos</p>
                  <span>The flower is the stem’s cry of beauty to the universe.</span>
                </Col>
              </Row>
                <div className="clearfix"></div>
              <Row>
                <Col xs="6"><img src= "https://images.pexels.com/photos/1850587/pexels-photo-1850587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></Col>
                <Col xs="6">
                  <p className="from">Excerpt from Romeo and Juliet </p>
                  <span>What’s in a name? that which we call a rose By any other name would smell as sweet.</span>
                </Col>
              </Row>
              <div className="clearfix"></div>
              <Row>
                <Col xs="6"><img src= "https://images.pexels.com/photos/1040626/pexels-photo-1040626.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" /></Col>
                <Col xs="6">
                  <p className="from">William Blake</p>
                  <span>“To see the world in a grain of sand and heaven in a wildflower, hold infinity in the palm of your hand and eternity in an hour.”</span>
                </Col>
              </Row>
            </Col>
        </Row>
        </div>
      </section>
    )
  }
}