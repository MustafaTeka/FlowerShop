import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Carousel.css';

const items = [
  {
    src: 'https://images.pexels.com/photos/355296/pexels-photo-355296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Image 1',
    caption: '',
    header: '',
  },
  {
    src: 'https://images.pexels.com/photos/414160/pexels-photo-414160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Image 2',
    caption: '',
    header: ''
  },
  {
    src:'https://images.pexels.com/photos/255441/pexels-photo-255441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    altText: 'Image 3',
    caption: '',
    header: ''
  },
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;