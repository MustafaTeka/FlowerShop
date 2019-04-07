/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import './Products.css';
import { Row, Col } from 'reactstrap';
import Choose from '../Choose/Choose';
export default class Products extends Component {
  render() {
    return (
      <section id="products" className="product">
        <div className="container">
          <div className="shop">
            <h1>Products</h1>
            <p>We simply can’t get enough floral photography, but we also love to read beautiful poetry and prose about flowers and nature.<br></br> In just a few powerful words, our mind creates its own image and invigorates our senses, whisking us away to that endless<br></br> flower field or basking in the sun with our hands in the garden.</p>
          </div>
          <Row>
            <Col className="wow flipInX" data-wow-duration="1.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>

            <Col className="wow flipInX" data-wow-duration="1.5s"  lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>

            <Col className="wow flipInX" data-wow-duration="1.5s"  lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>

            <Col className="wow flipInX" data-wow-duration="1.5s" data-wow-delay="1.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1295941/pexels-photo-1295941.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>

            <Col className="wow flipInX" data-wow-duration="1.5s" data-wow-delay="1.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/236287/pexels-photo-236287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>

            <Col className="wow flipInX" data-wow-duration="1.5s" data-wow-delay="1.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1462254/pexels-photo-1462254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>

            <Col className="wow flipInX" data-wow-duration="1.5s" data-wow-delay="2.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1877838/pexels-photo-1877838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>
            
            <Col className="wow flipInX" data-wow-duration="1.5s" data-wow-delay="2.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/1751673/pexels-photo-1751673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Col>
            
            <Col className="wow flipInX" data-wow-duration="1.5s" data-wow-delay="2.5s" lg="4" md="4" xs="12">
            <img src ="https://images.pexels.com/photos/827240/pexels-photo-827240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            </Col>
          </Row>
        </div>
          <Choose />
      </section>
    )
  }
}
