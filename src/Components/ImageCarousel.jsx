import React from 'react';
import { Carousel } from 'react-bootstrap';
// import {img4} from '../assets/index';
import { img4,img5,img6 } from '../assets';


function ImageCarousel() {
  return (
    <Carousel id="carouselExample">
      <Carousel.Item className="carousel-item active">
        <img src={img4} className="d-block w-100" alt="..." style={{ height: '300px' }} />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img src={img5} className="d-block w-100" alt="..." style={{ height: '300px' }} />
      </Carousel.Item>
      <Carousel.Item className="carousel-item">
        <img src={img6} className="d-block w-100" alt="..." style={{ height: '300px' }} />
      </Carousel.Item>
      {/* <Carousel.Item className="carousel-item">
        <img src={img1} className="d-block w-100" alt="..." style={{ height: '300px' }} />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default ImageCarousel;