import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

function ContactSection() {
  return (
    <section className="text-center">
      <h3 className="mb-5">Contact us</h3>
      <Row>
        <Col lg={5}>
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243646.90547034072!2d78.24288677128587!3d17.41260836167205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1740657197791!5m2!1sen!2sin"
  width={400}
  height={400}
  style={{ border: 0 }}
  loading="lazy"
/>

        </Col>
        <Col lg={7}>
          <Form>
            <Row>
              <Col md={9}>
                <Row className="mb-4">
                  <Col md={6} className="mb-4 mb-md-0">
                    <Form.Group>
                      <Form.Control type="text" id="form3Example1" />
                      <Form.Label>First name</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Control type="email" id="form3Example2" />
                      <Form.Label>Email Address</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-4">
                  <Form.Control type="text" id="form3Example3" />
                  <Form.Label>Subject</Form.Label>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Control as="textarea" id="form4Example3" rows={4} />
                  <Form.Label>Message</Form.Label>
                </Form.Group>
                <div className="text-center text-md-start">
                  <Button type="submit" variant="primary" className="mb-5 mb-md-0">
                    Send
                  </Button>
                </div>
              </Col>
              <Col md={3}>
                <ul className="list-unstyled">
                  <li>
                    <i className="fas fa-map-marker-alt fa-2x text-primary"></i>
                    <p><small>New York, NY 10012, USA</small></p>
                  </li>
                  <li>
                    <i className="fas fa-phone fa-2x text-primary"></i>
                    <p><small>+ 01 234 567 89</small></p>
                  </li>
                  <li>
                    <i className="fas fa-envelope fa-2x text-primary"></i>
                    <p><small>contact@gmail.com</small></p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default ContactSection;