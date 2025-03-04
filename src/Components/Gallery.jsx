import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Gallery() {
  return (
    <Row>
      <Col lg={4} md={12} className="mb-4 mb-lg-0">
        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" fluid />

        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
          className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" fluid />
      </Col>

      <Col lg={4} className="mb-4 mb-lg-0">
        <Image src="./india.img"
          className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" fluid />

        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
          className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" fluid />
      </Col>

      <Col lg={4} className="mb-4 mb-lg-0">
        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
          className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" fluid />

        <Image src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
          className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" fluid />
      </Col>
    </Row>
  );
}

export default Gallery;