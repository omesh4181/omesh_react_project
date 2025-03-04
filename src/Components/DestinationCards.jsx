import React from 'react';
import './DestinationCard.css';
import { Card, CardGroup, Button } from 'react-bootstrap';
import {img8,img9,img10} from '../assets';


function DestinationCards() {
  return (
    <CardGroup className="card-group">
      <Card>
        <Card.Img variant="top" src={img8} style={{ height: '250px' }} />
        <Card.Body>
          <Card.Title>World Places</Card.Title>
          <Card.Text>
            <a href="">
              Other notable destinations:-<br />
              Machu Picchu, Peru<br />
              Great Barrier Reef, Australia<br />
              Grand Canyon, USA<br />
              Interlaken, Switzerland<br />
              Maldives<br />
              Abu Dhabi, UAE<br />
              Tokyo, Japan<br />
              London, UK<br />
              Sydney, Australia<br />
              Pamukkale, Turkey
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Free</Button>
          <Button className="text-muted">Premium $</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img9} style={{ height: '250px' }} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Free</Button>
          <Button className="text-muted">Premium $</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={img10} style={{ height: '250px' }} />
        <Card.Body>
          <Card.Title>Bus Journey</Card.Title>
          <Card.Text>
            =&gt; A journey to the mountains where you see cityscapes change into green pastures<br />
            =&gt; A journey where you meet a fellow traveler and exchange stories<br />
            =&gt; A journey where you capture panoramic views with your camera<br />
            =&gt; A journey where you experience a sudden downpour
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button className="text-muted">Free</Button>
          <Button className="text-muted">Premium $</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default DestinationCards;