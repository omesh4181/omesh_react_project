import React from 'react';
import { Card } from 'react-bootstrap';
// import { img11 } from '../assets';
// import { vid } from '../assets';
import videotravel from '../../assets/videotravel.mp4';

function VideoCard() {
  return (
    <Card className="mb-3">


      <video width="100%" controls autoPlay loop muted>
        <source src={videotravel} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card.Body>
        <Card.Title>View Point</Card.Title>
        <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional
          content. This content is a little bit longer.</Card.Text>
        <Card.Text><small className="text-muted">Last updated 3 mins ago</small></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VideoCard;